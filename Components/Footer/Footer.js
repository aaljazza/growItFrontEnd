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
            onPress={() => this.props.navigation.navigate("Statistics")}
          >
            <Icon
              style={
                pageName === "Statistics"
                  ? { color: "green" }
                  : { color: "#003a12" }
              }
              name="ios-stats"
            />
            <Text
              style={
                pageName === "Statistics"
                  ? { color: "green" }
                  : { color: "#003a12" }
              }
            >
              Stats
            </Text>
          </Button>
          <Button
            vertical
            onPress={() => this.props.navigation.navigate("Profile")}
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
              type="Foundation"
              name="trees"
            />
            <Text
              style={
                pageName === "Plants"
                  ? { color: "green" }
                  : { color: "#003a12" }
              }
            >
              Shop
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
