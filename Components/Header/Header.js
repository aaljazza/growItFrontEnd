//import liraries
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Platform,
  SafeAreaView,
  Image
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
import HistoryStore from "../Stores/HistoryStore";

// create a component
class HeaderBar extends Component {
  render() {
    let pageName = this.props.pageNameProp;
    let screenName = this.props.screenNameProp;
    let pageNameCaps = pageName.toUpperCase();
    return (
      <Header
        style={{
          borderBottomColor: "#136c3c",
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
            <Icon style={{ color: "#136c3c" }} name="menu" type="Entypo" />
          </Button>
          <Text> </Text>
          <Button
            transparent
            onPress={() => {
              this.props.navigation.navigate(HistoryStore.lastPage);
              HistoryStore.changePage("Shop");
            }}
          >
            <Icon style={{ color: "#136c3c" }} name="ios-arrow-back" />
          </Button>
        </Left>
        <Title
          style={{
            color: "#136c3c",
            alignSelf: "center",
            fontWeight: "bold"
          }}
        >
          {pageNameCaps}
        </Title>
        <Right>
          <Button
            transparent
            onPress={() => {
              this.props.navigation.navigate("Cart");
              HistoryStore.changePage(screenName);
            }}
          >
            {CartStore.orders.length > 0 && (
              <Badge bordered style={{ backgroundColor: "#136c3c" }}>
                <Text note style={{ fontWeight: "bold", color: "white" }}>
                  {CartStore.quantityCart}
                </Text>
              </Badge>
            )}
            <Icon
              active={pageName === "Cart"}
              style={{ color: "#136c3c" }}
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
