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
  Button,
  Thumbnail,
  Left,
  Right
} from "native-base";
import moment from "moment";

//import Sheets
import OrderHistory from "./PreviousOrders/OrderHistory";

//import Stores
import PlantStore from "../Stores/PlantStore";
import PlantingHistory from "./PreviousOrders/PlantingHistory";

class ProfileView extends React.Component {
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
          </CardItem>
          <CardItem bordered>
            <Text note>
              User Since: {moment(currentUser.created_date).format("DD-MMM-YY")}
            </Text>
          </CardItem>
          <CardItem bordered>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              Previous Orders:
            </Text>
          </CardItem>
          {orders}
        </Card>

        <Card>{tracking}</Card>
      </View>
    );
  }
}

export default ProfileView;
