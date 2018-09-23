//import liraries
import React, { Component } from "react";
import { View, StyleSheet, StatusBar, Platform } from "react-native";
import {
  Button,
  Text,
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

// create a component
class HeaderBar extends Component {
  render() {
    let pageName = this.props.pageNameProp;
    return (
      <Header style={{ borderBottomColor: "green", borderBottomWidth: 5 }}>
        {Platform.OS !== "ios" && <StatusBar hidden={true} />}
        <LinearGradient
          colors={["#ffffff", "#ffffff"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "200%"
          }}
        />
        <Left style={{ flexDirection: "row" }}>
          <Button
            transparent
            onPress={() => this.props.navigation.openDrawer()}
          >
            <Icon style={{ color: "#007c2f" }} name="menu" />
          </Button>
          <Button transparent onPress={() => this.props.navigation.goBack}>
            <Icon style={{ color: "#007c2f" }} name="ios-arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title style={{ color: "#007c2f" }}>{pageName}</Title>
        </Body>
        <Right>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate("Cart")}
          >
            <Icon
              active={pageName === "Cart"}
              style={{ color: "green" }}
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
export default withNavigation(HeaderBar);
