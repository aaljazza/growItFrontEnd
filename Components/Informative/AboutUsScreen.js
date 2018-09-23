import React, { Component } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Container, Content, Text } from "native-base";
import Carousel, { Pagination } from "react-native-snap-carousel"; // 3.6.0
import HeaderBar from "../Header/Header";
import FooterBar from "../Footer/Footer";

//imports
import PlantStore from "../Stores/PlantStore";
import PlantRow from "../PlantList/PlantRows";
import PlantCards from "./PlantCards";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default class AboutUsScreen extends Component {
  SCREENS = [<PlantCards plant={PlantStore.plants[0]} />];

  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  render() {
    return (
      <Container>
        <HeaderBar pageNameProp="About Us" />
        <Content>
          <PlantCards plant={PlantStore.plants[0]} />
        </Content>
        <FooterBar pageNameProp="About Us" />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  ww: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: "rgba(255, 255, 255, 0.92)"
  },
  container: {
    flex: 1,
    paddingTop: 40
  },
  tabBar: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff"
  },
  tabsContainer: {
    flexDirection: "row",
    height: 50,
    paddingTop: 0,
    paddingBottom: 0
  }
});
