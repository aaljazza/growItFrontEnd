//import liraries
import React, { Component } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Container, Content, Text, Card, Button } from "native-base";
import { observer } from "mobx-react";

//Picture
import back1 from "./Pictures/back1.png";
import PlantStore from "../Stores/PlantStore";

// create a component
class Question1 extends Component {
  changeFilter(inputVal) {
    PlantStore.changeFilterCare(inputVal);
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
          source={back1}
          style={{
            alignSelf: "center",
            width: 350,
            height: 1200,
            borderWidth: 0,
            borderRadius: 30,
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
              fontSize: 24,
              fontWeight: "bold",
              alignContent: "center",
              textAlign: "center",
              width: 200
            }}
          >
            Select the Difficulty?
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
              success={PlantStore.careFilter === "Easy"}
              bordered={PlantStore.careFilter !== "Easy"}
              onPress={() => this.changeFilter("Easy")}
            >
              <Text style={{ fontWeight: "bold" }}>Easy</Text>
            </Button>
            <Button
              dark
              success={PlantStore.careFilter === "Hard"}
              bordered={PlantStore.careFilter !== "Hard"}
              onPress={() => this.changeFilter("Hard")}
            >
              <Text style={{ fontWeight: "bold" }}>Hard</Text>
            </Button>
          </View>
        </ImageBackground>
        <Text> </Text>
      </View>
    );
  }
}

//make this component available to the app
export default observer(Question1);
