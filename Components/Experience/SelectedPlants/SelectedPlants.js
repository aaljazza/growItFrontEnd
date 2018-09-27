//import liraries
import React, { Component } from "react";
import { View, StyleSheet, ImageBackground, Image } from "react-native";
import { Container, Content, Text, Card, Button } from "native-base";
import { withNavigation } from "react-navigation";

//Picture
import logo from "../../Logo/logo.png";

// Store
import PlantStore from "../../Stores/PlantStore";

// create a component
class SelectedPlant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: null
    };
  }
  render() {
    plant = this.props.plant;
    return (
      <View
        style={{
          shadowOpacity: 0.5,
          shadowOffset: { width: 5, height: 5 }
        }}
      >
        <Button transparent style={{ height: 200 }}>
          <Image
            source={{ uri: plant.img }}
            style={{ width: 200, height: 200 }}
          />
        </Button>
      </View>
    );
  }
}

//make this component available to the app
export default withNavigation(SelectedPlant);
