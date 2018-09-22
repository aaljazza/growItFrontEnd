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

import HomeScreen from "./Components/HomeScreen/HomeScreen";
import LoginScreen from "./Components/LoginScreen/LoginScreen";
import PlantScreen from "./Components/PlantList/PlantScreen";
import StatisticsScreen from "./Components/Statistics/StatisticsScreen";
import OrderHistoryScreeen from "./Components/OrderHistory/OrderHistoryScreen";
import AboutUsScreen from "./Components/Informative/AboutUsScreen";
import ContactUsScreen from "./Components/Informative/ContactUsScreen";
import TermsAndConditionsScreen from "./Components/Informative/TermsAndConditionsScreen";
import CartScreen from "./Components/Cart/CartScreen";

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
                Plant It!
              </Text>
              <Text
                note
                style={{
                  fontSize: 20,
                  alignSelf: "center",
                  fontStyle: "italic"
                }}
              >
                Planting made Easy
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
  <SafeAreaView style={{ flex: 1 }}>
    <Header style={{ height: 150 }}>
      <Image
        style={{ alignSelf: "center", width: 150, height: 150 }}
        source={{
          uri: "https://www-images.christianitytoday.com/images/71940.jpg?w=620"
        }}
      />
    </Header>

    <View
      style={{
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <DrawerItems {...props} />
    </View>

    <Footer>
      <Image
        style={{ alignSelf: "center", width: 150, height: 150 }}
        source={{
          uri:
            "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&h=350"
        }}
      />
    </Footer>
  </SafeAreaView>
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Plants: { screen: PlantScreen },
    "Terms and Conditions": TermsAndConditionsScreen,
    "About Us": AboutUsScreen,
    Home: HomeScreen,
    Statistics: StatisticsScreen,
    Profile: LoginScreen,
    Orders: OrderHistoryScreeen,
    "Contact Us": ContactUsScreen,
    Cart: CartScreen
  },
  {
    contentComponent: CustomDrawerComponent,
    drawerWidth: 150,
    contentOptions: {
      activeTintColor: "green"
    }
  }
);

export default App;
