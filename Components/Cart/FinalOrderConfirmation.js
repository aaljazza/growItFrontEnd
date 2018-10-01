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
import OrderRows from "./OrderRows";
import HistoryStore from "../Stores/HistoryStore";
import AuthStore from "../Stores/AuthStore";

// create a component
class FinalOrderConfirmation extends React.Component {
  render() {
    let orderPriceRow = CartStore.orders.map((order, index) => (
      <OrderRows order={order} key={index} />
    ));
    let totalPrice = 0;
    for (let i = 0; i < CartStore.orders.length; i++) {
      let indexVal = PlantStore.plants.findIndex(
        plant => plant.id === CartStore.orders[i].product
      );
      if (indexVal >= 0) {
        totalPrice +=
          CartStore.orders[i].quantity * PlantStore.plants[indexVal].price;
      } else {
        indexVal = PlantStore.accessories.findIndex(
          plant => plant.id === CartStore.orders[i].product
        );
        totalPrice +=
          CartStore.orders[i].quantity * PlantStore.accessories[indexVal].price;
      }
    }

    return (
      <Container>
        <HeaderBar
          pageNameProp="Checkout"
          screenNameProp="FinalOrderConfirmation"
        />
        <Button full disabled success style={{ backgroundColor: "#136c3c" }}>
          <Text>Confirm Your Order Below:</Text>
        </Button>
        <Content padder>
          <Card>
            <CardItem>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ fontWeight: "bold" }}>User Details:</Text>
                  <Text style={{ fontSize: 14 }}>
                    Name: {AuthStore.user.username}
                  </Text>
                  <Text style={{ fontSize: 14 }}>
                    Email: {AuthStore.user.email}
                  </Text>
                  <Text style={{ fontSize: 14 }}>Phone: {CartStore.phone}</Text>
                </View>
              </View>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <View style={{ flexDirection: "column" }}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flexDirection: "column" }}>
                    <Text style={{ fontWeight: "bold" }}>
                      Delivery Address:
                    </Text>
                    <Text style={{ fontSize: 14 }}>City: {CartStore.city}</Text>
                    <Text style={{ fontSize: 14 }}>
                      Block: {CartStore.block}
                    </Text>
                    <Text style={{ fontSize: 14 }}>
                      Street: {CartStore.street}
                    </Text>
                    <Text style={{ fontSize: 14 }}>
                      Avenue: {CartStore.avenue}
                    </Text>
                    <Text style={{ fontSize: 14 }}>
                      House: {CartStore.house}
                    </Text>
                    <Text style={{ fontSize: 14 }}>
                      Apartment: {CartStore.apartmentNumber}
                    </Text>
                    <Text style={{ fontSize: 14 }}>
                      Delivery Instructions: {CartStore.deliveryInstructions}
                    </Text>
                  </View>
                </View>
              </View>
            </CardItem>
            <CardItem>
              <Button
                small
                danger
                bordered
                full
                onPress={() => {
                  this.props.navigation.navigate("AddressConfirmation");
                  HistoryStore.changePage("FinalOrderConfirmation");
                }}
              >
                <Text style={{ fontSize: 12 }}>Edit </Text>
              </Button>
            </CardItem>
          </Card>
          <Card>
            <CardItem bordered>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ fontWeight: "bold" }}>Order Details:</Text>
                </View>
              </View>
            </CardItem>
            <Text> </Text>
            {orderPriceRow}
            <Text> </Text>
            <CardItem bordered>
              <Button
                small
                danger
                bordered
                full
                onPress={() => {
                  this.props.navigation.navigate("Cart");
                  HistoryStore.changePage("FinalOrderConfirmation");
                }}
              >
                <Text style={{ fontSize: 12 }}>Edit </Text>
              </Button>
            </CardItem>
            <Text style={{ alignSelf: "flex-start" }}> Total =</Text>
            <Text style={{ alignSelf: "flex-end" }}>{totalPrice} K.D.</Text>
          </Card>
          <Text> </Text>
          <Button
            success
            full
            rounded
            style={{
              backgroundColor: "#119a50",
              shadowOpacity: 0.5,
              shadowOffset: { width: 0, height: 10 }
            }}
            onPress={() => {
              this.props.navigation.navigate("OrderComplete");
              CartStore.postOrderRequest();
            }}
          >
            <Text style={{ fontWeight: "bold" }}> Submit Order </Text>
          </Button>
          <Text> </Text>
          <Card>
            <CardItem>
              <View style={{ flexDirection: "column" }}>
                <Text style={{ fontWeight: "bold" }}>Note:</Text>
                <Text style={{ fontSize: 14 }}>
                  Delivery will be within 24 Hours, payments are expected in
                  Cash but KNET can be arranged upon delivery.
                </Text>
              </View>
            </CardItem>
          </Card>
        </Content>
        <FooterBar
          pageNameProp="Confirm Order"
          screenNameProp="FinalOrderConfirmation"
        />
      </Container>
    );
  }
}

export default withNavigation(observer(FinalOrderConfirmation));
