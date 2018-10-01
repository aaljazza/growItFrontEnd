import React, { Component } from "react";
import { View, StyleSheet, Dimensions, ImageBackground } from "react-native";
import {
  Container,
  Content,
  Text,
  Card,
  CardItem,
  Button,
  Segment
} from "native-base";
import Carousel, { Pagination } from "react-native-snap-carousel"; // 3.6.0
import HeaderBar from "../Header/Header";
import FooterBar from "../Footer/Footer";
import StepIndicator from "react-native-step-indicator";
import { observer } from "mobx-react";

//imports
import blur from "../LoginScreen/PlantBackgroundBlur.png";

const SCREEN_WIDTH = Dimensions.get("window").width;
import Step1 from "./process/step1";
import Step2 from "./process/step2";
import Step3 from "./process/step3";
import Step4 from "./process/step4";

const customStyles = {
  stepIndicatorSize: 10,
  currentStepIndicatorSize: 10,
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
  stepIndicatorLabelCurrentColor: "#41ba00",
  stepIndicatorLabelFinishedColor: "#318e00",
  stepIndicatorLabelUnFinishedColor: "#ffffff",
  labelColor: "#999999",
  labelSize: 10,
  currentStepLabelColor: "#41ba00"
};

const labels = ["", "", ""];

