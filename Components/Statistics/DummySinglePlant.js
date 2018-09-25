import React from "react";
import {
  StatusBar,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground
} from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  View,
  Left,
  Icon,
  Right
} from "native-base";
import { LinearGradient } from "expo";

import HeaderBar from "../Header/Header";
import FooterBar from "../Footer/Footer";
import PlantBackground from "../LoginScreen/PlantBackgroundBlur.png";
// import Store

import StepIndicator from "react-native-step-indicator";
import PercentageCircle from "react-native-percentage-circle";
import ToggleSwitch from "toggle-switch-react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph
} from "react-native-chart-kit";

import Basil from "./DummyPlantPics/Basil.png";

//Step Indicator Constants
const customStyles = {
  stepIndicatorSize: 20,
  currentStepIndicatorSize: 35,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: "#41ba00",
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: "#318e00",
  stepStrokeUnFinishedColor: "#aaaaaa",
  separatorFinishedColor: "#318e00",
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: "#318e00",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#41ba00",
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 20,
  stepIndicatorLabelCurrentColor: "#ffffff",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#aaaaaa",
  labelColor: "#999999",
  labelSize: 10,
  currentStepLabelColor: "#41ba00"
};

export default class DummySinglePlant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0,
      notificationToggle: false
    };
  }
  render() {
    let stage1 = 0;
    let stage2 = 24;
    let stage3 = 63;
    let stage4 = 103;
    const labels = ["Germination", "Sprouting", "Maturing", "Eat"];

    return (
      <Container>
        <ImageBackground
          source={PlantBackground}
          style={{ width: "100%", height: "100%" }}
        >
          <HeaderBar pageNameProp="Test Plant" />
          <Text> </Text>
          <Button
            full
            success
            style={{
              backgroundColor: "#0b701c",
              shadowOpacity: 80
            }}
            onPress={() => this.props.navigation.navigate("Profile")}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: 25
              }}
            >
              This is a Test Screen
            </Text>
          </Button>
          <Button
            full
            success
            style={{
              backgroundColor: "#0b701c"
            }}
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
          <Content padder>
            <View />
            <Card>
              <CardItem bordered>
                <Image
                  source={Basil}
                  style={{ height: 200, width: null, flex: 1 }}
                />
              </CardItem>
              <CardItem>
                <Text style={{ fontWeight: "bold" }}>Basil</Text>
              </CardItem>
              <CardItem bordered>
                <Text note style={{ fontWeight: "bold" }}>
                  {" "}
                  Ocimum basilicum
                </Text>
              </CardItem>
              <CardItem bordered>
                <Text>Age of Plant:</Text>
                <Text style={{ fontWeight: "bold" }}> 74 days old</Text>
              </CardItem>
              <CardItem>
                <Text>Plant Life Stage:</Text>
                <Text style={{ fontWeight: "bold" }}> Maturing</Text>
              </CardItem>
              <StepIndicator
                customStyles={customStyles}
                currentPosition={2}
                stepCount={4}
                labels={labels}
              />
              <CardItem bordered>
                <Text note>
                  Leaves should be fully forming, flowers are starting to
                  blossom, and the chilis are forming slowly. Give it time to
                  mature and soon you will be able to eat
                </Text>
              </CardItem>
              <CardItem bordered>
                <Left>
                  <Text>Next Watering </Text>
                  <Text note>Every 6 days</Text>
                </Left>
                <PercentageCircle
                  borderWidth={10}
                  radius={40}
                  percent={(100 * (74 % 6)) / 6}
                  color={"#318e00"}
                >
                  <Text>{6 - (103 % 6)}</Text>
                </PercentageCircle>
              </CardItem>
              <CardItem bordered>
                <Left>
                  <Text>Next Stage </Text>
                  <Text note> About 103 days</Text>
                </Left>
                <PercentageCircle
                  borderWidth={10}
                  radius={40}
                  percent={(100 * (103 - 29)) / 103}
                  color={"#318e00"}
                >
                  <Text>29</Text>
                </PercentageCircle>
              </CardItem>
              <CardItem bordered>
                <Left>
                  <Text>Ready to Eat! </Text>
                  <Text note> About 103 days</Text>
                </Left>
                <PercentageCircle
                  radius={40}
                  borderWidth={10}
                  percent={(100 * 74) / 103}
                  color={"#318e00"}
                >
                  <Text>{74 > 103 ? "Eat" : 103 - 74}</Text>
                </PercentageCircle>
              </CardItem>
            </Card>
            <LineChart
              data={{
                labels: [0, 20, 40, 60, 80, 100, 120, 140],
                datasets: [
                  {
                    data: [0, 0, 10, 15, 20, 25, 30, 30]
                  }
                ]
              }}
              width={Dimensions.get("window").width - 25} // from react-native
              height={220}
              chartConfig={{
                backgroundColor: "#d1ffba",
                backgroundGradientFrom: "#329900",
                backgroundGradientTo: "#1d5b00",
                color: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 2
                }
              }}
              style={{
                marginVertical: 8,
                borderRadius: 16
              }}
            />
          </Content>
          <FooterBar pageNameProp="Statistics" />
        </ImageBackground>
      </Container>
    );
  }
}
