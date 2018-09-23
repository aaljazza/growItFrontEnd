//import liraries
import React, { Component } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Container, Content, Text, Card, Button } from "native-base";
import { observer } from "mobx-react";

//Picture
import back2 from "./Pictures/back2.png";
import PlantStore from "../Stores/PlantStore";

// create a component
class Question2 extends Component {
  changeFilter(inputVal) {
    PlantStore.changeFilterlighting(inputVal);
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
          source={back2}
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
              width: 250,
              textAlign: "center"
            }}
          >
            How much light is available for your plant?
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
              success={PlantStore.lightingFilter === "Bright"}
              bordered={PlantStore.lightingFilter !== "Bright"}
              onPress={() => this.changeFilter("Bright")}
            >
              <Text style={{ fontWeight: "bold" }}>Bright</Text>
            </Button>
            <Button
              dark
              success={PlantStore.lightingFilter === "Medium"}
              bordered={PlantStore.lightingFilter !== "Medium"}
              onPress={() => this.changeFilter("Medium")}
            >
              <Text style={{ fontWeight: "bold" }}>Medium</Text>
            </Button>
            <Button
              dark
              success={PlantStore.lightingFilter === "Dark"}
              bordered={PlantStore.lightingFilter !== "Dark"}
              onPress={() => this.changeFilter("Dark")}
            >
              <Text style={{ fontWeight: "bold" }}>Dark</Text>
            </Button>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

//make this component available to the app
export default observer(Question2);
