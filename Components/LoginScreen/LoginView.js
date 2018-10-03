import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Image,
  ImageBackground,
  Alert
} from "react-native";
import { createStackNavigator } from "react-navigation";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Icon,
  Form,
  Input,
  Item,
  Label,
  Button,
  Thumbnail,
  Left,
  Right
} from "native-base";
import UserStore from "../Stores/UserStore";
import AuthStore from "../Stores/AuthStore";

class LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      signUp: 1
    };
  }

  registerUser() {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(this.state.email) == true) {
      UserStore.registerUser(
        this.state.username.toLowerCase(),
        this.state.password,
        this.state.email
      );
    } else {
      alert("Please insert a valid email");
    }
  }

  onClickListener = viewId => {
    Alert.alert("Alert", "Button pressed " + viewId);
  };

  render() {
    return (
      <View>
        <Text> </Text>
        <Item
          fixedLabel
          style={{
            backgroundColor: "transparent",
            borderWidth: 5
          }}
        >
          <Label style={{ color: "black" }}> Username:</Label>
          <Input
            autoCapitalize="none"
            placeholder="..."
            style={{ fontWeight: "bold" }}
            onChangeText={inputVal => this.setState({ username: inputVal })}
          />
        </Item>
        <Item
          fixedLabel
          style={{
            backgroundColor: "transparent",
            borderWidth: 5,
            shadowRadius: 20,
            shadowOpacity: 50,
            shadowColor: "white"
          }}
        >
          <Label style={{ color: "black" }}> Password:</Label>
          <Input
            autoCapitalize="none"
            secureTextEntry={true}
            style={{ fontWeight: "bold" }}
            placeholder="..."
            onChangeText={inputVal => this.setState({ password: inputVal })}
          />
        </Item>
        <Item style={{ borderColor: "transparent" }}>
          <Text> </Text>
        </Item>
        {this.state.signUp === 0 && (
          <View>
            <Item
              fixedLabel
              style={{
                backgroundColor: "transparent",
                borderWidth: 5
              }}
            >
              <Label
                style={{
                  color: "black"
                }}
              >
                E-Mail:
              </Label>
              <Input
                placeholder="..."
                autoCapitalize="none"
                style={{ fontWeight: "bold" }}
                keyboardType="email-address"
                value={this.state.email}
                onChangeText={inputVal => this.setState({ email: inputVal })}
              />
            </Item>
            <Item style={{ borderColor: "transparent" }}>
              <Text> </Text>
            </Item>
          </View>
        )}
        {this.state.signUp === 1 && (
          <Button
            success
            full
            rounded
            style={{
              backgroundColor: "#119a50",
              shadowOpacity: 0.5,
              shadowOffset: { width: 0, height: 5 }
            }}
            onPress={() => {
              AuthStore.loginUser(
                this.state.username.toLowerCase(),
                this.state.password,
                "No"
              );
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                fontSize: 20,
                fontWeight: "bold",
                color: "white"
              }}
            >
              SIGN IN
            </Text>
          </Button>
        )}
        <Item style={{ borderColor: "transparent" }}>
          <Text> </Text>
        </Item>
        <Button
          success
          full
          rounded
          style={{
            shadowOpacity: 0.5,
            shadowOffset: { width: 0, height: 5 },
            backgroundColor: "#136c3c"
          }}
          onPress={() => {
            if (this.state.signUp === 1) {
              this.setState({ signUp: 0 });
            } else {
              if (this.state.password.length < 8) {
                alert("Password is Too Short");
              } else if (this.state.username.length < 4) {
                alert("Username is Too Short");
              } else {
                this.registerUser();
              }
            }
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              fontSize: 20,
              fontWeight: "bold",
              color: "white"
            }}
          >
            {this.state.signUp === 1 ? "SIGN UP" : "REGISTER"}
          </Text>
        </Button>
      </View>
    );
  }
}

export default withNavigation(observer(LoginView));

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  }
});
