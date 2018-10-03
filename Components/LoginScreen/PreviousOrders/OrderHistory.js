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
import { withNavigation } from "react-navigation";
import { observer } from "mobx-react";

//import Stores
import PlantStore from "../../Stores/PlantStore";

// create a component
class OrderHistory extends Component {
  render() {
    let order = this.props.order;
    orderCount = this.props.orderCount;
    return (
      <Card>
        <CardItem header>
          <Text>
            Order {orderCount} on{" "}
            {moment(order.date_created).format("DD-MMM-YY")}
          </Text>
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
export default withNavigation(observer(OrderHistory));
