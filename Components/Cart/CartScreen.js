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
  Title,
  Left,
  Icon,
  Right
} from "native-base";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

import HeaderBar from "../Header/Header";
import FooterBar from "../Footer/Footer";
import CartStore from "../Stores/CartStore";
import CartRow from "./CartRows";
import PlantStore from "../Stores/PlantStore";
import UserStore from "../Stores/UserStore";
import HistoryStore from "../Stores/HistoryStore";

class CartScreen extends React.Component {
  _emptyCartAlert = () => {
    Alert.alert(`Erase Cart`, "Are you sure you want to erase your Cart?", [
      {
        text: "Yes, Erase",
        onPress: () => {
          CartStore.emptyCart();
        }
      },
      {
        text: "No, Leave it",
        onPress: () => console.log("canceled")
      }
    ]);
  };

  _checkOutAlert = () => {
    Alert.alert(`Checkout`, "Kindly Sign In to Checkout", [
      {
        text: "Sign In",
        onPress: () => {
          this.props.navigation.navigate("Profile");
          HistoryStore.changePage("Cart");
        }
      },
      {
        text: "Cancel"
      }
    ]);
  };

  render() {
    let ordersView;
    if (CartStore.orders.length > 0) {
      ordersView = CartStore.orders.map((order, index) => (
        <CartRow key={index} productID={order.product} />
      ));
    }
    let totalPrice = 0;
    for (let i = 0; i < CartStore.orders.length; i++) {
      let indexVal = PlantStore.plants.findIndex(
        plant => plant.id === CartStore.orders[i].product
      );
      if (indexVal >= 0) {
        totalPrice +=
          CartStore.orders[i].quantity * PlantStore.plants[indexVal].price;
      } else {
        let indexVal = PlantStore.accessories.findIndex(
          item => item.id === CartStore.orders[i].product
        );
        totalPrice +=
          CartStore.orders[i].quantity * PlantStore.accessories[indexVal].price;
      }
    }
    return (
      <Container>
        <HeaderBar pageNameProp="Cart" screenNameProp="Cart" />
        {totalPrice > 0 && (
          <Button
            disabled
            full
            style={{
              backgroundColor: "#119a50",
              shadowOpacity: 0.5,
              shadowOffset: { width: 0, height: 10 }
            }}
          >
            <Text style={{ fontWeight: "bold" }}>
              Total = {totalPrice} K.D.
            </Text>
          </Button>
        )}
        <Content>
          <View padder>
            {CartStore.orders.length === 0 && (
              <Card>
                <CardItem>
                  <Body>
                    <Text>There are no items in your cart</Text>
                  </Body>
                </CardItem>
              </Card>
            )}
            <View style={{}}>{ordersView}</View>
          </View>
          <Text> </Text>
          <View padder>
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
                <Text style={{ fontWeight: "bold" }}>PROCEED TO CHECKOUT</Text>
              </Button>
            )}
            <Text> </Text>
            {CartStore.orders.length > 0 && (
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
                onPress={() => {
                  this._emptyCartAlert();
                }}
              >
                <Text style={{ fontWeight: "bold" }}>DROP CART</Text>
              </Button>
            )}
            {CartStore.orders.length === 0 && (
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
                  PlantStore.changeShopSegment(0);
                  this.props.navigation.navigate("Shop");
                  HistoryStore.changePage("Cart");
                }}
              >
                <Text style={{ fontWeight: "bold" }}>SHOP FOR PLANTS</Text>
              </Button>
            )}
          </View>
        </Content>
        <FooterBar pageNameProp="Cart" screenNameProp="Cart" />
      </Container>
    );
  }
}

export default withNavigation(observer(CartScreen));
