import React from "react";
import { StatusBar, Dimensions, ScrollView, Image } from "react-native";
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
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

import HeaderBar from "../Header/Header";
import FooterBar from "../Footer/Footer";
// import Store
import PlantStore from "../Stores/PlantStore";

import moment from "moment";
import PureChart from "react-native-pure-chart";
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

class StatisticsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0,
      notificationToggle: false
    };
  }
  render() {
    let trackID = PlantStore.trackID;
    let trackIndex = PlantStore.trackedPlants.findIndex(
      track => track.trackID === trackID
    );
    let trackedPlant = PlantStore.trackedPlants[trackIndex];

    let plantIndex = PlantStore.plants.findIndex(
      plant => plant.id === PlantStore.trackedPlants[trackIndex].plantID
    );

    storePlant = PlantStore.plants[plantIndex];

    let daysPassed = moment().diff(trackedPlant.plantedOn, "days");
    let daysPrint = null;
    let description = null;
    let finalStage = null;
    let daysRemainingStage = null;
    let daysForThisStage = null;
    if (
      daysPassed >
      storePlant.stage1day + storePlant.stage2day + storePlant.stage3day
    ) {
      daysPrint = 3;
      description = storePlant.stage4det;
      finalStage = "Eat";
      daysRemainingStage = 0;
      daysForThisStage = 1;
    } else if (daysPassed > storePlant.stage1day + storePlant.stage2day) {
      daysPrint = 2;
      description = storePlant.stage3det;
      finalStage = storePlant.stage3des;
      daysRemainingStage =
        storePlant.stage1day +
        storePlant.stage2day +
        storePlant.stage3day -
        daysPassed;
      daysForThisStage = storePlant.stage3day;
    } else if (daysPassed > storePlant.stage1day) {
      description = storePlant.stage2det;
      finalStage = storePlant.stage2des;
      daysPrint = 1;
      daysRemainingStage =
        storePlant.stage1day + storePlant.stage2day - daysPassed;
      daysForThisStage = storePlant.stage2day;
    } else {
      daysPrint = 0;
      description = storePlant.stage1det;
      finalStage = storePlant.stage1des;
      daysRemainingStage = storePlant.stage1day - daysPassed;
      daysForThisStage = storePlant.stage1day;
    }

    let sampleData = [
      {
        seriesName: "series1",
        data: [
          { x: "2018-02-01", y: 0 },
          { x: "2018-02-02", y: 5 },
          { x: "2018-02-03", y: 10 },
          { x: "2018-02-04", y: 20 },
          { x: "2018-02-05", y: 30 },
          { x: "2018-02-06", y: 35 },
          { x: "2018-02-07", y: 35 }
        ],
        color: "#00723e"
      },
      {
        seriesName: "series2",
        data: [
          { x: "2018-02-01", y: 0 },
          { x: "2018-02-02", y: 20 },
          { x: "2018-02-03", y: 30 },
          { x: "2018-02-04", y: 35 },
          { x: "2018-02-04", y: 40 },
          { x: "2018-02-04", y: 40 },
          { x: "2018-02-06", y: 40 }
        ],
        color: "#00a838"
      }
    ];
    let stage1 = 0;
    let stage2 = storePlant.stage1day;
    let stage3 = storePlant.stage1day + storePlant.stage2day;
    let stage4 =
      storePlant.stage1day + storePlant.stage2day + storePlant.stage3day;
    const labels = [
      storePlant.stage1des,
      storePlant.stage2des,
      storePlant.stage3des,
      "Eat"
    ];

    return (
      <Container>
        <HeaderBar pageNameProp="Statistics" />
        <Content padder>
          <View />
          <Card>
            <CardItem bordered>
              <Image
                source={{
                  uri: storePlant.img
                }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Text style={{ fontWeight: "bold" }}>{storePlant.name}</Text>
            </CardItem>
            <CardItem bordered>
              <Text note style={{ fontWeight: "bold" }}>
                {" "}
                {storePlant.scientific_name}{" "}
              </Text>
            </CardItem>
            <CardItem bordered>
              <Text>Age of Plant:</Text>
              <Text style={{ fontWeight: "bold" }}>
                {" "}
                {moment(trackedPlant.plantedOn).toNow(true)} old
              </Text>
            </CardItem>
            <CardItem>
              <Text>Plant Life Stage:</Text>
              <Text style={{ fontWeight: "bold" }}> {finalStage}</Text>
            </CardItem>
            <StepIndicator
              customStyles={customStyles}
              currentPosition={daysPrint}
              stepCount={4}
              labels={labels}
            />
            <CardItem bordered>
              <Text note>{description}</Text>
            </CardItem>
            <CardItem bordered>
              <Left>
                <Text>Next Watering </Text>
                <Text note>Every {storePlant.wateringFrequency} days</Text>
              </Left>
              <PercentageCircle
                borderWidth={10}
                radius={40}
                percent={
                  (100 * (daysPassed % storePlant.wateringFrequency)) /
                  storePlant.wateringFrequency
                }
                color={"#318e00"}
              >
                <Text>
                  {storePlant.wateringFrequency -
                    (daysPassed % storePlant.wateringFrequency)}
                </Text>
              </PercentageCircle>
            </CardItem>
            <CardItem bordered>
              <Left>
                <Text>Next Stage </Text>
                <Text note> About {daysForThisStage} days</Text>
              </Left>
              <PercentageCircle
                borderWidth={10}
                radius={40}
                percent={
                  daysPrint === 3
                    ? 100
                    : (100 * (daysForThisStage - daysRemainingStage)) /
                      daysForThisStage
                }
                color={"#318e00"}
              >
                <Text>{daysRemainingStage}</Text>
              </PercentageCircle>
            </CardItem>
            <CardItem bordered>
              <Left>
                <Text>Ready to Eat! </Text>
                <Text note> About {stage4} days</Text>
              </Left>
              <PercentageCircle
                radius={40}
                borderWidth={10}
                percent={
                  daysPassed > stage4 ? 100 : (100 * daysPassed) / stage4
                }
                color={"#318e00"}
              >
                <Text>{daysPassed > stage4 ? "Eat" : stage4 - daysPassed}</Text>
              </PercentageCircle>
            </CardItem>
          </Card>
          <LineChart
            data={{
              labels: [0, 20, 40, 60, 80, 100, 120, 140],
              datasets: [
                {
                  data: [0, 0, 10, 15, 20, 25, 25]
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
      </Container>
    );
  }
}

const data = [0.4, 0.6, 0.8];

export default withNavigation(observer(StatisticsScreen));
