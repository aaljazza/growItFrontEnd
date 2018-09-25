import React from "react";
import { StatusBar, ImageBackground } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  View,
  Title,
  Left,
  Icon,
  Right
} from "native-base";
import HeaderBar from "../Header/Header";
import FooterBar from "../Footer/Footer";
import PlantStore from "../Stores/PlantStore";
import PlantBackgroundDark from "../LoginScreen/PlantBackgroundDark.png";
import accessBackPng from "./accessBackPng.png";
import plantingBackPNG from "./plantingBackPNG.png";

export default class HomeScreen extends React.Component {
  render() {
    let plants;
    plants = PlantStore.plants;
    return (
      <Container>
        <HeaderBar pageNameProp="Home" />
        <Text> </Text>
        <Text
          style={{
            alignSelf: "center",
            fontWeight: "bold",
            fontSize: 20,
            color: "#119a50"
          }}
        >
          Choose an option Below:
        </Text>
        <Text> </Text>
        <Content>
          <View
            style={{
              shadowOpacity: 0.5,
              shadowOffset: { width: 5, height: 5 }
            }}
          >
            <ImageBackground
              source={plantingBackPNG}
              style={{
                alignSelf: "center",
                width: 350,
                height: 200,
                borderWidth: 0,
                overflow: "hidden"
              }}
              resizeMode="cover"
            >
              <Text> </Text>
              <Text> </Text>
              <Text
                style={{
                  opacity: 1,
                  alignSelf: "center",
                  fontSize: 32,
                  fontWeight: "bold",
                  alignContent: "center",
                  textAlign: "center",
                  color: "white",
                  width: 300
                }}
              >
                From Seed to Food
              </Text>
              <Text> </Text>
              <Text> </Text>
              <Button
                light
                bordered
                onPress={() => {
                  PlantStore.changeShopSegment(0);
                  this.props.navigation.navigate("Shop");
                }}
                style={{ justifyContent: "center", alignSelf: "center" }}
              >
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                  See Packages
                </Text>
              </Button>
            </ImageBackground>
          </View>
          <Text> </Text>
          <Text> </Text>
          <View
            style={{
              shadowOpacity: 0.5,
              shadowOffset: { width: 5, height: 5 }
            }}
          >
            <ImageBackground
              source={accessBackPng}
              style={{
                alignSelf: "center",
                width: 350,
                height: 200,
                borderWidth: 0,
                overflow: "hidden"
              }}
              resizeMode="cover"
            >
              <Text> </Text>
              <Text
                style={{
                  opacity: 1,
                  alignSelf: "center",
                  fontSize: 32,
                  fontWeight: "bold",
                  alignContent: "center",
                  textAlign: "center",
                  color: "white",
                  width: 300
                }}
              >
                Looking for Accessories?
              </Text>
              <Text> </Text>
              <Button
                light
                bordered
                onPress={() => {
                  PlantStore.changeShopSegment(1);
                  this.props.navigation.navigate("Shop");
                }}
                style={{ justifyContent: "center", alignSelf: "center" }}
              >
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                  See Accessories
                </Text>
              </Button>
            </ImageBackground>
          </View>
        </Content>
        <FooterBar pageNameProp="Home" />
      </Container>
    );
  }
}
