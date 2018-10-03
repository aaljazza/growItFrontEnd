import React from "react";
import {
  StatusBar,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Alert
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
  Item,
  Input,
  Icon,
  Right
} from "native-base";
import { LinearGradient } from "expo";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

import HeaderBar from "../Header/Header";
import FooterBar from "../Footer/Footer";
// import Store
import PlantStore from "../Stores/PlantStore";
import PlantBackground from "../LoginScreen/plantBackground5.png";

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
import UserStore from "../Stores/UserStore";
import HeightRow from "./HeightRow";

//Step Indicator Constants
const customStyles = {
  stepIndicatorSize: 20,
  currentStepIndicatorSize: 35,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: "#41ba00",
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: "#119a50",
  stepStrokeUnFinishedColor: "#aaaaaa",
  separatorFinishedColor: "#119a50",
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: "#119a50",
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
  removeItemAlert(plantName, plantID, trackID) {
    Alert.alert(
      `Delete Tracking ${plantName}`,
      "Kindly note this is not reversable, you will lose all data.",
      [
        {
          text: "Yes, Delete",
          onPress: () => {
            UserStore.removeTrackPlant(plantID, trackID);
            this.props.navigation.navigate("Statistics");
          }
        },
        {
          text: "No, Leave it",
          onPress: () => console.log("canceled")
        }
      ]
    );
  }
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0,
      notificationToggle: false,
      newHeight: null,
      initialLabels: [],
      initialData: [],
      orderOpen: false
    };
  }
  render() {
    let trackID = PlantStore.trackID; //this is the tracking ID
    let trackIndex = UserStore.updatedTrackList.findIndex(
      track => track.id === trackID
    );
    let trackedPlant = UserStore.updatedTrackList[trackIndex]; //this is the tracking Object
    let plantIndex = PlantStore.plants.findIndex(
      plant => plant.id === trackedPlant.plant
    ); //this is the plant ID

    storePlant = PlantStore.plants[plantIndex]; //this is the plant object

    let daysPassed = moment().diff(trackedPlant.planted_on, "days");
    let daysPrint = null;
    let description = null;
    let finalStage = null;
    let daysRemainingStage = null;
    let daysForThisStage = null;
    if (
      daysPassed >
      storePlant.stage_1day + storePlant.stage_2day + storePlant.stage_3day
    ) {
      daysPrint = 3;
      description = storePlant.stage_4det;
      finalStage = "Eat";
      daysRemainingStage = 0;
      daysForThisStage = 1;
    } else if (daysPassed > storePlant.stage_1day + storePlant.stage_2day) {
      daysPrint = 2;
      description = storePlant.stage_3det;
      finalStage = storePlant.stage_3des;
      daysRemainingStage =
        storePlant.stage_1day +
        storePlant.stage_2day +
        storePlant.stage_3day -
        daysPassed;
      daysForThisStage = storePlant.stage_3day;
    } else if (daysPassed > storePlant.stage_1day) {
      description = storePlant.stage_2det;
      finalStage = storePlant.stage_2des;
      daysPrint = 1;
      daysRemainingStage =
        storePlant.stage_1day + storePlant.stage_2day - daysPassed;
      daysForThisStage = storePlant.stage_2day;
    } else {
      daysPrint = 0;
      description = storePlant.stage_1det;
      finalStage = storePlant.stage_1des;
      daysRemainingStage = storePlant.stage_1day - daysPassed;
      daysForThisStage = storePlant.stage_1day;
    }
    let stage1 = 0;
    let stage2 = storePlant.stage_1day;
    let stage3 = storePlant.stage_1day + storePlant.stage_2day;
    let stage4 =
      storePlant.stage_1day + storePlant.stage_2day + storePlant.stage_3day;
    const labels = [
      storePlant.stage_1des,
      storePlant.stage_2des,
      storePlant.stage_3des,
      "Eat"
    ];
    let dataUpd = [0];
    let labUpd = [0];
    let dateVal;
    let sampleData = [];
    let heightRowView;
    let sampleCount = 0;
    for (let i = 0; i < trackedPlant.plantheight_set.length; i++) {
      if (trackedPlant.plantheight_set[i].active === true) {
        dataUpd.push(Math.round(trackedPlant.plantheight_set[i].height));
        dateVal =
          moment().diff(trackedPlant.planted_on, "days") -
          moment().diff(trackedPlant.plantheight_set[i].days, "days");
        labUpd.push(dateVal);
        sampleCount += 1;
      }
    }
    heightRowView = trackedPlant.plantheight_set.map((height, index) => (
      <HeightRow height={height} key={index} />
    ));

    lastHeightCheck = "yes";
    newHeightCheck = "yes";
    let lastHeight = 0;
    let dayPlanted = moment().diff(trackedPlant.planted_on, "days") + 0;
    if (dayPlanted - labUpd[labUpd.length - 1] <= 0) {
      lastHeightCheck = "no";
      newHeightCheck = "no";
    } else if (
      isNaN(this.state.newHeight) ||
      this.state.newHeight === null ||
      this.state.newHeight === "" ||
      this.state.newHeight > 99
    ) {
      newHeightCheck = "no";
    }
    return (
      <Container>
        <ImageBackground
          source={PlantBackground}
          style={{ width: "100%", height: "100%" }}
        >
          <HeaderBar
            pageNameProp="Statistics"
            screenNameProp="StatisticsPlot"
          />
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
                  {moment(trackedPlant.planted_on).toNow(true)} old
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
                  <Text note>Every {storePlant.watering_frequency} days</Text>
                </Left>
                <PercentageCircle
                  borderWidth={10}
                  radius={40}
                  percent={
                    (100 * (daysPassed % storePlant.watering_frequency)) /
                    storePlant.watering_frequency
                  }
                  color={"#119a50"}
                >
                  <Text>
                    {storePlant.watering_frequency -
                      (daysPassed % storePlant.watering_frequency)}
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
                  color={"#119a50"}
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
                  color={"#119a50"}
                >
                  <Text>
                    {daysPassed > stage4 ? "Eat" : stage4 - daysPassed}
                  </Text>
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
                <Text
                  style={{
                    fontWeight: "bold",
                    alignSelf: "center",
                    justifyContent: "center"
                  }}
                >
                  {lastHeightCheck === "yes"
                    ? "Record Today's Height"
                    : "Height recorded successfully. Next height input will be available tomorrow."}
                </Text>
              </CardItem>
              {lastHeightCheck === "yes" && (
                <Item style={{ borderRadius: 10 }}>
                  <Input
                    placeholder="..."
                    disabled={lastHeightCheck === "no"}
                    style={{ width: 50, fontWeight: "bold" }}
                    value={this.state.newHeight}
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
                    transparent={newHeightCheck === "no"}
                    disabled={newHeightCheck === "no"}
                    onPress={() => {
                      UserStore.createHeight(
                        this.state.newHeight + 0,
                        trackedPlant.id
                      );
                      this.setState({ newHeight: null });
                    }}
                  >
                    <Text>{newHeightCheck === "yes" ? "Submit" : ""}</Text>
                  </Button>
                </Item>
              )}
            </Card>
            <LineChart
              data={{
                labels: labUpd,
                datasets: [
                  {
                    data: dataUpd
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
            <Card>
              <CardItem bordered>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  {sampleCount} Data Point
                  {sampleCount !== 1 && "s"}
                </Text>
                <Right>
                  <Button
                    transparent
                    onPress={() =>
                      this.setState({ orderOpen: !this.state.orderOpen })
                    }
                  >
                    {this.state.orderOpen ? (
                      <Icon
                        type="Entypo"
                        name="chevron-up"
                        style={{ fontSize: 25, color: "#119a50" }}
                      />
                    ) : (
                      <Icon
                        type="Entypo"
                        name="chevron-down"
                        style={{ fontSize: 25, color: "#119a50" }}
                      />
                    )}
                  </Button>
                </Right>
              </CardItem>
              {this.state.orderOpen && heightRowView}
            </Card>
            <Button
              danger
              full
              rounded
              bordered
              onPress={() =>
                this.removeItemAlert(
                  storePlant.name,
                  storePlant.id,
                  trackedPlant.id
                )
              }
            >
              <Text>Delete this plant.</Text>
            </Button>
          </Content>
          <FooterBar
            pageNameProp="Statistics"
            screenNameProp="StatisticsPlot"
          />
        </ImageBackground>
      </Container>
    );
  }
}

const data = [0.4, 0.6, 0.8];

export default withNavigation(observer(StatisticsScreen));
