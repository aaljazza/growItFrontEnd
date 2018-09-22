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
        <Form>
          <Item>
            <Text
              style={{
                alignSelf: "center",
                fontSize: 0,
                fontWeight: "bold",
                color: "white"
              }}
            >
              {" "}
            </Text>
          </Item>
          <Item
            fixedLabel
            rounded
            style={{
              backgroundColor: "#e9ffe8"
            }}
          >
            <Label> Username:</Label>
            <Input autoCapitalize="none" placeholder="username" />
          </Item>
          <Item
            fixedLabel
            last
            rounded
            style={{
              backgroundColor: "#e9ffe8",
              shadowOpacity: 90,
              shadowOffset: { width: 2, height: 2 }
            }}
          >
            <Label> Password:</Label>
            <Input secureTextEntry={true} placeholder="password" />
          </Item>
          <Item>
            <Text> </Text>
          </Item>
          {this.state.signUp === 0 && (
            <View>
              <Item
                fixedLabel
                last
                rounded
                style={{
                  backgroundColor: "#e9ffe8",
                  shadowOpacity: 90,
                  shadowOffset: { width: 2, height: 2 }
                }}
              >
                <Text> </Text>
                <Label> Name:</Label>
                <Input autoCapitalize="none" placeholder="name" />
              </Item>
              <Item
                fixedLabel
                last
                rounded
                style={{
                  backgroundColor: "#e9ffe8",
                  shadowOpacity: 90,
                  shadowOffset: { width: 2, height: 2 }
                }}
              >
                <Text> </Text>
                <Label> Email:</Label>
                <Input autoCapitalize="none" placeholder="email" />
              </Item>
              <Item
                fixedLabel
                last
                rounded
                style={{
                  backgroundColor: "#e9ffe8",
                  shadowOpacity: 90,
                  shadowOffset: { width: 2, height: 2 }
                }}
              >
                <Text> </Text>
                <Label> Phone:</Label>
                <Input
                  autoCapitalize="none"
                  placeholder="number"
                  keyboardType="numeric"
                />
              </Item>
              <Item>
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
                backgroundColor: "#047200",
                shadowOpacity: 90,
                shadowOffset: { width: 2, height: 2 }
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
          <Item>
            <Text> </Text>
          </Item>
          <Button
            success
            full
            rounded
            style={{
              backgroundColor: "#1bd114",
              shadowOpacity: 90,
              shadowOffset: { width: 2, height: 2 }
            }}
            onPress={() => this.setState({ signUp: 0 })}
          >
            <Text
              style={{
                alignSelf: "center",
                fontSize: 20,
                fontWeight: "bold",
                color: "black"
              }}
            >
              Sign Up
            </Text>
          </Button>
        </Form>
      </View>
    );
  }
}

export default LoginView;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  }
});
