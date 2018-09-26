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
    let cartIndex = CartStore.orders.findIndex(
      order => order.product === productID
    );
    let order = CartStore.orders[cartIndex];
    let plant = PlantStore.plants[indexVal];
    return (
      <Card
        style={{
          width: 150,
          borderRadius: 20,
          shadowOpacity: 50,
          shadowRadius: 3
        }}
      >
        <CardItem style={{ borderRadius: 20 }}>
          <View style={{ flexDirection: "column" }}>
            <View style={{ flexDirection: "row" }}>
              <Left>
                <Thumbnail source={{ uri: plant.img }} style={{ height: 70 }} />
              </Left>
              <Right>
                <Text style={{ fontWeight: "bold" }}>{plant.local_name}</Text>
                <Text note style={{ fontWeight: "bold", color: "black" }}>
                  {plant.price * order.quantity} K.D.
                </Text>
              </Right>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Button
                transparent
                danger
                disabled={order.quantity <= 1}
                onPress={() => {
                  PlantStore.removeProductToCart(productID, 1);
                  CartStore.removeFromCart(productID, 1);
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
                disabled={plant.quantity <= 0 || order.quantity >= 4}
                onPress={() => {
                  PlantStore.addProductToCart(productID, 1);
                  CartStore.addToCart(productID, 1);
                }}
              >
                <Icon name="ios-add-circle-outline" type="Ionicons" />
              </Button>
            </View>
            <Button
              full
              danger
              bordered
              small
              rounded
              onPress={() =>
                this.removeItemAlert(plant.local_name, plant.id, order.quantity)
              }
            >
              <Text>Remove</Text>
            </Button>
            <Text style={{ fontSize: 5 }}> </Text>
            <Button
              full
              dark
              bordered
              small
              rounded
              onPress={() => {
                PlantStore.updateSelectedPlant(productID);
                this.props.navigation.navigate("PlantDetail");
              }}
            >
              <Text>More Info</Text>
            </Button>
          </View>
        </CardItem>
      </Card>
    );
  }
}

export default withNavigation(observer(CartRow));
