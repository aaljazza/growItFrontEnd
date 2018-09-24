import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Dimensions,
  Animated,
  ImageBackground,
  SafeAreaView
} from "react-native";
import {
  Button,
  Text,
  Thumbnail,
  Header,
  Container,
  Content,
  Left,
  Body,
  Right,
  Icon,
  Title,
  Footer,
  FooterTab
} from "native-base";
import {
  createDrawerNavigator,
  DrawerItems,
  DrawerNavigator
} from "react-navigation";
import { withNavigation } from "react-navigation";

import logo from "./Components/Logo/logo.png";
import PlantBackground from "./Components/LoginScreen/PlantBackground.png";
import PlantBackgroundDark from "./Components/LoginScreen/PlantBackgroundDark.png";
import longPlantHalf from "./Components/Logo/longPlantHalf.png";

import HomeScreen from "./Components/HomeScreen/HomeScreen";
import LoginScreen from "./Components/LoginScreen/LoginScreen";
import PlantScreen from "./Components/PlantList/PlantScreen";
import StatisticsScreen from "./Components/Statistics/StatisticsScreen";
import OrderHistoryScreeen from "./Components/OrderHistory/OrderHistoryScreen";
import AboutUsScreen from "./Components/Informative/AboutUsScreen";
import ContactUsScreen from "./Components/Informative/ContactUsScreen";
import TermsAndConditionsScreen from "./Components/Informative/TermsAndConditionsScreen";
import CartScreen from "./Components/Cart/CartScreen";
import PlantDetail from "./Components/Detail/PlantDetail";
import StatisticsMain from "./Components/Statistics/StatisticsMain";
import DummySinglePlant from "./Components/Statistics/DummySinglePlant";

class App extends React.Component {
  constructor() {
    super();
    this.fadeAnimation = new Animated.Value(0);
    this.state = {
      isReady: false,
      moveOn: false
    };
  }

  componentDidMount() {
    Animated.timing(this.fadeAnimation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true
    }).start();
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    if (!this.state.moveOn) {
      return (
        <ImageBackground
          source={PlantBackgroundDark}
          style={{ width: "100%", height: "100%" }}
        >
          <SafeAreaView
            style={{
              alignSelf: "center",
              shadowOpacity: 0.3,
              shadowRadius: 20,
              shadowOffset: { width: 20, height: 20 }
            }}
          >
            <Animated.View
              style={{
                opacity: this.fadeAnimation
              }}
            >
              <Text
                style={{
                  fontSize: 35
                }}
              >
                {" "}
              </Text>
              <Text
                style={{
                  fontSize: 35,
                  fontWeight: "bold",
                  alignSelf: "center",
                  color: "green"
                }}
              >
                Grow It!
              </Text>
              <Text
                note
                style={{
                  fontSize: 20,
                  alignSelf: "center",
                  fontStyle: "italic"
                }}
              >
                Grow to Eat... It's That Easy!
              </Text>
              <Animated.Image
                style={[{ height: 400 }, { width: 400 }]}
                source={logo}
              />
              <Button
                bordered
                success
                full
                style={{ alignSelf: "center", width: 250 }}
                onPress={() => this.setState({ moveOn: true })}
              >
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  Start Planting!
                </Text>
              </Button>
              <Text> </Text>
              <Button
                bordered
                success
                full
                style={{ alignSelf: "center", width: 250 }}
                onPress={() => this.setState({ moveOn: true })}
              >
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  ابدأ بالزراعة
                </Text>
              </Button>
            </Animated.View>
          </SafeAreaView>
        </ImageBackground>
      );
    }
    return <AppDrawerNavigator />;
  }
}

const CustomDrawerComponent = props => (
  <SafeAreaView
    style={{ flex: 1, flexDirection: "column", justifyContent: "flex-end" }}
  >
    <ImageBackground
      source={longPlantHalf}
      style={{ width: "100%", height: "100%" }}
      res
    >
      <View>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
      </View>
      <View
        style={{
          alignItems: "stretch",
          justifyContent: "flex-end",
          flexDirection: "column",
          opacity: 0.7
        }}
      >
        <DrawerItems {...props} />
      </View>
    </ImageBackground>
  </SafeAreaView>
);
class Hidden extends React.Component {
  render() {
    return null;
  }
}
const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: { drawerLabel: <Hidden /> }
    },
    Shop: { screen: PlantScreen },
    PlantDetail: {
      screen: PlantDetail,
      navigationOptions: { drawerLabel: <Hidden /> }
    },
    Statistics: { screen: StatisticsMain },
    Dummy: {
      screen: DummySinglePlant,
      navigationOptions: { drawerLabel: <Hidden /> }
    },
    StatisticsPlot: {
      screen: StatisticsScreen,
      navigationOptions: {
        drawerLabel: <Hidden />
      }
    },
    Profile: LoginScreen,
    "About Us": {
      screen: AboutUsScreen,
      navigationOptions: { drawerLabel: <Hidden /> }
    },
    "Contact Us": {
      screen: ContactUsScreen,
      navigationOptions: { drawerLabel: <Hidden /> }
    },
    "Terms and Conditions": {
      screen: TermsAndConditionsScreen,
      navigationOptions: { drawerLabel: <Hidden /> }
    },
    Cart: CartScreen
  },
  {
    contentComponent: CustomDrawerComponent,
    drawerWidth: 150,
    drawerPosition: "left",
    drawerBackgroundColor: "transparent",
    contentOptions: {
      activeTintColor: "white",
      activeBackgroundColor: "black",
      inactiveBackgroundColor: "green",
      inactiveTintColor: "white"
    }
  }
);

export default App;
