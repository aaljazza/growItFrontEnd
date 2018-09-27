//import liraries
import React from "react";
import { StatusBar, Alert } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  View,
  Body,
  Content,
  Header,
  Label,
  Title,
  Left,
  Icon,
  Right,
  Item,
  Input,
  FooterTab
} from "native-base";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";
import HeaderBar from "../Header/Header";
import FooterBar from "../Footer/Footer";
import CartStore from "../Stores/CartStore";
import CartRow from "./CartRows";
import PlantStore from "../Stores/PlantStore";
import UserStore from "../Stores/UserStore";

// create a component
class OrderRows extends React.Component {
  render() {
    let order = this.props.order;
    let plant;
    let indexVal = PlantStore.plants.findIndex(
      plant => plant.id === order.product
    );
    if (indexVal >= 0) {
      plant = PlantStore.plants[indexVal];
    } else {
      indexVal = PlantStore.accessories.findIndex(
        plant => plant.id === order.product
      );
      plant = PlantStore.accessories[indexVal];
    }
    return (
      <View style={{ flexDirection: "column" }}>
        <Text style={{ alignSelf: "flex-start" }}>
          {" "}
          {order.quantity} X {plant.name}
        </Text>
        <Text style={{ alignSelf: "flex-end" }}>
          {" "}
          {order.quantity * plant.price} K.D.
        </Text>
      </View>
    );
  }
}

export default withNavigation(observer(OrderRows));
