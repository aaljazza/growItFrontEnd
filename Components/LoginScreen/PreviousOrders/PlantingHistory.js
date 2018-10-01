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
import PercentageCircle from "react-native-percentage-circle";

//import Stores
import PlantStore from "../../Stores/PlantStore";
import HistoryStore from "../../Stores/HistoryStore";

// create a component
class PlantingHistory extends Component {
  render() {
    let plant = this.props.plant;
    let indexVal = PlantStore.plants.findIndex(
      store => store.id === plant.plantid
    );
    let daysOld = moment().diff(plant.plantedOn, "days");
    let stage2 = PlantStore.plants[indexVal].stage1day;
    let stage3 =
      PlantStore.plants[indexVal].stage1day +
      PlantStore.plants[indexVal].stage2day;
    let stage4 =
      PlantStore.plants[indexVal].stage1day +
      PlantStore.plants[indexVal].stage2day +
      PlantStore.plants[indexVal].stage3day;
    let currentStage;
    if (daysOld > stage4) {
      currentStage = "Eat";
    } else if (daysOld > stage3) {
      currentStage = PlantStore.plants[indexVal].stage3des;
    } else if (daysOld > stage2) {
      currentStage = PlantStore.plants[indexVal].stage2des;
    } else {
      currentStage = PlantStore.plants[indexVal];
    }

    return (
      <CardItem bordered style={{ height: 100 }}>
        <Thumbnail
          source={{
            uri: PlantStore.plants[indexVal].img
          }}
          style={{ height: 90 }}
        />
        <Text> </Text>
        <Body>
          <Text style={{ fontSize: 20 }}>
            {PlantStore.plants[indexVal].name}
          </Text>
          <Text note>{daysOld} days old</Text>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>
            Current Stage:
          </Text>
          <Text note>{currentStage}</Text>
        </Body>
        <Right style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <Button
            rounded
            transparent
            style={{ height: 150 }}
            onPress={() => {
              PlantStore.updateStats(plant.trackID);
              this.props.navigation.navigate("StatisticsPlot");
              HistoryStore.changePage("Statistics");
            }}
          >
            <PercentageCircle
              radius={35}
              borderWidth={7}
              percent={daysOld > stage4 ? 100 : (100 * daysOld) / stage4}
              color={"#318e00"}
            >
              <Text
                style={{ color: "green", fontWeight: "bold", fontSize: 18 }}
              >
                {daysOld > stage4 ? "Eat" : stage4 - daysOld}
              </Text>
            </PercentageCircle>
            <Icon
              active
              style={{ color: "green", fontSize: 40, fontWeight: "bold" }}
              name="chevron-right"
              type="FontAwesome"
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
