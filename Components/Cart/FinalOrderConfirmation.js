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
import HeaderBar from "../Header/Header";
import FooterBar from "../Footer/Footer";
import CartStore from "../Stores/CartStore";
import CartRow from "./CartRows";
import PlantStore from "../Stores/PlantStore";
import UserStore from "../Stores/UserStore";
import OrderRows from "./OrderRows";

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
      totalPrice +=
        CartStore.orders[i].quantity * PlantStore.plants[indexVal].price;
    }

    return (
      <Container>
        <HeaderBar pageNameProp="Confirm Order" />
        <Button full disabled success style={{ backgroundColor: "#119a50" }}>
          <Text>Confirm Your Order Below:</Text>
        </Button>
        <Content padder>
          <Card>
            <CardItem>
              <View style={{ flexDirection: "column" }}>
                <Text style={{ fontWeight: "bold" }}>NOTE:</Text>
                <Text>
                  Delivery will be within 24 Hours, payments are expected in
                  Cash but KNET can be arranged upon delivery.
                </Text>
              </View>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ fontWeight: "bold" }}>User Details:</Text>
                  <Text style={{ fontSize: 14 }}>Name: {CartStore.name}</Text>
                  <Text style={{ fontSize: 14 }}>Email: {CartStore.email}</Text>
                  <Text style={{ fontSize: 14 }}>Phone: {CartStore.phone}</Text>
                </View>
              </View>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ fontWeight: "bold" }}>Delivery Address:</Text>
                  <Text style={{ fontSize: 14 }}>City: {CartStore.city}</Text>
                  <Text style={{ fontSize: 14 }}>Block: {CartStore.block}</Text>
                  <Text style={{ fontSize: 14 }}>
                    Street: {CartStore.street}
                  </Text>
                  <Text style={{ fontSize: 14 }}>
                    Avenue: {CartStore.avenue}
                  </Text>
                  <Text style={{ fontSize: 14 }}>House: {CartStore.house}</Text>
                  <Text style={{ fontSize: 14 }}>
                    Apartment: {CartStore.apartmentNumber}
                  </Text>
                </View>
              </View>
            </CardItem>
          </Card>
          <Button
            full
            small
            success
            style={{
              backgroundColor: "#119a50",
              shadowOpacity: 0.5,
              shadowOffset: { width: 0, height: 3 }
            }}
            onPress={() =>
              this.props.navigation.navigate("AddressConfirmation")
            }
          >
            <Text>Edit User/Delivery Information</Text>
          </Button>
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
          </Card>
          <Button
            full
            small
            success
            style={{
              backgroundColor: "#119a50",
              shadowOpacity: 0.5,
              shadowOffset: { width: 0, height: 3 }
            }}
            onPress={() => this.props.navigation.navigate("Cart")}
          >
            <Text>Edit Order</Text>
          </Button>
          <Text> </Text>
          <Button
            disabled
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
          <Text> </Text>
          <Button
            success
            bordered
            full
            rounded
            style={{ borderColor: "#119a50" }}
            onPress={() => {
              this.props.navigation.navigate("OrderComplete");
              CartStore.emptyCart();
            }}
          >
            <Text
              style={{ color: "#119a50", fontWeight: "bold", fontSize: 30 }}
            >
              {" "}
              Submit Order{" "}
            </Text>
          </Button>
          <Card>
            <CardItem>
              <View style={{ flexDirection: "column" }}>
                <Text style={{ fontWeight: "bold" }}>NOTE:</Text>
                <Text>
                  Delivery will be within 24 Hours, payments are expected in
                  Cash but KNET can be arranged upon delivery.
                </Text>
              </View>
            </CardItem>
          </Card>
        </Content>
        <FooterBar pageNameProp="Confirm Order" />
      </Container>
    );
  }
}

export default observer(FinalOrderConfirmation);
