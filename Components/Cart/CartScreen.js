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

import HeaderBar from "../Header/Header";
import FooterBar from "../Footer/Footer";
import CartStore from "../Stores/CartStore";
import CartRow from "./CartRows";
import PlantStore from "../Stores/PlantStore";
import UserStore from "../Stores/UserStore";

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
    Alert.alert(`Check Out`, "Would you like to Sign In/Up?", [
      {
        text: "Sign In",
        onPress: () => {
          this.props.navigation.navigate("Profile");
        }
      },
      {
        text: "Continue as Guest",
        onPress: () => this.props.navigation.navigate("AddressConfirmation")
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
      totalPrice +=
        CartStore.orders[i].quantity * PlantStore.plants[indexVal].price;
    }
    return (
      <Container>
        <HeaderBar pageNameProp="Cart" />
        {totalPrice > 0 && (
          <Button
            full
            style={{
              backgroundColor: "#119a50",
              shadowOpacity: 0.5,
              shadowOffset: { width: 0, height: 10 }
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 24 }}>
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
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-evenly"
              }}
            >
              {ordersView}
            </View>
          </View>
          <Text> </Text>
          {CartStore.orders.length > 0 && (
            <Button
              full
              style={{
                marginTop: 10,
                shadowOpacity: 0.5,
                backgroundColor: "#119a50",
                shadowOffset: { width: 0, height: 5 }
              }}
              onPress={() => {
                if (UserStore.signedIn) {
                  this.props.navigation.navigate("AddressConfirmation");
                } else {
                  this._checkOutAlert();
                }
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 30 }}>
                Check Out
              </Text>
            </Button>
          )}
          <Text> </Text>
          {CartStore.orders.length > 0 && (
            <Button
              danger
              bordered
              full
              onPress={() => {
                this._emptyCartAlert();
              }}
            >
              <Text style={{ fontWeight: "bold" }}>
                Drop Cart and Start Over
              </Text>
            </Button>
          )}
          <Button
            full
            style={{
              marginTop: 10,
              backgroundColor: "#119a50"
            }}
            onPress={() => {
              PlantStore.changeShopSegment(0);
              this.props.navigation.navigate("Shop");
            }}
          >
            {CartStore.orders.length === 0 ? (
              <Text style={{ fontWeight: "bold" }}>Shop for Plants</Text>
            ) : (
              <Text style={{ fontWeight: "bold" }}>Continue Shopping</Text>
            )}
          </Button>
        </Content>
        <FooterBar pageNameProp="Cart" />
      </Container>
    );
  }
}

export default observer(CartScreen);
