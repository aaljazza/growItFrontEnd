//import liraries
import React, { Component } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
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
      <Header>
        <LinearGradient
          colors={["#ffffff", "#e1ffc1"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "200%"
          }}
        />

        <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.openDrawer()}
          >
            <Icon style={{ color: "black" }} name="menu" />
          </Button>
        </Left>
        <Body>
          <Title style={{ color: "black" }}>{pageName}</Title>
        </Body>
        <Right />
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