export default class AboutUsScreen extends Component {
  SCREENS = [<Step4 />, <Step3 />, <Step2 />, <Step1 />];

  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  render() {
    let airCat = [
      "34% Risk of a Stroke",
      "26% Risk of Heart Disease",
      "12% Respiratory Infections in Children",
      "6% Lung Cancer"
    ];
    let airViews = [];
    let humCat = [
      "30% Increase in Fatigue",
      "35% Increase in Coughing",
      "20% Increase in Itchy Eyes",
      "20% Increase in Runny Nose",
      "20% Increase in Dry Throat"
    ];
    let humViews = [];
    let moodCat = [
      "Reduces Stress",
      "Reduces Anxiety",
      "Reduces Depression",
      "Improves Well-Being",
      "Increase in Positive Energy",
      "Increase in Optimism"
    ];
    moodViews = [];
    let smartCat = [
      "20% Increase in Memory Retention",
      "45% Increase in Creativity",
      "38% Increase in Productivity",
      "36% Reduction in Dementia Risk",
      "Reduces risk of Depression",
      "Reduces risk of Schizophrenia"
    ];
    smartViews = [];
    for (let i = 0; i < airCat.length; i++) {
      airViews.push(
        <Card
          padder
          style={{
            alignSelf: "center",
            backgroundColor: "transparent",
            borderColor: "transparent",
            width: "60%"
          }}
        >
          <CardItem
            style={{
              backgroundColor: "white",
              borderColor: "#119a50",
              borderWidth: 3
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                fontSize: 20,
                textAlign: "center"
              }}
            >
              {airCat[i]}
            </Text>
          </CardItem>
        </Card>
      );
    }
    for (let i = 0; i < humCat.length; i++) {
      humViews.push(
        <Card
          padder
          style={{
            alignSelf: "center",
            backgroundColor: "transparent",
            borderColor: "transparent",
            width: "60%"
          }}
        >
          <CardItem
            style={{
              backgroundColor: "white",
              borderColor: "#119a50",
              borderWidth: 3
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                fontSize: 20,
                textAlign: "center"
              }}
            >
              {humCat[i]}
            </Text>
          </CardItem>
        </Card>
      );
    }
    for (let i = 0; i < moodCat.length; i++) {
      moodViews.push(
        <Card
          padder
          style={{
            alignSelf: "center",
            backgroundColor: "transparent",
            borderColor: "transparent",
            width: "60%"
          }}
        >
          <CardItem
            style={{
              backgroundColor: "white",
              borderColor: "#119a50",
              borderWidth: 3
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                fontSize: 20,
                textAlign: "center"
              }}
            >
              {moodCat[i]}
            </Text>
          </CardItem>
        </Card>
      );
    }
    for (let i = 0; i < smartCat.length; i++) {
      smartViews.push(
        <Card
          padder
          style={{
            alignSelf: "center",
            backgroundColor: "transparent",
            borderColor: "transparent",
            width: "60%"
          }}
        >
          <CardItem
            style={{
              backgroundColor: "white",
              borderColor: "#119a50",
              borderWidth: 3
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                fontSize: 20,
                textAlign: "center"
              }}
            >
              {smartCat[i]}
            </Text>
          </CardItem>
        </Card>
      );
    }

    return (
      <Container>
        <ImageBackground
          source={blur}
          style={{ width: "100%", height: "100%" }}
        >
          <HeaderBar pageNameProp="About Us" screenNameProp="About Us" />
          <Content>
            <Button
              full
              success
              disabled
              style={{ backgroundColor: "#136c3c" }}
            >
              <Text style={{ fontSize: 24 }}>Who are We?</Text>
            </Button>
            <Text> </Text>
            <Card
              padder
              style={{
                alignSelf: "center",
                backgroundColor: "transparent",
                borderColor: "transparent",
                width: "90%"
              }}
            >
              <CardItem
                style={{
                  backgroundColor: "white",
                  borderColor: "#119a50",
                  borderWidth: 3
                }}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 20,
                    textAlign: "center"
                  }}
                >
                  The only app in Kuwait that simplifies indoor planting.
                </Text>
              </CardItem>
            </Card>
            <Text> </Text>
            <Button
              full
              success
              disabled
              style={{ backgroundColor: "#136c3c" }}
            >
              <Text style={{ fontSize: 24 }}>What is Grow It?</Text>
            </Button>
            <Text> </Text>
            <Card
              padder
              style={{
                alignSelf: "center",
                backgroundColor: "transparent",
                borderColor: "transparent",
                width: "90%"
              }}
            >
              <CardItem
                style={{
                  backgroundColor: "white",
                  borderColor: "#119a50",
                  borderWidth: 3
                }}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 20,
                    textAlign: "center"
                  }}
                >
                  Grow It is a platform created to make indoor planting simple
                  and easy. We aim to simplify the process of growing plants by
                  helping you choose your plant through easy steps, getting it
                  delivered to you very fast within 24 hours and guide you
                  throughout the plant's different stages with our smart plant's
                  tracking feature.
                </Text>
              </CardItem>
            </Card>
            <Text> </Text>
            <Button
              full
              success
              disabled
              style={{ backgroundColor: "#136c3c" }}
            >
              <Text style={{ fontSize: 20 }}>Planting Seems Difficult...</Text>
            </Button>
            <Text> </Text>
            <Card
              padder
              style={{
                alignSelf: "center",
                backgroundColor: "transparent",
                borderColor: "transparent",
                width: "90%"
              }}
            >
              <CardItem
                style={{
                  backgroundColor: "white",
                  borderColor: "#119a50",
                  borderWidth: 3
                }}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 20,
                    textAlign: "center"
                  }}
                >
                  We are here to make it easy! A tracking process embedded in
                  your phone will guide you from when you plant a seed to when
                  the plant matures.
                </Text>
              </CardItem>
            </Card>
            <Text> </Text>
            <Button
              full
              success
              disabled
              style={{ backgroundColor: "#136c3c" }}
            >
              <Text style={{ fontSize: 24 }}>Get Started Today:</Text>
            </Button>
            <Text> </Text>
            <Carousel
              layout={"stack"}
              ref={ref => (this.carouselRef = ref)}
              data={this.SCREENS}
              renderItem={({ item }) => item}
              onSnapToItem={i => this.setState({ activeTab: i })}
              sliderWidth={SCREEN_WIDTH}
              itemWidth={SCREEN_WIDTH}
              slideStyle={{ width: SCREEN_WIDTH }}
              inactiveSlideOpacity={0.3}
              inactiveSlideScale={0.3}
              firstItem={3}
            />
            <Text> </Text>
            <Button
              full
              success
              disabled
              style={{ backgroundColor: "#136c3c" }}
            >
              <Text style={{ fontSize: 24 }}>Why Plant Indoors:</Text>
            </Button>
            <Button
              full
              success
              disabled
              style={{ backgroundColor: "#119a50" }}
            >
              <Text style={{ fontSize: 24 }}>Think Smarter:</Text>
            </Button>
            <Text> </Text>
            <Card
              padder
              style={{
                alignSelf: "center",
                backgroundColor: "transparent",
                borderColor: "transparent",
                width: "90%"
              }}
            >
              <CardItem
                style={{
                  backgroundColor: "white",
                  borderColor: "#119a50",
                  borderWidth: 3
                }}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 20,
                    textAlign: "center"
                  }}
                >
                  Multiple studies confirm that surrounding yourself with plants
                  makes you more productive and helps you think clearly. A few
                  of the benefits are listed below:
                </Text>
              </CardItem>
            </Card>
            <Carousel
              layout={"stack"}
              ref={ref => (this.carouselRef = ref)}
              data={smartViews}
              renderItem={({ item }) => item}
              onSnapToItem={i => this.setState({ activeTab: i })}
              sliderWidth={SCREEN_WIDTH}
              itemWidth={SCREEN_WIDTH}
              inactiveSlideOpacity={0.9}
              inactiveSlideScale={1}
              firstItem={5}
            />
            <Text> </Text>
            <Button
              full
              success
              disabled
              style={{ backgroundColor: "#119a50" }}
            >
              <Text style={{ fontSize: 24 }}>Clears Toxins:</Text>
            </Button>
            <Text> </Text>
            <Card
              padder
              style={{
                alignSelf: "center",
                backgroundColor: "transparent",
                borderColor: "transparent",
                width: "90%"
              }}
            >
              <CardItem
                style={{
                  backgroundColor: "white",
                  borderColor: "#119a50",
                  borderWidth: 3
                }}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 20,
                    textAlign: "center"
                  }}
                >
                  Most of our time is spent indoors, having plants indoors can
                  help clear toxins from the air. Below are some of the risks of
                  indoor air pollution.
                </Text>
              </CardItem>
            </Card>
            <Carousel
              layout={"stack"}
              ref={ref => (this.carouselRef = ref)}
              data={airViews}
              renderItem={({ item }) => item}
              onSnapToItem={i => this.setState({ activeTab: i })}
              sliderWidth={SCREEN_WIDTH}
              itemWidth={SCREEN_WIDTH}
              slideStyle={{ width: SCREEN_WIDTH }}
              inactiveSlideOpacity={0.3}
              inactiveSlideScale={0.3}
              firstItem={3}
            />
            <Text> </Text>
            <Button
              full
              success
              disabled
              style={{ backgroundColor: "#119a50" }}
            >
              <Text style={{ fontSize: 24 }}>Improve Your Health:</Text>
            </Button>
            <Text> </Text>
            <Card
              padder
              style={{
                alignSelf: "center",
                backgroundColor: "transparent",
                borderColor: "transparent",
                width: "90%"
              }}
            >
              <CardItem
                style={{
                  backgroundColor: "white",
                  borderColor: "#119a50",
                  borderWidth: 3
                }}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 20,
                    textAlign: "center"
                  }}
                >
                  Having plants indoors increases air humidity. Dust and dry air
                  can be irritating and can lead to the following:
                </Text>
              </CardItem>
            </Card>
            <Carousel
              layout={"stack"}
              ref={ref => (this.carouselRef = ref)}
              data={humViews}
              renderItem={({ item }) => item}
              onSnapToItem={i => this.setState({ activeTab: i })}
              sliderWidth={SCREEN_WIDTH}
              itemWidth={SCREEN_WIDTH}
              slideStyle={{ width: SCREEN_WIDTH }}
              inactiveSlideOpacity={0.3}
              inactiveSlideScale={0.3}
              firstItem={4}
            />
            <Text> </Text>
            <Button
              full
              success
              disabled
              style={{ backgroundColor: "#119a50" }}
            >
              <Text style={{ fontSize: 24 }}>Improves Your Mood:</Text>
            </Button>
            <Text> </Text>
            <Card
              padder
              style={{
                alignSelf: "center",
                backgroundColor: "transparent",
                borderColor: "transparent",
                width: "90%"
              }}
            >
              <CardItem
                style={{
                  backgroundColor: "white",
                  borderColor: "#119a50",
                  borderWidth: 3
                }}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 20,
                    textAlign: "center"
                  }}
                >
                  Raising plants has shown multiple benefits not only on our
                  life but also the way we interact with others around us:
                </Text>
              </CardItem>
            </Card>
            <Carousel
              layout={"stack"}
              ref={ref => (this.carouselRef = ref)}
              data={moodViews}
              renderItem={({ item }) => item}
              onSnapToItem={i => this.setState({ activeTab: i })}
              sliderWidth={SCREEN_WIDTH}
              itemWidth={SCREEN_WIDTH}
              slideStyle={{ width: SCREEN_WIDTH }}
              inactiveSlideOpacity={0.3}
              inactiveSlideScale={0.3}
              firstItem={5}
            />
            <Text> </Text>
          </Content>
          <FooterBar pageNameProp="About Us" screenNameProp="About Us" />
        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  ww: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: "rgba(255, 255, 255, 0.92)"
  },
  container: {
    flex: 1,
    paddingTop: 40
  },
  tabBar: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff"
  },
  tabsContainer: {
    flexDirection: "row",
    height: 50,
    paddingTop: 0,
    paddingBottom: 0
  }
});
