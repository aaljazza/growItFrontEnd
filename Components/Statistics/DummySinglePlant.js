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
  Right,
  Item,
  Input
} from "native-base";
import { LinearGradient } from "expo";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

import HeaderBar from "../Header/Header";
import FooterBar from "../Footer/Footer";
import PlantBackground from "../LoginScreen/plantBackground5.png";
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
import PlantStore from "../Stores/PlantStore";
import HistoryStore from "../Stores/HistoryStore";

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

let initialLabels = [0, 5, 10, 15, 20, 25, 30, 35, 37];
let initialData = [0, 0, 3, 6, 12, 15, 19, 18, 20];

class DummySinglePlant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0,
      notificationToggle: false,
      newHeight: null,
      initialLabels: [0, 5, 10, 15, 20, 25, 30, 35, 37],
      initialData: [0, 0, 3, 6, 12, 15, 19, 18, 20]
    };
  }
  render() {
    let indexVal = PlantStore.plants.findIndex(plant => plant.id === 3);
    let plant = PlantStore.plants[indexVal];
    let stage1 = 0;
    let stage2 = plant.stage_1day;
    let stage3 = plant.stage_2day;
    let stage4 = plant.stage_3day;
    const labels = [
      plant.stage_1des,
      plant.stage_2des,
      plant.stage_3des,
      "Eat"
    ];

    let newHeightCheck;
    if (
      this.state.initialData.length > 9 ||
      isNaN(this.state.newHeight) ||
      this.state.newHeight === null ||
      this.state.newHeight === "" ||
      this.state.newHeight > 99
    ) {
      newHeightCheck = "no";
    } else {
      newHeightCheck = "yes";
    }
    let lastHeightCheck;
    if (
      39 - this.state.initialLabels[this.state.initialLabels.length - 1] <=
      1
    ) {
      lastHeightCheck = "no";
      newHeightCheck = "no";
    } else {
      lastHeightCheck = "yes";
    }

    return (
      <Container>
        <ImageBackground
          source={PlantBackground}
          style={{ width: "100%", height: "100%" }}
        >
          <HeaderBar pageNameProp="Sample" screenNameProp="Dummy" />
          <Text> </Text>
          <Button
            full
            success
            style={{
              backgroundColor: "#0b701c",
              shadowOpacity: 80
            }}
            onPress={() => {
              this.props.navigation.navigate("Profile");
              HistoryStore.changePage("Statistics");
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: 25
              }}
            >
              Click here to login.
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
                <Text style={{ fontWeight: "bold" }}>{plant.name}</Text>
              </CardItem>
              <CardItem bordered>
                <Text note style={{ fontWeight: "bold" }}>
                  {" "}
                  {plant.scientific_name}
                </Text>
              </CardItem>
              <CardItem bordered>
                <Text>Age of Plant:</Text>
                <Text style={{ fontWeight: "bold" }}> 37 days old</Text>
              </CardItem>
              <CardItem>
                <Text>Plant Life Stage:</Text>
                <Text style={{ fontWeight: "bold" }}> {plant.stage_3des}</Text>
              </CardItem>
              <StepIndicator
                customStyles={customStyles}
                currentPosition={2}
                stepCount={4}
                labels={labels}
              />
              <CardItem bordered>
                <Text note>{plant.stage_3det}</Text>
              </CardItem>
              <CardItem bordered>
                <Left>
                  <Text>Next Watering </Text>
                  <Text note>Every 6 days</Text>
                </Left>
                <PercentageCircle
                  borderWidth={10}
                  radius={40}
                  percent={(100 * (37 % 6)) / 6}
                  color={"#318e00"}
                >
                  <Text>{6 - (103 % 6)}</Text>
                </PercentageCircle>
              </CardItem>
              <CardItem bordered>
                <Left>
                  <Text>Next Stage </Text>
                  <Text note> About 60 days</Text>
                </Left>
                <PercentageCircle
                  borderWidth={10}
                  radius={40}
                  percent={(100 * (30 - 23)) / 30}
                  color={"#318e00"}
                >
                  <Text>23</Text>
                </PercentageCircle>
              </CardItem>
              <CardItem bordered>
                <Left>
                  <Text>Ready to Eat! </Text>
                  <Text note> About 60 days</Text>
                </Left>
                <PercentageCircle
                  radius={40}
                  borderWidth={10}
                  percent={(100 * 37) / 60}
                  color={"#318e00"}
                >
                  <Text>{74 > 103 ? "Eat" : 23}</Text>
                </PercentageCircle>
              </CardItem>
            </Card>
            <Card
              style={{
                shadowOpacity: 0.5,
                borderRadius: 10,
                shadowRadius: 20,
                shadowOffset: { width: null, height: 10 }
              }}
            >
              <CardItem style={{ borderRadius: 10 }}>
                <Text style={{ fontWeight: "bold", alignSelf: "center" }}>
                  {lastHeightCheck === "yes"
                    ? "Record Today's Height"
                    : "Height Recorded Successfully"}
                </Text>
              </CardItem>
              <Item style={{ borderRadius: 10 }}>
                <Input
                  placeholder="..."
                  disabled={lastHeightCheck === "no"}
                  style={{ width: 50, fontWeight: "bold" }}
                  onChangeText={inputVal =>
                    this.setState({ newHeight: inputVal })
                  }
                  keyboardType="numeric"
                />
                <Button disabled light>
                  <Text style={{ fontWeight: "bold", color: "black" }}>
                    in cm
                  </Text>
                </Button>
                <Button
                  success={newHeightCheck === "yes"}
                  disabled={newHeightCheck === "no"}
                  onPress={() => {
                    let data = this.state.initialData;
                    data.push(this.state.newHeight);
                    let label = this.state.initialLabels;
                    label.push(
                      this.state.initialLabels[
                        this.state.initialLabels.length - 1
                      ] + 1
                    );
                    this.setState({ initialData: data, initialLabels: label });
                  }}
                >
                  <Text>Submit</Text>
                </Button>
              </Item>
            </Card>
            <LineChart
              data={{
                labels: this.state.initialLabels,
                datasets: [{ data: this.state.initialData }]
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
          <FooterBar pageNameProp="Statistics" screenNameProp="Dummy" />
        </ImageBackground>
      </Container>
    );
  }
}

export default withNavigation(observer(DummySinglePlant));
