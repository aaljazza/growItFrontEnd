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
import HeaderBar from "../Header/Header";
import FooterBar from "../Footer/Footer";
// import {
//   LineChart
// } from "react-native-chart-kit";
import moment from "moment";
import PureChart from "react-native-pure-chart";
import StepIndicator from "react-native-step-indicator";
import PercentageCircle from "react-native-percentage-circle";
import ToggleSwitch from "toggle-switch-react-native";

//Step Indicator Constants
const labels = ["Seedling", "Vegetation", "Budding/Flowering", "Ripening"];
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

export default class StatisticsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 2,
      notificationToggle: false
    };
  }
  render() {
    let ageTime;
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

    return (
      <Container>
        <HeaderBar pageNameProp="Statistics" />
        <Content padder>
          <View />
          <ToggleSwitch
            isOn={this.state.notificationToggle}
            onColor="green"
            offColor="red"
            label="Get Notifications"
            labelStyle={{ color: "black", fontWeight: "900" }}
            size="medium"
            onToggle={() =>
              this.setState({
                notificationToggle: !this.state.notificationToggle
              })
            }
          />
          <Card>
            <CardItem bordered>
              <Image
                source={{
                  uri:
                    "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2090330.jpg"
                }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Text style={{ fontWeight: "bold" }}>Basil Plant:</Text>
            </CardItem>
            <CardItem bordered>
              <Text note style={{ fontWeight: "bold" }}>
                {" "}
                Ocimum basilicum{" "}
              </Text>
            </CardItem>
            <CardItem bordered>
              <Text>Age of Plant:</Text>
              <Text style={{ fontWeight: "bold" }}>
                {" "}
                {moment("20180620", "YYYYMMDD").toNow(true)} old
              </Text>
            </CardItem>
            <CardItem>
              <Text>Plant Life Stage:</Text>
              <Text note> Budding</Text>
            </CardItem>
            <StepIndicator
              customStyles={customStyles}
              currentPosition={this.state.currentPosition}
              stepCount={4}
              labels={labels}
            />
            <CardItem bordered>
              <Text note>
                During the Budding phase, you will notice pulps forming on the
                plant. You will also notice the leaves increasing more than
                usual.
              </Text>
            </CardItem>
            <CardItem bordered>
              <Left>
                <Text>Next Watering </Text>
                <Text note>Every 4 days</Text>
              </Left>
              <PercentageCircle radius={30} percent={25} color={"#318e00"}>
                <Text>3</Text>
              </PercentageCircle>
            </CardItem>
            <CardItem bordered>
              <Left>
                <Text>Next Stage </Text>
                <Text note> 90 days</Text>
              </Left>
              <PercentageCircle radius={30} percent={92} color={"#318e00"}>
                <Text>7</Text>
              </PercentageCircle>
            </CardItem>
            <CardItem bordered>
              <Left>
                <Text>Ready to Eat! </Text>
                <Text note> 120 days</Text>
              </Left>
              <PercentageCircle radius={30} percent={75} color={"#318e00"}>
                <Text>30</Text>
              </PercentageCircle>
            </CardItem>
          </Card>
          {/* <LineChart
            data={{
              labels: [
                "Month 1",
                "Month 2",
                "Month 3",
                "Month 4",
                "Month 5",
                "Month 6"
              ],
              datasets: [
                {
                  data: [0, 5, 20, 30, 40, 45, 45]
                },
                {
                  data: [0, 6, 17, 60, 90, 100]
                }
              ]
            }}
            width={Dimensions.get("window").width - 25} // from react-native
            height={220}
            chartConfig={{
              backgroundColor: "#00894b",
              backgroundGradientFrom: "#42c100",
              backgroundGradientTo: "#318e00",
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              }
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          /> */}
          <View style={{ width: "100%" }}>
            <PureChart data={sampleData} type="line" gap={45} />
          </View>
        </Content>
        <FooterBar pageNameProp="Statistics" />
      </Container>
    );
  }
}

const data = [0.4, 0.6, 0.8];
