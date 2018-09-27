import React from "react";

import { View, ListView, SafeAreaView, Image, Alert } from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Thumbnail,
  Text,
  SwipeRow,
  Card,
  CardItem,
  Left,
  Body,
  Right
} from "native-base";
import { observer } from "mobx-react";
import PlantStore from "../Stores/PlantStore";
import { withNavigation } from "react-navigation";
import CartStore from "../Stores/CartStore";

class CartRow extends React.Component {
  removeItemAlert(plantName, productID, quantity) {
    Alert.alert(`Remove ${plantName} from Cart`, "", [
      {
        text: "Yes, Remove",
        onPress: () => {
          CartStore.removeFromCart(productID, quantity);
          PlantStore.removeProductToCart(productID, quantity);
        }
      },
      {
        text: "No, Leave it",
        onPress: () => console.log("canceled")
      }
    ]);
  }
  render() {
    let productID = this.props.productID;
    let indexVal = PlantStore.plants.findIndex(
      product => product.id === productID
    );
    let plant;
    if (indexVal >= 0) {
      plant = PlantStore.plants[indexVal];
    } else {
      indexVal = PlantStore.accessories.findIndex(
        accessory => accessory.id === productID
      );
      plant = PlantStore.accessories[indexVal];
    }
    let cartIndex = CartStore.orders.findIndex(
      order => order.product === productID
    );
    let order = CartStore.orders[cartIndex];
    return (
      <Card
        style={{
          shadowOpacity: 0.5,
          shadowRadius: 3
        }}
      >
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: plant.img }} style={{ height: 50 }} />
          </Left>
          <Body>
            <View style={{ flexDirection: "column" }}>
              <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                {plant.name}
              </Text>
              <Text note style={{ color: "black", fontSize: 12 }}>
                {order.quantity} x
              </Text>
              <Text note style={{ color: "black", fontSize: 12 }}>
                {plant.price} K.D.
              </Text>
            </View>
          </Body>
          <View style={{ flexDirection: "row" }}>
            <Button
              transparent
              danger
              disabled={order.quantity < 1}
              onPress={() => {
                if (order.quantity === 1) {
                  this.removeItemAlert(plant.name, plant.id, order.quantity);
                } else {
                  PlantStore.removeProductToCart(productID, 1);
                  CartStore.removeFromCart(productID, 1);
                }
              }}
            >
              <Icon
                name="ios-remove-circle-outline"
                type="Ionicons"
                activeTint="green"
              />
            </Button>
            <Text style={{ fontWeight: "bold" }}> {order.quantity} </Text>
            <Button
              transparent
              success
              disabled={plant.quantity < 0 || order.quantity >= 4}
              onPress={() => {
                PlantStore.addProductToCart(productID, 1);
                CartStore.addToCart(productID, 1);
              }}
            >
              <Icon name="ios-add-circle-outline" type="Ionicons" />
            </Button>
            <Text> {order.quantity * plant.price} K.D. </Text>
          </View>
        </CardItem>
      </Card>
    );
  }
}

export default withNavigation(observer(CartRow));
