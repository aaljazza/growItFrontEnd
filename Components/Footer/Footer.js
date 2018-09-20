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
      <Footer>
        <FooterTab>
          <LinearGradient
            colors={["#458500", "#65c400"]}
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
            active={pageName === "Home"}
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Icon style={{ color: "white" }} name="ios-home" />
            <Text>Home</Text>
          </Button>
          <Button
            vertical
            active={pageName === "Login"}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Icon name="ios-person" />
            <Text>Profile</Text>
          </Button>
          <Button
            active={pageName === "Plants"}
            onPress={() => this.props.navigation.navigate("Plants")}
          >
            <Icon name="ios-flower" />
            <Text>Plants List</Text>
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
