//import liraries
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
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
class FooterBar extends Component {
  render() {
    let pageName = this.props.pageNameProp;
    return (
      <Footer style={{ borderColor: "green", borderTopWidth: 5 }}>
        <FooterTab>
          {/* <LinearGradient
            colors={["#458500", "#65c400"]}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              height: "300%"
            }}
          /> */}
          <LinearGradient
            colors={["#ffffff", "#ffffff"]}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              height: "300%"
            }}
          />
          <Button
            vertical
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Icon
              style={
                pageName === "Home" ? { color: "green" } : { color: "#003a12" }
              }
              name="ios-home"
            />
            <Text
              style={
                pageName === "Home" ? { color: "green" } : { color: "#003a12" }
              }
            >
              Home
            </Text>
          </Button>
          <Button
            vertical
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Icon
              style={
                pageName === "Login" ? { color: "green" } : { color: "#003a12" }
              }
              name="ios-person"
            />
            <Text
              style={
                pageName === "Login" ? { color: "green" } : { color: "#003a12" }
              }
            >
              Profile
            </Text>
          </Button>
          <Button
            vertical
            onPress={() => this.props.navigation.navigate("Plants")}
          >
            <Icon
              style={
                pageName === "Plants"
                  ? { color: "green" }
                  : { color: "#003a12" }
              }
              name="ios-flower"
            />
            <Text
              style={
                pageName === "Plants"
                  ? { color: "green" }
                  : { color: "#003a12" }
              }
            >
              Plants List
            </Text>
          </Button>
        </FooterTab>
      </Footer>
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
export default withNavigation(FooterBar);
