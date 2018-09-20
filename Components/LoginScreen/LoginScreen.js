import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator } from "react-navigation";
import { Container, Content } from "native-base";

//Bars
import HeaderBar from "../Header/Header";
import FooterBar from "../Footer/Footer";

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <HeaderBar pageNameProp="Login Screen" />
        <Content padder>
          <Text>This is my Login Screen</Text>
          <Button
            title="Go Back!"
            onPress={() => this.props.navigation.navigate("Home")}
          />
        </Content>
        <FooterBar pageNameProp="Login" />
      </Container>
    );
  }
}

export default LoginScreen;
