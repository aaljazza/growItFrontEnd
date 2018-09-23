//import liraries
import React, { Component } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Container, Content, Text, Card, Button } from "native-base";
import { observer } from "mobx-react";

//Picture
import back3 from "./Pictures/back3.png";
import PlantStore from "../Stores/PlantStore";

// create a component
class Question3 extends Component {
  changeFilter(inputVal) {
    PlantStore.changeFilterSize(inputVal);
  }
  render() {
    return (
      <View
        style={{
          shadowOpacity: 0.5,
          shadowOffset: { width: 5, height: 5 }
        }}
      >
        <ImageBackground
          source={back3}
          style={{
            alignSelf: "center",
            width: 350,
            height: 200,
            borderWidth: 0,
            borderRadius: 30,
            overflow: "hidden"
          }}
          resizeMode="cover"
        >
          <Text> </Text>
          <Text
            style={{
              opacity: 1,
              alignSelf: "center",
              fontSize: 24,
              fontWeight: "bold",
              alignContent: "center",
              textAlign: "center",
              width: 200
            }}
          >
            What size plant are you looking for?
          </Text>
          <Text> </Text>
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "space-around"
            }}
          >
            <Button
              dark
              success={PlantStore.sizeFilter === "Desktop"}
              bordered={PlantStore.sizeFilter !== "Desktop"}
              onPress={() => this.changeFilter("Desktop")}
            >
              <Text style={{ fontWeight: "bold" }}>Desktop</Text>
            </Button>
            <Button
              dark
              success={PlantStore.sizeFilter === "Medium"}
              bordered={PlantStore.sizeFilter !== "Medium"}
              onPress={() => this.changeFilter("Medium")}
            >
              <Text style={{ fontWeight: "bold" }}>Medium</Text>
            </Button>
            <Button
              dark
              success={PlantStore.sizeFilter === "Tall"}
              bordered={PlantStore.sizeFilter !== "Tall"}
              onPress={() => this.changeFilter("Tall")}
            >
              <Text style={{ fontWeight: "bold" }}>Tall</Text>
            </Button>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

//make this component available to the app
export default observer(Question3);
