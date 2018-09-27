import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "react-navigation";
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Icon,
  Item,
  Button,
  Thumbnail,
  Left,
  Label,
  Input,
  Right
} from "native-base";
import moment from "moment";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

//import Sheets
import OrderHistory from "./PreviousOrders/OrderHistory";

//import Stores
import PlantStore from "../Stores/PlantStore";
import PlantingHistory from "./PreviousOrders/PlantingHistory";
import userdatabase from "../Stores/databases/userdatabase";
import UserStore from "../Stores/UserStore";

class ProfileView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      name: PlantStore.currentUser[0].name,
      email: PlantStore.currentUser[0].email,
      phone: PlantStore.currentUser[0].number,
      orderOpen: false,
      trackOpen: false
    };
  }

  submitUserChanges() {
    this.setState({ editMode: false });
  }
  cancelUserChanges() {
    this.setState({ editMode: false });
  }

  render() {
    let currentUser = PlantStore.currentUser[0];
    let plants = PlantStore.plants;
    let orders = currentUser.orderHistory.map((order, index) => (
      <OrderHistory order={order} key={index} />
    ));
    let tracking = currentUser.plantingHistory.map((track, index) => (
      <PlantingHistory plant={track} key={index} />
    ));

    return (
      <View>
        <Card>
          <CardItem header bordered>
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                  {currentUser.name}
                </Text>
                <Button
                  transparent
                  disabled={this.setState.editMode}
                  style={{ justifyContent: "flex-end" }}
                  onPress={() =>
                    this.setState({ editMode: !this.state.editMode })
                  }
                >
                  {!this.state.editMode && (
                    <Icon
                      name="edit"
                      type="MaterialIcons"
                      style={{ color: "#119a50" }}
                    />
                  )}
                </Button>
              </View>
              <Text note>{currentUser.email}</Text>
              <Text note>{currentUser.phone}</Text>
              <Text note>
                User Since:{" "}
                {moment(currentUser.created_date).format("DD-MMM-YY")}
              </Text>
            </View>
          </CardItem>
        </Card>
        {this.state.editMode ? (
          <View>
            <Item fixedLabel>
              <Text> </Text>
              <Label> Name:</Label>
              <Input
                autoCapitalize="none"
                placeholder="name"
                value={this.state.name}
                onChangeText={inputVal => this.setState({ name: inputVal })}
              />
            </Item>
            <Item fixedLabel>
              <Text> </Text>
              <Label> Email:</Label>
              <Input
                autoCapitalize="none"
                placeholder="email"
                value={this.state.email}
                onChangeText={inputVal => this.setState({ email: inputVal })}
              />
            </Item>
            <Item fixedLabel>
              <Text> </Text>
              <Label> Phone:</Label>
              <Input
                autoCapitalize="none"
                placeholder="number"
                keyboardType="numeric"
                value={this.state.number}
                onChangeText={inputVal => this.setState({ number: inputVal })}
              />
            </Item>
            <Item
              style={{
                backgroundColor: "transparent",
                borderColor: "transparent"
              }}
            >
              <Text> </Text>
            </Item>
            <Button
              success
              full
              rounded
              style={{
                backgroundColor: "#119a50",
                borderColor: "transparent"
              }}
              onPress={() => this.submitUserChanges()}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "white"
                }}
              >
                Submit New Changes
              </Text>
            </Button>
            <Text> </Text>
            <Button
              danger
              full
              rounded
              onPress={() => this.cancelUserChanges()}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "white"
                }}
              >
                Cancel Changes
              </Text>
            </Button>
          </View>
        ) : (
          <View>
            <Card>
              <CardItem bordered>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Tracked Plants:
                </Text>
                <Right>
                  <Button
                    transparent
                    disabled
                    color="green"
                    onPress={() =>
                      this.setState({ trackOpen: !this.state.trackOpen })
                    }
                  >
                    {this.state.trackOpen ? (
                      <Icon
                        type="Entypo"
                        name="chevron-up"
                        style={{ fontSize: 25, color: "#119a50" }}
                      />
                    ) : (
                      <Icon
                        type="Entypo"
                        name="chevron-down"
                        style={{ fontSize: 25, color: "#119a50" }}
                      />
                    )}
                  </Button>
                </Right>
              </CardItem>
              {this.state.trackOpen && tracking}
            </Card>
            <Card>
              <CardItem bordered>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Previous Orders:
                </Text>
                <Right>
                  <Button
                    transparent
                    onPress={() =>
                      this.setState({ orderOpen: !this.state.orderOpen })
                    }
                  >
                    {this.state.orderOpen ? (
                      <Icon
                        type="Entypo"
                        name="chevron-up"
                        style={{ fontSize: 25, color: "#119a50" }}
                      />
                    ) : (
                      <Icon
                        type="Entypo"
                        name="chevron-down"
                        style={{ fontSize: 25, color: "#119a50" }}
                      />
                    )}
                  </Button>
                </Right>
              </CardItem>
              {this.state.orderOpen && orders}
            </Card>
            <Button
              danger
              full
              bordered
              rounded
              style={{
                backgroundColor: "white",
                shadowOffset: 0.5,
                shadowOffset: { width: 10, height: 10 }
              }}
              onPress={() => UserStore.userSignedIn()}
            >
              <Text style={{ color: "red", fontWeight: "bold" }}>SIGN OUT</Text>
            </Button>
          </View>
        )}
      </View>
    );
  }
}

export default withNavigation(observer(ProfileView));
