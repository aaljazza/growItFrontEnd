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
import HistoryStore from "../Stores/HistoryStore";

// create a component
class FooterBar extends Component {
  render() {
    let pageName = this.props.pageNameProp;
    let screenName = this.props.screenNameProp;

    return (
      <Footer style={{ borderColor: "#136c3c", borderTopWidth: 5 }}>
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
            onPress={() => {
              this.props.navigation.navigate("Shop");
              HistoryStore.changePage(screenName);
            }}
          >
            <Icon
              style={
                pageName === "Plants"
                  ? { color: "#136c3c", fontSize: 30 }
                  : { color: "#136c3c", fontSize: 20 }
              }
              type="Entypo"
              name="leaf"
            />
            <Text
              style={
                pageName === "Plants"
                  ? { color: "#136c3c", fontSize: 15 }
                  : { color: "#136c3c", fontSize: 10 }
              }
            >
              Shop
            </Text>
          </Button>
          <Button
            vertical
            onPress={() => {
              this.props.navigation.navigate("Statistics");
              HistoryStore.changePage(screenName);
            }}
          >
            <Icon
              style={
                pageName === "Statistics"
                  ? { color: "#136c3c", fontSize: 30 }
                  : { color: "#136c3c", fontSize: 20 }
              }
              name="ios-stats"
            />
            <Text
              style={
                pageName === "Statistics"
                  ? { color: "#136c3c", fontSize: 15 }
                  : { color: "#136c3c", fontSize: 10 }
              }
            >
              Stats
            </Text>
          </Button>
          <Button
            vertical
            onPress={() => {
              this.props.navigation.navigate("Profile");
              HistoryStore.changePage(screenName);
            }}
          >
            <Icon
              style={
                pageName === "Login"
                  ? { color: "#136c3c", fontSize: 30 }
                  : { color: "#136c3c", fontSize: 20 }
              }
              name="ios-person"
            />
            <Text
              style={
                pageName === "Login"
                  ? { color: "#136c3c", fontSize: 15 }
                  : { color: "#136c3c", fontSize: 10 }
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
