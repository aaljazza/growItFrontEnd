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

class LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      signUp: 1
    };
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
          <Input autoCapitalize="none" placeholder="..." />
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
          <Input secureTextEntry={true} placeholder="..." />
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
                {" "}
                Name:
              </Label>
              <Input placeholder="..." />
            </Item>
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
                {" "}
                E-Mail:
              </Label>
              <Input
                placeholder="..."
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </Item>
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
                {" "}
                Mob: +965
              </Label>
              <Input
                placeholder="..."
                autoCapitalize="none"
                keyboardType="numeric"
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
          >
            <Text
              style={{
                alignSelf: "center",
                fontSize: 20,
                fontWeight: "bold",
                color: "white"
              }}
            >
              Sign In
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
              console.log("activate sign in");
              UserStore.userSignedIn();
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
