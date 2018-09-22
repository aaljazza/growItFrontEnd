//import liraries
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body
} from "native-base";
import moment from "moment";

//import Stores
import PlantStore from "../../Stores/PlantStore";

// create a component
class OrderHistory extends Component {
  render() {
    let order = this.props.order;
    return (
      <Card>
        <CardItem header>
          <Text>
            Order {order.id} on {moment(order.date).format("DD-MMM-YY")}{" "}
          </Text>
          <Text note>Total = {order.price} K.D.</Text>
        </CardItem>
      </Card>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

//make this component available to the app
export default OrderHistory;
