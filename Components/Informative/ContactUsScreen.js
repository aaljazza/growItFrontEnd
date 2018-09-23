import React, { Component } from "react";
import { View, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Container, Content, Text, Card, CardItem } from "native-base";
import Carousel from "react-native-snap-carousel"; // 3.6.0
import HeaderBar from "../Header/Header";
import FooterBar from "../Footer/Footer";
import StepIndicator from "react-native-step-indicator";

//imports
import PlantStore from "../Stores/PlantStore";
import PlantRow from "../PlantList/PlantRows";
import PlantCards from "./PlantCards";
import PlantBackground from "../LoginScreen/PlantBackground.png";

import Question1 from "../Experience/question1";
import Question2 from "../Experience/question2";
import Question3 from "../Experience/question3";
import Question4 from "../Experience/question4";
import Question5 from "../Experience/question5";
import SelectedPlant from "../Experience/SelectedPlants/SelectedPlants";

const SCREEN_WIDTH = Dimensions.get("window").width;

//Step Indicator Constants
const customStyles = {
  stepIndicatorSize: 10,
  currentStepIndicatorSize: 10,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: "#41ba00",
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: "#318e00",
  stepStrokeUnFinishedColor: "#aaaaaa",
  separatorFinishedColor: "#318e00",
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: "#318e00",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#41ba00",
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 20,
  stepIndicatorLabelCurrentColor: "#41ba00",
  stepIndicatorLabelFinishedColor: "#318e00",
  stepIndicatorLabelUnFinishedColor: "#ffffff",
  labelColor: "#999999",
  labelSize: 10,
  currentStepLabelColor: "#41ba00"
};

const labels = ["", "", "", "", ""];

export default class ContactUsScreen extends Component {
  SCREENS = [
    <Question1 />,
    <Question2 />,
    <Question3 />,
    <Question4 />,
    <Question5 />
  ];

  SCREENS2 = [
    <SelectedPlant />,
    <SelectedPlant />,
    <SelectedPlant />,
    <SelectedPlant />,
    <SelectedPlant />
  ];
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  render() {
    let plantItems;
    plantItems = PlantStore.plants.map((plantItem, index) => (
      <PlantRow key={index} plant={plantItem} />
    ));
    return (
      <Container>
        <HeaderBar pageNameProp="Contact Us" />
        <Content>
          <Text>Contact Us Here</Text>
        </Content>
        <FooterBar pageNameProp="Contact" />
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
