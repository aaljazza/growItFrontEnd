import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Dimensions,
  SafeAreaView
} from "react-native";
import {
  Button,
  Text,
  Thumbnail,
  Header,
  Container,
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

import HomeScreen from "./Components/HomeScreen/HomeScreen";
import LoginScreen from "./Components/LoginScreen/LoginScreen";
import PlantScreen from "./Components/PlantList/PlantScreen";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
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
    return <AppDrawerNavigator />;
  }
}

const CustomDrawerComponent = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{
        height: 150,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
      }}
    />
    <ScrollView style={{ alignSelf: "center" }}>
      <Image
        style={{ alignSelf: "center", width: 150, height: 150 }}
        source={{
          uri:
            "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&h=350"
        }}
      />
      <DrawerItems {...props} />
      <Button
        outline
        success
        style={{ alignSelf: "center" }}
        onPress={() => this.props.navigation.navigate("Home")}
      >
        <Text>Log In Here</Text>
      </Button>
    </ScrollView>
  </SafeAreaView>
);

const HomeScreenRouter = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Login: { screen: LoginScreen },
    Plants: { screen: PlantScreen }
  },
  {
    contentComponent: props => <AppDrawerNavigator {...props} />
  }
);
const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Plants: { screen: PlantScreen },

    Login: LoginScreen
  },
  {
    contentComponent: CustomDrawerComponent,
    drawerWidth: 150,
    contentOptions: {
      activeTintColor: "orange"
    }
  }
);

export default App;
