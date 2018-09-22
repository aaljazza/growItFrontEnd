//import liraries
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
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

// create a component
class FilterChoices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      careLevel: null,
      lighting: null,
      petFriendly: null,
      themeChoice: null,
      plantSize: null
    };
  }
  changeCareState(inputVal) {
    this.setState({ careLevel: inputVal });
  }
  changeLightState(inputVal) {
    this.setState({ lighting: inputVal });
  }
  changeSizeState(inputVal) {
    this.setState({ plantSize: inputVal });
  }
  changePetState(inputVal) {
    this.setState({ petFriendly: inputVal });
  }
  changeThemeState(inputVal) {
    this.setState({ themeChoice: inputVal });
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
              {this.state.careLevel && (
                <Button
                  transparent
                  onPress={() => {
                    this.setState({ careLevel: null });
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
            <Right>
              <Picker
                mode="dropdown"
                note
                placeholder="Select"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                headerBackButtonText="Back"
                selectedValue={this.state.careLevel}
                onValueChange={inputVal => this.changeCareState(inputVal)}
              >
                <Picker.Item label="Decoration (Low)" value="Low" />
                <Picker.Item label="Hobby (High)" value="High" />
              </Picker>
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <Text style={{ fontWeight: "bold" }}> Lighting </Text>
            </Left>
            <Body>
              {this.state.lighting && (
                <Button
                  transparent
                  onPress={() => {
                    this.setState({ lighting: null });
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
            <Right>
              <Picker
                mode="dropdown"
                note
                placeholder="Select"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                headerBackButtonText="Back"
                selectedValue={this.state.lighting}
                onValueChange={inputVal => this.changeLightState(inputVal)}
              >
                <Picker.Item
                  label="Bright (6 hours of Sunlight)"
                  value="Bright"
                />
                <Picker.Item
                  label="Medium (3 hours of Sunlight"
                  value="Medium"
                />
                <Picker.Item label="Dark (Shade)" value="Dark" />
              </Picker>
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <Text style={{ fontWeight: "bold" }}> Plant Size </Text>
            </Left>
            <Body>
              {this.state.plantSize && (
                <Button
                  transparent
                  onPress={() => {
                    this.setState({ plantSize: null });
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
            <Right>
              <Picker
                mode="dropdown"
                note
                placeholder="Select"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                headerBackButtonText="Back"
                selectedValue={this.state.plantSize}
                onValueChange={inputVal => this.changeSizeState(inputVal)}
              >
                <Picker.Item label="Desktop" value="Desktop" />
                <Picker.Item label="Ground" value="Medium" />
                <Picker.Item label="Large" value="Large" />
              </Picker>
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <Text style={{ fontWeight: "bold" }}> Pet/Kids Friendly </Text>
            </Left>
            <Body>
              {this.state.petFriendly && (
                <Button
                  transparent
                  onPress={() => {
                    this.setState({ petFriendly: null });
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
            <Right>
              <Picker
                mode="dropdown"
                note
                placeholder="Select"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                headerBackButtonText="Back"
                selectedValue={this.state.petFriendly}
                onValueChange={inputVal => this.changePetState(inputVal)}
              >
                <Picker.Item label="Yes" value="Yes" />
                <Picker.Item label="No" value="No" />
              </Picker>
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <Text style={{ fontWeight: "bold" }}> Theme </Text>
            </Left>
            <Body>
              {this.state.themeChoice && (
                <Button
                  transparent
                  onPress={() => {
                    this.setState({ themeChoice: null });
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
            <Right>
              <Picker
                mode="dropdown"
                note
                placeholder="Select"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                headerBackButtonText="Back"
                selectedValue={this.state.themeChoice}
                onValueChange={inputVal => this.changeThemeState(inputVal)}
              >
                <Picker.Item label="Classic" value="Classic" />
                <Picker.Item label="Modern" value="Modern" />
                <Picker.Item label="Casual" value="Casual" />
                <Picker.Item label="Colorful" value="Colorful" />
              </Picker>
            </Right>
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
export default FilterChoices;
