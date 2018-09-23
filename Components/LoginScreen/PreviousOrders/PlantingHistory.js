//import liraries
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Right,
  Icon,
  Text,
  Body,
  Button
} from "native-base";
import moment from "moment";
import { withNavigation } from "react-navigation";

//import Stores
import PlantStore from "../../Stores/PlantStore";

// create a component
class PlantingHistory extends Component {
  render() {
    let plant = this.props.plant;
    let indexVal = PlantStore.plants.findIndex(
      store => store.id === plant.plantid
    );
    let daysOld = moment().diff(plant.plantedOn, "days");
    return (
      <CardItem bordered>
        <Thumbnail
          small
          source={{
            uri: PlantStore.plants[indexVal].img
          }}
        />
        <Body>
          <Text note>{daysOld} days old</Text>
          <Text style={{ fontSize: 20 }}>
            {PlantStore.plants[indexVal].local_name}
          </Text>
        </Body>

        <Right style={{}}>
          <Button
            rounded
            transparent
            onPress={() => {
              PlantStore.updateStats(plant.trackID);
              this.props.navigation.navigate("Statistics");
            }}
          >
            <Icon
              active
              style={{ color: "green", fontSize: 45, fontWeight: "bold" }}
              name="ios-stats"
            />
          </Button>
        </Right>
      </CardItem>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

//make this component available to the app
export default withNavigation(PlantingHistory);
