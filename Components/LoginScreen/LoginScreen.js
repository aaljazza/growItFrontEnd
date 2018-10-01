import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { createStackNavigator } from "react-navigation";
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Icon,
  Button,
  Thumbnail,
  Left,
  Right
} from "native-base";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

//Bars
import HeaderBar from "../Header/Header";
import FooterBar from "../Footer/Footer";

//Views
import LoginView from "./LoginView";
import ProfileView from "./ProfileView";

//Others
import ToggleSwitch from "toggle-switch-react-native";
import PlantBackground from "./PlantBackgroundBlur.png";
import UserStore from "../Stores/UserStore";
import AuthStore from "../Stores/AuthStore";

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: UserStore.signedIn
    };
  }

  render() {
    return (
      <Container>
        <HeaderBar
          pageNameProp={UserStore.signedIn ? "Profile" : "Login"}
          screenNameProp="Profile"
        />
        <Content padder>
          {UserStore.signedIn ? <ProfileView /> : <LoginView />}
        </Content>

        <FooterBar pageNameProp="Login" screenNameProp="Profile" />
      </Container>
    );
  }
}

export default withNavigation(observer(LoginScreen));
