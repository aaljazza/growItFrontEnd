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
  changeThemeState(inputVal) {
    PlantStore.changeFilterTheme(inputVal);
  }

  render() {
    return (
      <Form>
        <Card>
          <CardItem>
            <Left>
              <Text style={{ fontWeight: "bold" }}> Care Level </Text>
            </Left>
            <Body style={{ justifyContent: "center" }}>
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
            </Body>
            <Picker
              mode="dropdown"
              note
              placeholder="Select"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              headerBackButtonText="Back"
              selectedValue={PlantStore.careFilter}
              onValueChange={inputVal => this.changeCareState(inputVal)}
            >
              <Picker.Item label="Decoration (Low)" value="Low" />
              <Picker.Item label="Hobby (High)" value="High" />
            </Picker>
          </CardItem>
          <CardItem>
            <Left>
              <Text style={{ fontWeight: "bold" }}> Lighting </Text>
            </Left>
            <Body>
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
            </Body>
            <Picker
              mode="dropdown"
              note
              placeholder="Select"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              headerBackButtonText="Back"
              selectedValue={PlantStore.lightingFilter}
              onValueChange={inputVal => this.changeLightState(inputVal)}
            >
              <Picker.Item
                label="Bright (6 hours of Sunlight)"
                value="Bright"
              />
              <Picker.Item label="Medium (3 hours of Sunlight" value="Medium" />
              <Picker.Item label="Dark (Shade)" value="Dark" />
            </Picker>
          </CardItem>
          <CardItem>
            <Left>
              <Text style={{ fontWeight: "bold" }}> Plant Size </Text>
            </Left>
            <Body>
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
            </Body>
            <Picker
              mode="dropdown"
              note
              placeholder="Select"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              headerBackButtonText="Back"
              selectedValue={PlantStore.sizeFilter}
              onValueChange={inputVal => this.changeSizeState(inputVal)}
            >
              <Picker.Item label="Desktop" value="Desktop" />
              <Picker.Item label="Ground" value="Ground" />
              <Picker.Item label="Tall" value="Tall" />
            </Picker>
          </CardItem>
          <CardItem>
            <Left>
              <Text style={{ fontWeight: "bold" }}> Pet/Kids Friendly </Text>
            </Left>
            <Body>
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
            </Body>
            <Picker
              mode="dropdown"
              note
              placeholder="Select"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              headerBackButtonText="Back"
              selectedValue={PlantStore.petFilter}
              onValueChange={inputVal => this.changePetState(inputVal)}
            >
              <Picker.Item label="Yes" value="Yes" />
              <Picker.Item label="No" value="No" />
            </Picker>
          </CardItem>
          <CardItem>
            <Left>
              <Text style={{ fontWeight: "bold" }}> Theme </Text>
            </Left>
            <Body>
              {PlantStore.themeFilter !== "" && (
                <Button
                  transparent
                  onPress={() => {
                    PlantStore.changeFilterTheme("");
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
            </Body>
            <Picker
              mode="dropdown"
              note
              placeholder="Select"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              headerBackButtonText="Back"
              selectedValue={PlantStore.themeFilter}
              onValueChange={inputVal => this.changeThemeState(inputVal)}
            >
              <Picker.Item label="Classic" value="Classic" />
              <Picker.Item label="Modern" value="Modern" />
              <Picker.Item label="Casual" value="Casual" />
              <Picker.Item label="Colorful" value="Colorful" />
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
