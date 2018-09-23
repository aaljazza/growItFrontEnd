//import liraries
import React, { Component } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Container, Content, Text, Card, Button } from "native-base";
import { observer } from "mobx-react";

//Picture
import back4 from "./Pictures/back4.png";
import PlantStore from "../Stores/PlantStore";

// create a component
class Question4 extends Component {
  changeFilter(inputVal) {
    PlantStore.changeFilterPet(inputVal);
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
          source={back4}
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
            Do you have kids or pets?
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
              success={PlantStore.petFilter === "Yes"}
              bordered={PlantStore.petFilter !== "Yes"}
              onPress={() => this.changeFilter("Yes")}
            >
              <Text style={{ fontWeight: "bold" }}>Yes</Text>
            </Button>
            <Button
              dark
              success={PlantStore.petFilter === "No"}
              bordered={PlantStore.petFilter !== "No"}
              onPress={() => this.changeFilter("No")}
            >
              <Text style={{ fontWeight: "bold" }}>No</Text>
            </Button>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

//make this component available to the app
export default observer(Question4);
