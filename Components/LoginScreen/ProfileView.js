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

//import Sheets
import OrderHistory from "./PreviousOrders/OrderHistory";

//import Stores
import PlantStore from "../Stores/PlantStore";
import PlantingHistory from "./PreviousOrders/PlantingHistory";
import userdatabase from "../Stores/databases/userdatabase";

class ProfileView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      name: PlantStore.currentUser[0].name,
      email: PlantStore.currentUser[0].email,
      phone: PlantStore.currentUser[0].number
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
        <Card transparent>
          <CardItem header>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              {currentUser.name}
            </Text>
            <Button
              transparent
              disabled={this.setState.editMode}
              style={{ justifyContent: "flex-end" }}
              onPress={() => this.setState({ editMode: !this.state.editMode })}
            >
              <Icon name="edit" type="MaterialIcons" />
            </Button>
          </CardItem>
          <CardItem bordered>
            <Text note>
              User Since: {moment(currentUser.created_date).format("DD-MMM-YY")}
            </Text>
          </CardItem>
        </Card>
        {this.state.editMode ? (
          <View>
            <Item
              fixedLabel
              style={{
                backgroundColor: "#e9ffe8",
                opacity: 0.7
              }}
            >
              <Text> </Text>
              <Label> Name:</Label>
              <Input
                autoCapitalize="none"
                placeholder="name"
                value={this.state.name}
                onChangeText={inputVal => this.setState({ name: inputVal })}
              />
            </Item>
            <Item
              fixedLabel
              style={{
                backgroundColor: "#e9ffe8",
                opacity: 0.7
              }}
            >
              <Text> </Text>
              <Label> Email:</Label>
              <Input
                autoCapitalize="none"
                placeholder="email"
                value={this.state.email}
                onChangeText={inputVal => this.setState({ email: inputVal })}
              />
            </Item>
            <Item
              fixedLabel
              style={{
                backgroundColor: "#e9ffe8",
                opacity: 0.7
              }}
            >
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
            <Item>
              <Text> </Text>
            </Item>
            <Button
              success
              full
              rounded
              style={{
                backgroundColor: "#047200",
                opacity: 0.7
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
              success
              full
              rounded
              style={{
                backgroundColor: "red",
                opacity: 0.7
              }}
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
                <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                  Previous Orders:
                </Text>
              </CardItem>
              {orders}
            </Card>
            <Card>{tracking}</Card>
          </View>
        )}
      </View>
    );
  }
}

export default ProfileView;
