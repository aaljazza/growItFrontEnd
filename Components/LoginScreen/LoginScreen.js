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
        <ImageBackground
          source={PlantBackground}
          style={{ width: "100%", height: "100%" }}
        >
          <HeaderBar pageNameProp="Login Screen" />
          <Content padder>
            <ToggleSwitch
              isOn={UserStore.signedIn}
              onColor="green"
              offColor="red"
              label={
                UserStore.signedIn ? "Click to Sign Out" : "Click to Sign In"
              }
              labelStyle={{ color: "black", fontWeight: "900" }}
              size="medium"
              onToggle={() => UserStore.userSignedIn()}
            />
            {UserStore.signedIn ? <ProfileView /> : <LoginView />}
          </Content>

          <FooterBar pageNameProp="Login" />
        </ImageBackground>
      </Container>
    );
  }
}

export default observer(LoginScreen);
