//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { createStackNavigator, withNavigation } from "react-navigation";
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
import PercentageCircle from "react-native-percentage-circle";

//import Stores
import PlantStore from "../Stores/PlantStore";
import PlantingHistory from "../LoginScreen/PreviousOrders/PlantingHistory";
import userdatabase from "../Stores/databases/userdatabase";
import HeaderBar from "../Header/Header";
import FooterBar from "../Footer/Footer";
import PlantBackground from "../LoginScreen/PlantBackground.png";
import UserStore from "../Stores/UserStore";
import Basil from "./DummyPlantPics/Basil.png";

// create a component
class StatisticsScreenDummy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openTrack: false,
      newTrackingCode: ""
    };
  }
  render() {
    return (
      <Container>
        <ImageBackground
          source={PlantBackground}
          style={{ width: "100%", height: "100%" }}
        >
          <HeaderBar pageNameProp="Dummy" />
          <Text> </Text>
          <Button
            full
            success
            style={{ backgroundColor: "#0b701c", shadowOpacity: 80 }}
            onPress={() => this.props.navigation.navigate("Profile")}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: 25
              }}
            >
              Login to Activate
            </Text>
          </Button>
          <Card padder>
            <CardItem header>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                Your Name Goes Here
              </Text>
            </CardItem>
            <CardItem bordered>
              <Text note>User Since: Hopefully You Can Join Us Today!</Text>
            </CardItem>
          </Card>
          <Content>
            <Card>
              <CardItem bordered style={{ height: 100 }}>
                <Thumbnail source={Basil} style={{ height: 90 }} />
                <Text> </Text>
                <Body>
                  <Text style={{ fontSize: 20 }}>Basil</Text>
                  <Text note>74 days old</Text>
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                    Current Stage:
                  </Text>
                  <Text note>Budding</Text>
                </Body>
                <Right
                  style={{ flexDirection: "row", justifyContent: "flex-end" }}
                >
                  <Button
                    rounded
                    transparent
                    onPress={() => {
                      this.props.navigation.navigate("Dummy");
                    }}
                    style={{ height: 150 }}
                  >
                    <PercentageCircle
                      radius={35}
                      borderWidth={7}
                      percent={(100 * 74) / 120}
                      color={"#318e00"}
                    >
                      <Text
                        style={{
                          color: "green",
                          fontWeight: "bold",
                          fontSize: 18
                        }}
                      >
                        46
                      </Text>
                    </PercentageCircle>
                    <Icon
                      active
                      style={{
                        color: "green",
                        fontSize: 40,
                        fontWeight: "bold"
                      }}
                      name="chevron-right"
                      type="FontAwesome"
                    />
                  </Button>
                </Right>
              </CardItem>
            </Card>
          </Content>
          <FooterBar pageNameProp="Statistics" />
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
export default withNavigation(StatisticsScreenDummy);
