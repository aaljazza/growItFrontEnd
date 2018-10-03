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
import AuthStore from "../Stores/AuthStore";
import HistoryStore from "../Stores/HistoryStore";
import CartStore from "../Stores/CartStore";

class ProfileView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      name: AuthStore.user.username,
      email: AuthStore.user.email,
      phone: false,
      orderOpen: false,
      trackOpen: false
    };
  }

  render() {
    let currentUser = PlantStore.currentUser[0];
    let user = AuthStore.user;
    let plants = PlantStore.plants;
    let orders = UserStore.orders.map((order, index) => (
      <OrderHistory order={order} key={index} />
    ));
    let countOrders = UserStore.orders.length;
    let countTrackers = 0;
    for (let j = 0; j < UserStore.updatedTrackList.length; j++) {
      if (UserStore.updatedTrackList[j].active === true) {
        countTrackers += 1;
      }
    }
    let tracking = UserStore.updatedTrackList.map((track, index) => (
      <PlantingHistory track={track} key={index} />
    ));
    return (
      <View>
        <Card>
          <CardItem header bordered>
            <Text style={{ fontSize: 24, fontWeight: "bold", color: "black" }}>
              {AuthStore.user.username && AuthStore.user.username.toUpperCase()}
            </Text>
          </CardItem>
          <CardItem>
            <Text note>{AuthStore.user.email}</Text>
          </CardItem>
        </Card>
        <View>
          <Card>
            <CardItem bordered>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                {countTrackers} Tracked Plant
                {countTrackers !== 1 && "s"}:
              </Text>
              <Right>
                <Button
                  transparent
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
                {countOrders} Previous Order
                {countOrders !== 1 && "s"}:
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
          <Text> </Text>
          {CartStore.orders.length > 0 && (
            <Button
              full
              rounded
              style={{
                marginTop: 10,
                shadowOpacity: 0.5,
                backgroundColor: "#119a50",
                shadowOffset: { width: 0, height: 5 }
              }}
              onPress={() => {
                if (UserStore.signedIn) {
                  this.props.navigation.navigate("AddressConfirmation");
                  HistoryStore.changePage("Cart");
                } else {
                  this._checkOutAlert();
                }
              }}
            >
              <Text style={{ fontWeight: "bold", color: "white" }}>
                PROCEED TO CHECKOUT
              </Text>
            </Button>
          )}
          <Text> </Text>
          <Button
            danger
            full
            bordered
            rounded
            onPress={() => {
              AuthStore.logoutUser();
              UserStore.userSignedIn();
              this.props.navigation.navigate("Shop");
              HistoryStore.changePage("Profile");
            }}
          >
            <Text style={{ color: "red", fontWeight: "bold" }}>SIGN OUT</Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default withNavigation(observer(ProfileView));
