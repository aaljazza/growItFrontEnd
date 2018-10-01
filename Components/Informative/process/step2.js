//import liraries
import React, { Component } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Container, Content, Text, Card, Button } from "native-base";
import { observer } from "mobx-react";

//Picture
import blur from "../backgrounds/blur2.png";

// create a component
class Step2 extends Component {
  render() {
    return (
      <View
        style={{
          shadowOpacity: 0.5
        }}
      >
        <ImageBackground
          source={blur}
          style={{
            alignSelf: "center",
            width: 300,
            height: 250,
            borderWidth: 0,
            borderRadius: 30,
            overflow: "hidden"
          }}
          resizeMode="cover"
        >
          <Text> </Text>
          <Text> </Text>
          <Button
            success
            disabled
            style={{ backgroundColor: "#136c3c", alignSelf: "center" }}
          >
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
              Step 2
            </Text>
          </Button>
          <Card
            rounded
            style={{
              shadowOpacity: 0.5,
              shadowOffset: { width: null, height: 5 }
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                fontSize: 20,
                fontWeight: "bold",
                alignContent: "center",
                textAlign: "center"
              }}
            >
              Read the guidelines card received with your order to start
              planting right away.
            </Text>
          </Card>
        </ImageBackground>
      </View>
    );
  }
}

//make this component available to the app
export default observer(Step2);
