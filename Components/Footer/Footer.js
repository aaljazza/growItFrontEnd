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

//import Stores
import PlantStore from "../Stores/PlantStore";

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
            onPress={() => this.props.navigation.navigate("Shop")}
          >
            <Icon
              style={
                pageName === "Plants"
                  ? { color: "green", fontSize: 30 }
                  : { color: "#003a12", fontSize: 20 }
              }
              type="Foundation"
              name="trees"
            />
            <Text
              style={
                pageName === "Plants"
                  ? { color: "green", fontSize: 15 }
                  : { color: "#003a12", fontSize: 10 }
              }
            >
              Shop
            </Text>
          </Button>
          <Button
            vertical
            onPress={() => this.props.navigation.navigate("Statistics")}
          >
            <Icon
              style={
                pageName === "Statistics"
                  ? { color: "green", fontSize: 30 }
                  : { color: "#003a12", fontSize: 20 }
              }
              name="ios-stats"
            />
            <Text
              style={
                pageName === "Statistics"
                  ? { color: "green", fontSize: 15 }
                  : { color: "#003a12", fontSize: 10 }
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
                pageName === "Login"
                  ? { color: "green", fontSize: 30 }
                  : { color: "#003a12", fontSize: 20 }
              }
              name="ios-person"
            />
            <Text
              style={
                pageName === "Login"
                  ? { color: "green", fontSize: 15 }
                  : { color: "#003a12", fontSize: 10 }
              }
            >
              Profile
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
