//import liraries
import React, { Component } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Container, Content, Text, Card, Button } from "native-base";
import { observer } from "mobx-react";

//Picture
import back5 from "./Pictures/back5.png";
import PlantStore from "../Stores/PlantStore";

// create a component
class Question5 extends Component {
  changeFilter(inputVal) {
    PlantStore.changeFilterTheme(inputVal);
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
          source={back5}
          style={{
            alignSelf: "center",
            width: 350,
            height: 200,
            borderWidth: 0,
            borderRadius: 30,
            overflow: "hidden",
            shadowOpacity: 0.5,
            shadowOffset: { width: 10, height: 10 }
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
            Select a Theme?
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
              success={PlantStore.themeFilter === "Modern"}
              bordered={PlantStore.themeFilter !== "Modern"}
              onPress={() => this.changeFilter("Modern")}
            >
              <Text style={{ fontWeight: "bold" }}>Modern</Text>
            </Button>
            <Button
              dark
              success={PlantStore.themeFilter === "Classic"}
              bordered={PlantStore.themeFilter !== "Classic"}
              onPress={() => this.changeFilter("Classic")}
            >
              <Text style={{ fontWeight: "bold" }}>Classic</Text>
            </Button>
          </View>
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
              success={PlantStore.themeFilter === "Casual"}
              bordered={PlantStore.themeFilter !== "Casual"}
              onPress={() => this.changeFilter("Casual")}
            >
              <Text style={{ fontWeight: "bold" }}>Casual</Text>
            </Button>
            <Button
              dark
              success={PlantStore.themeFilter === "Colorful"}
              bordered={PlantStore.themeFilter !== "Colorful"}
              onPress={() => this.changeFilter("Colorful")}
            >
              <Text style={{ fontWeight: "bold" }}>Colorful</Text>
            </Button>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

//make this component available to the app
export default observer(Question5);
