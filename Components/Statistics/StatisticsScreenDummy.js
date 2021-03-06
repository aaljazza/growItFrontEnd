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
import { observer } from "mobx-react";

//import Stores
import PlantStore from "../Stores/PlantStore";
import PlantingHistory from "../LoginScreen/PreviousOrders/PlantingHistory";
import userdatabase from "../Stores/databases/userdatabase";
import HeaderBar from "../Header/Header";
import FooterBar from "../Footer/Footer";
import PlantBackground from "../LoginScreen/plantBackground5.png";
import UserStore from "../Stores/UserStore";
import Basil from "./DummyPlantPics/Basil.png";
import HistoryStore from "../Stores/HistoryStore";

// create a component
class StatisticsScreenDummy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openTrack: false,
      newTrackingCode: ""
    };
  }

  componentDidMount() {
    alert("This is a demo screen, please sign in to Track your plants.");
  }

  render() {
    let indexVal = PlantStore.plants.findIndex(plant => plant.id === 3);
    let plant = PlantStore.plants[indexVal];

    return (
      <Container>
        <ImageBackground
          source={PlantBackground}
          style={{ width: "100%", height: "100%" }}
        >
          <HeaderBar pageNameProp="DEMO" screenNameProp="Statistics" />
          <Text> </Text>
          <View padder>
            <Button
              full
              rounded
              style={{
                marginTop: 10,
                shadowOpacity: 80,
                backgroundColor: "#119a50",
                shadowOffset: { width: 0, height: 5 },
                borderColor: "black",
                borderWidth: 1
              }}
              onPress={() => {
                this.props.navigation.navigate("Profile");
                HistoryStore.changePage("Statistics");
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "white"
                }}
              >
                CLICK TO LOGIN
              </Text>
            </Button>
            <Card padder style={{ shadowOpacity: 0.7, shadowRadius: 20 }}>
              <CardItem bordered header>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                  Your Name Goes Here
                </Text>
              </CardItem>
              <CardItem bordered>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                  1 Tracked Plant
                </Text>
              </CardItem>
            </Card>
          </View>
          <Content>
            <Card>
              <CardItem bordered style={{ height: 100 }}>
                <Thumbnail source={{ uri: plant.img }} style={{ height: 90 }} />
                <Text> </Text>
                <Body>
                  <Text style={{ fontSize: 20 }}>Basil</Text>
                  <Text note>37 days old</Text>
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                    Current Stage:
                  </Text>
                  <Text note>{plant.stage_3des}</Text>
                </Body>
                <Right
                  style={{ flexDirection: "row", justifyContent: "flex-end" }}
                >
                  <Button
                    rounded
                    transparent
                    onPress={() => {
                      this.props.navigation.navigate("Dummy");
                      HistoryStore.changePage("Statistics");
                    }}
                    style={{ height: 150 }}
                  >
                    <PercentageCircle
                      radius={35}
                      borderWidth={7}
                      percent={(100 * 37) / 60}
                      color={"#318e00"}
                    >
                      <Text
                        style={{
                          color: "#119a50",
                          fontWeight: "bold",
                          fontSize: 18
                        }}
                      >
                        23
                      </Text>
                    </PercentageCircle>
                    <Icon
                      active
                      style={{
                        color: "#119a50",
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
export default withNavigation(observer(StatisticsScreenDummy));
