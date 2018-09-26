//import liraries
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Platform,
  SafeAreaView
} from "react-native";
import {
  Button,
  Text,
  Badge,
  Thumbnail,
  Header,
  Container,
  Left,
  Body,
  Right,
  Icon,
  Title,
  Footer,
  FooterTab
} from "native-base";
import { withNavigation } from "react-navigation";
import { LinearGradient } from "expo";
import CartStore from "../Stores/CartStore";
import { observer } from "mobx-react";

// create a component
class HeaderBar extends Component {
  render() {
    let pageName = this.props.pageNameProp;
    return (
      <Header
        style={{
          borderBottomColor: "#119a50",
          borderBottomWidth: 5,
          alignItems: "center",
          backgroundColor: "white"
        }}
      >
        {Platform.OS !== "ios" && <StatusBar hidden={true} />}

        <Left style={{ flexDirection: "row" }}>
          <Button
            transparent
            onPress={() => this.props.navigation.openDrawer()}
          >
            <Icon
              style={{ color: "#119a50" }}
              name="ios-leaf"
              type="Ionicons"
            />
          </Button>
          <Text> </Text>
          {/* <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon style={{ color: "#119a50" }} name="ios-arrow-back" />
          </Button> */}
        </Left>
        <Title style={{ color: "#119a50", alignSelf: "center" }}>
          {pageName}
        </Title>
        <Right>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate("Cart")}
          >
            {CartStore.orders.length > 0 && (
              <Badge bordered style={{ backgroundColor: "#119a50" }}>
                <Text note style={{ fontWeight: "bold", color: "white" }}>
                  {CartStore.quantityCart}
                </Text>
              </Badge>
            )}
            <Icon
              active={pageName === "Cart"}
              style={{ color: "#119a50" }}
              name="cart"
            />
          </Button>
        </Right>
      </Header>
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
export default withNavigation(observer(HeaderBar));
