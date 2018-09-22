//import liraries
import React, { Component } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Container, Content, Text, Card, Button } from "native-base";

//Picture
import back5 from "./Pictures/back5.png";

// create a component
class Question5 extends Component {
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
          source={back5}
          style={{
            alignSelf: "center",
            width: 350,
            height: 250,
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
              success={this.state.filter === 3}
              bordered={this.state.filter !== 3}
              onPress={() => this.setState({ filter: 3 })}
            >
              <Text style={{ fontWeight: "bold" }}>Modern</Text>
            </Button>
            <Button
              dark
              success={this.state.filter === 2}
              bordered={this.state.filter !== 2}
              onPress={() => this.setState({ filter: 2 })}
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
              success={this.state.filter === 1}
              bordered={this.state.filter !== 1}
              onPress={() => this.setState({ filter: 1 })}
            >
              <Text style={{ fontWeight: "bold" }}>Casual</Text>
            </Button>
            <Button
              dark
              success={this.state.filter === 0}
              bordered={this.state.filter !== 0}
              onPress={() => this.setState({ filter: 0 })}
            >
              <Text style={{ fontWeight: "bold" }}>Colorful</Text>
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
export default Question5;
