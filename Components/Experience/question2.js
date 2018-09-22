//import liraries
import React, { Component } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Container, Content, Text, Card, Button } from "native-base";

//Picture
import back2 from "./Pictures/back2.png";

// create a component
class Question2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: null
    };
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
            height: 250,
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
              warning={this.state.filter === 1}
              bordered={this.state.filter !== 1}
              onPress={() => this.setState({ filter: 1 })}
            >
              <Text style={{ fontWeight: "bold" }}>Bright</Text>
            </Button>
            <Button
              dark
              warning={this.state.filter === 0}
              bordered={this.state.filter !== 0}
              onPress={() => this.setState({ filter: 0 })}
            >
              <Text style={{ fontWeight: "bold" }}>Medium</Text>
            </Button>
            <Button
              dark
              warning={this.state.filter === 2}
              bordered={this.state.filter !== 2}
              onPress={() => this.setState({ filter: 2 })}
            >
              <Text style={{ fontWeight: "bold" }}>Dark</Text>
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
            {this.state.filter !== null && (
              <Button
                danger
                bordered
                onPress={() => this.setState({ filter: null })}
              >
                <Text>Reset</Text>
              </Button>
            )}
          </View>
        </ImageBackground>
      </View>
    );
  }
}

//make this component available to the app
export default Question2;
