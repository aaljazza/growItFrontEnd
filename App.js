import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Dimensions,
  I18nManager,
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
  Root,
  Title,
  Footer,
  FooterTab
} from "native-base";
import {
  createDrawerNavigator,
  DrawerItems,
  DrawerNavigator,
  createStackNavigator
} from "react-navigation";
import { observer } from "mobx-react";

import logo from "./Components/Logo/logoWithText.png";
import PlantBackground from "./Components/LoginScreen/PlantBackground.png";
import PlantBackgroundDark from "./Components/LoginScreen/PlantBackgroundDark.png";
import longPlantHalf from "./Components/Logo/longPlantHalf.png";
import PlantStore from "./Components/Stores/PlantStore";

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
import ItemDetail from "./Components/Detail/ItemDetail";
import StatisticsMain from "./Components/Statistics/StatisticsMain";
import DummySinglePlant from "./Components/Statistics/DummySinglePlant";
import AddressConfirmation from "./Components/Cart/AddressConfirmation";
import FinalOrderConfirmation from "./Components/Cart/FinalOrderConfirmation";
import OrderComplete from "./Components/Cart/OrderComplete";

I18nManager.forceRTL(false);

class App extends React.Component {
  constructor() {
    super();
    this.fadeAnimation = new Animated.Value(0);
    this.state = {
      isReady: false,
      moveOn: false
    };
  }

  changeScreenOrientation() {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
  }

  componentDidMount() {
    this.changeScreenOrientation();
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
              shadowColor: "#119a50"
            }}
          >
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <Animated.View
              style={{
                opacity: this.fadeAnimation
              }}
            >
              <Animated.Image
                style={[{ height: 400 }, { width: 400 }]}
                source={logo}
              />
              <Text
                note
                style={{
                  fontSize: 20,
                  alignSelf: "center",
                  fontStyle: "italic",
                  color: "white",
                  justifyContent: "center",
                  textAlign: "center",
                  width: 280
                }}
              >
                Welcome! Grow It helps you grow your plants.
              </Text>
              <Text> </Text>
              <Button
                bordered
                full
                style={{
                  alignSelf: "center",
                  width: 250,
                  borderColor: "#119a50"
                }}
                onPress={() => {
                  this.setState({ moveOn: true });
                }}
              >
                <Text
                  style={{ fontWeight: "bold", fontSize: 20, color: "#119a50" }}
                >
                  Start Growing!
                </Text>
              </Button>
            </Animated.View>
          </SafeAreaView>
        </ImageBackground>
      );
    }
    return (
      <Root>
        <AppDrawerNavigator />
      </Root>
    );
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
    ItemDetail: {
      screen: ItemDetail,
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
    "Contact Us": {
      screen: ContactUsScreen,
      navigationOptions: { drawerLabel: <Hidden /> }
    },
    "Terms and Conditions": {
      screen: TermsAndConditionsScreen,
      navigationOptions: { drawerLabel: <Hidden /> }
    },
    Cart: CartScreen,
    AddressConfirmation: {
      screen: AddressConfirmation,
      navigationOptions: { drawerLabel: <Hidden /> }
    },
    OrderComplete: {
      screen: OrderComplete,
      navigationOptions: { drawerLabel: <Hidden /> }
    },
    "About Us": {
      screen: AboutUsScreen
    },
    FinalOrderConfirmation: {
      screen: FinalOrderConfirmation,
      navigationOptions: { drawerLabel: <Hidden /> }
    }
  },
  {
    contentComponent: CustomDrawerComponent,
    drawerWidth: 150,
    drawerPosition: "left",
    drawerBackgroundColor: "transparent",
    contentOptions: {
      activeTintColor: "#119a50",
      activeBackgroundColor: "white",
      inactiveBackgroundColor: "#119a50",
      inactiveTintColor: "white"
    }
  }
);

const StackNavigatorApp = createStackNavigator({
  AppDrawerNavigator: {
    screen: AppDrawerNavigator
  }
});

export default App;
