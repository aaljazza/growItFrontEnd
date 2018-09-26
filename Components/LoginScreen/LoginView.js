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
        <Text> </Text>
        <Item
          fixedLabel
          rounded
          style={{
            backgroundColor: "transparent",
            borderWidth: 5
          }}
        >
          <Label style={{ fontWeight: "bold", color: "black" }}>
            {" "}
            Username:
          </Label>
          <Input
            autoCapitalize="none"
            placeholder="..."
            style={{ fontWeight: "bold" }}
          />
        </Item>
        <Item
          rounded
          fixedLabel
          style={{
            backgroundColor: "transparent",
            borderWidth: 5,
            shadowRadius: 20,
            shadowOpacity: 50,
            shadowColor: "white"
          }}
        >
          <Label style={{ fontWeight: "bold", color: "black" }}>
            {" "}
            Password:
          </Label>
          <Input
            secureTextEntry={true}
            placeholder="..."
            style={{ fontWeight: "bold" }}
          />
        </Item>
        <Item style={{ borderColor: "transparent" }}>
          <Text> </Text>
        </Item>
        {this.state.signUp === 0 && (
          <View>
            <Item
              fixedLabel
              rounded
              style={{
                backgroundColor: "transparent",
                borderWidth: 5
              }}
            >
              <Label
                style={{
                  fontWeight: "bold",
                  color: "black"
                }}
              >
                {" "}
                Name:
              </Label>
              <Input placeholder="..." style={{ fontWeight: "bold" }} />
            </Item>
            <Item
              fixedLabel
              rounded
              style={{
                backgroundColor: "transparent",
                borderWidth: 5
              }}
            >
              <Label
                style={{
                  fontWeight: "bold",
                  color: "black"
                }}
              >
                {" "}
                E-Mail:
              </Label>
              <Input
                placeholder="..."
                style={{ fontWeight: "bold" }}
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </Item>
            <Item
              fixedLabel
              rounded
              style={{
                backgroundColor: "transparent",
                borderWidth: 5
              }}
            >
              <Label
                style={{
                  fontWeight: "bold",
                  color: "black"
                }}
              >
                {" "}
                Mob: +965
              </Label>
              <Input
                placeholder="..."
                style={{ fontWeight: "bold" }}
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
              shadowRadius: 20,
              shadowOpacity: 50,
              shadowColor: "black"
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
            shadowRadius: 20,
            shadowOpacity: 50,
            shadowColor: "black"
          }}
          onPress={() => this.setState({ signUp: 0 })}
        >
          <Text
            style={{
              alignSelf: "center",
              fontSize: 20,
              fontWeight: "bold",
              color: "white"
            }}
          >
            Sign Up
          </Text>
        </Button>
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
