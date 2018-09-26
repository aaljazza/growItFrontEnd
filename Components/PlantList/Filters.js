//import liraries
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { observer } from "mobx-react";

import {
  Form,
  Text,
  Icon,
  Picker,
  CardItem,
  Card,
  Left,
  Right,
  Body,
  Button,
  Badge
} from "native-base";
import PlantStore from "../Stores/PlantStore";

// create a component
class FilterChoices extends Component {
  changeCareState(inputVal) {
    PlantStore.changeFilterCare(inputVal);
  }
  changeLightState(inputVal) {
    PlantStore.changeFilterlighting(inputVal);
  }
  changeSizeState(inputVal) {
    PlantStore.changeFilterSize(inputVal);
  }
  changePetState(inputVal) {
    PlantStore.changeFilterPet(inputVal);
  }

  render() {
    return (
      <Form>
        <Card>
          <CardItem bordered>
            {PlantStore.careFilter !== "" && (
              <Button
                transparent
                onPress={() => {
                  PlantStore.changeFilterCare("");
                }}
              >
                <Icon
                  name="ios-close-circle"
                  type="Ionicons"
                  style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    color: "red"
                  }}
                />
              </Button>
            )}
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Care Level</Text>
            <Picker
              mode="dropdown"
              note
              placeholder="Select"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              headerBackButtonText="Back"
              selectedValue={PlantStore.careFilter}
              onValueChange={inputVal => {
                if (inputVal === "none") {
                  inputVal = "";
                }
                this.changeCareState(inputVal);
              }}
              textStyle={{ fontSize: 15, width: 100 }}
            >
              <Picker.Item label="none" value="none" />
              <Picker.Item label="Decoration (Easy)" value="Low" />
              <Picker.Item label="Hobby (Difficult)" value="High" />
            </Picker>
          </CardItem>
          <CardItem bordered>
            {PlantStore.lightingFilter !== "" && (
              <Button
                transparent
                onPress={() => {
                  PlantStore.changeFilterlighting("");
                }}
              >
                <Icon
                  name="ios-close-circle"
                  type="Ionicons"
                  style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    color: "red"
                  }}
                />
              </Button>
            )}
            <Text style={{ fontWeight: "bold", fontSize: 15 }}> Lighting </Text>
            <Picker
              mode="dropdown"
              note
              placeholder="Select"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              headerBackButtonText="Back"
              selectedValue={PlantStore.lightingFilter}
              onValueChange={inputVal => {
                if (inputVal === "none") {
                  inputVal = "";
                }
                this.changeLightState(inputVal);
              }}
              textStyle={{ fontSize: 15, width: 100 }}
            >
              <Picker.Item label="none" value="none" />
              <Picker.Item
                label="Bright (5+ Hours of Sunlight)"
                value="Bright"
              />
              <Picker.Item
                label="Medium (2-5 Hours of Sunlight)"
                value="Medium"
              />
              <Picker.Item label="Dark (Shade)" value="Dark" />
            </Picker>
          </CardItem>
          <CardItem bordered>
            {PlantStore.sizeFilter !== "" && (
              <Button
                transparent
                onPress={() => {
                  PlantStore.changeFilterSize("");
                }}
              >
                <Icon
                  name="ios-close-circle"
                  type="Ionicons"
                  style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    color: "red"
                  }}
                />
              </Button>
            )}
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              {" "}
              Plant Size{" "}
            </Text>
            <Picker
              mode="dropdown"
              note
              placeholder="Select"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              headerBackButtonText="Back"
              selectedValue={PlantStore.sizeFilter}
              onValueChange={inputVal => {
                if (inputVal === "none") {
                  inputVal = "";
                }
                this.changeSizeState(inputVal);
              }}
              textStyle={{ fontSize: 15, width: 100 }}
            >
              <Picker.Item label="none" value="none" />
              <Picker.Item label="Desktop (Small)" value="Desktop" />
              <Picker.Item label="Ground (Medium)" value="Ground" />
              <Picker.Item label="Tall (Large)" value="Tall" />
            </Picker>
          </CardItem>
          <CardItem bordered>
            {PlantStore.petFilter !== "" && (
              <Button
                transparent
                onPress={() => {
                  PlantStore.changeFilterPet("");
                }}
              >
                <Icon
                  name="ios-close-circle"
                  type="Ionicons"
                  style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    color: "red"
                  }}
                />
              </Button>
            )}
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              {" "}
              Pet/Kids Friendly{" "}
            </Text>
            <Picker
              mode="dropdown"
              note
              placeholder="Select"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              headerBackButtonText="Back"
              selectedValue={PlantStore.petFilter}
              onValueChange={inputVal => {
                if (inputVal === "none") {
                  inputVal = "";
                }
                this.changePetState(inputVal);
              }}
              textStyle={{ fontSize: 15, width: 100 }}
            >
              <Picker.Item label="none" value="none" />
              <Picker.Item label="Yes" value="Yes" />
              <Picker.Item label="No" value="No" />
            </Picker>
          </CardItem>
        </Card>
      </Form>
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
export default observer(FilterChoices);
