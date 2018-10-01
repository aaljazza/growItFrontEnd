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
import PlantBackground from "../LoginScreen/PlantBackgroundBlur.png";
import UserStore from "../Stores/UserStore";
import StatisticsScreenDummy from "./StatisticsScreenDummy";

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
    let currentUser = PlantStore.currentUser[0];
    let plants = PlantStore.plants;
    let tracking = currentUser.plantingHistory.map((track, index) => (
      <PlantingHistory plant={track} key={index} />
    ));
    if (!UserStore.signedIn || UserStore.signedIn) {
      return <StatisticsScreenDummy />;
    }
    return (
      <Container>
        <ImageBackground
          source={PlantBackground}
          style={{ width: "100%", height: "100%" }}
        >
          <HeaderBar pageNameProp="My Stats" screenNameProp="Statistics" />
          <Card padder>
            <CardItem header>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                {currentUser.name}
              </Text>
            </CardItem>
            <CardItem bordered>
              <Text note>
                User Since:{" "}
                {moment(currentUser.created_date).format("DD-MMM-YY")}
              </Text>
            </CardItem>
          </Card>
          <Content>
            <Card>{tracking}</Card>
            <Text> </Text>
            {!this.state.openTrack ? (
              <Button
                full
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
                <Item rounded style={{ backgroundColor: "transparent" }}>
                  <Text> </Text>
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
                <Button full success rounded style={{ shadowOpacity: 80 }}>
                  <Text style={{ fontWeight: "bold", color: "white" }}>
                    Submit
                  </Text>
                </Button>
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
