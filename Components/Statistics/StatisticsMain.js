//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { createStackNavigator } from "react-navigation";
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Icon,
  Item,
  Button,
  Thumbnail,
  Left,
  Label,
  Input,
  Right
} from "native-base";
import moment from "moment";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

//import Stores
import PlantStore from "../Stores/PlantStore";
import PlantingHistory from "../LoginScreen/PreviousOrders/PlantingHistory";
import userdatabase from "../Stores/databases/userdatabase";
import HeaderBar from "../Header/Header";
import FooterBar from "../Footer/Footer";
import PlantBackground from "../LoginScreen/plantBackground5.png";
import UserStore from "../Stores/UserStore";
import StatisticsScreenDummy from "./StatisticsScreenDummy";
import AuthStore from "../Stores/AuthStore";

// create a component
class StatiscticsMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openTrack: false,
      newTrackingCode: ""
    };
  }

  render() {
    let currentUser = AuthStore.user.username;
    let plants = PlantStore.plants;
    let tracking = UserStore.updatedTrackList.map((track, index) => (
      <PlantingHistory track={track} key={index} />
    ));
    if (!UserStore.signedIn) {
      return <StatisticsScreenDummy />;
    }
    let newCodeStatus = false;
    let plantName = "";
    let plantID = null;
    let countTrackers = 0;
    for (let j = 0; j < UserStore.updatedTrackList.length; j++) {
      if (UserStore.updatedTrackList[j].active === true) {
        countTrackers += 1;
      }
    }
    for (let i = 0; i < PlantStore.plants.length; i++) {
      if (
        this.state.newTrackingCode.toLowerCase() ===
        PlantStore.plants[i].tracking_code.toLowerCase()
      ) {
        newCodeStatus = true;
        plantName = PlantStore.plants[i].name;
        plantID = PlantStore.plants[i].id;
      }
    }
    return (
      <Container>
        <ImageBackground
          source={PlantBackground}
          style={{ width: "100%", height: "100%" }}
        >
          <HeaderBar pageNameProp="My Stats" screenNameProp="Statistics" />
          <Card padder style={{ shadowOpacity: 0.7, shadowRadius: 20 }}>
            <CardItem bordered header>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                {currentUser && currentUser.toUpperCase()}
              </Text>
            </CardItem>
            <CardItem bordered style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold", fontSize: 24 }}>
                {countTrackers}
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                {" "}
                Tracked Plant
                {countTrackers !== 1 && "s"}
              </Text>
            </CardItem>
          </Card>
          <Content padder>
            <Card style={{ shadowOpacity: 80, shadowRadius: 5 }}>
              {tracking}
            </Card>
            <Text> </Text>
            {!this.state.openTrack ? (
              <Button
                full
                rounded
                success
                style={{ shadowOpacity: 80 }}
                onPress={() => this.setState({ openTrack: true })}
              >
                <Text style={{ fontWeight: "bold", color: "white" }}>
                  Track A New Plant
                </Text>
              </Button>
            ) : (
              <View>
                <Button
                  full
                  success
                  disabled={newCodeStatus === false}
                  rounded
                  style={{ shadowOpacity: 80 }}
                  onPress={() => {
                    UserStore.addTrackPlant(plantID);
                    this.setState({ openTrack: false, newTrackingCode: "" });
                  }}
                >
                  <Text style={{ fontWeight: "bold", color: "white" }}>
                    {newCodeStatus
                      ? `Submit, start tracking a ${plantName} plant!`
                      : "Invalid Code"}
                  </Text>
                </Button>
                <Text> </Text>
                <Item rounded style={{ backgroundColor: "white" }}>
                  <Icon name="ios-search" />
                  <Input
                    placeholder="Write in Activation Code..."
                    value={this.state.newTrackingCode}
                    onChangeText={inputVal =>
                      this.setState({ newTrackingCode: inputVal })
                    }
                    style={{ fontWeight: "bold" }}
                  />
                </Item>
                <Text> </Text>
                <Button
                  full
                  danger
                  rounded
                  style={{ shadowOpacity: 80 }}
                  onPress={() => this.setState({ openTrack: false })}
                >
                  <Text style={{ fontWeight: "bold", color: "white" }}>
                    Cancel
                  </Text>
                </Button>
              </View>
            )}
          </Content>
          <FooterBar pageNameProp="Statistics" screenNameProp="Statistics" />
        </ImageBackground>
      </Container>
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
export default withNavigation(observer(StatiscticsMain));
