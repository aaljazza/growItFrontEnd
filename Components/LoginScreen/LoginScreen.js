import React from "react";
import { View, Text } from "react-native";
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
          <Card>
            <CardItem header>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                Abdulla AlJazzaf
              </Text>
            </CardItem>
            <CardItem bordered>
              <Text note>User Since: 21-Sep-2018</Text>
            </CardItem>
            <CardItem bordered>
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                Previous Orders:
              </Text>
            </CardItem>
            <CardItem bordered>
              <Text note>No Orders</Text>
            </CardItem>
          </Card>

          <Card>
            <CardItem bordered>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Tracked Plants:
              </Text>
            </CardItem>
            <CardItem>
              <Thumbnail
                small
                source={{
                  uri:
                    "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2090330.jpg"
                }}
              />
              <Body>
                <Text note>36 days old</Text>
                <Text style={{ fontSize: 24 }}>Basil</Text>
              </Body>

              <Right style={{}}>
                <Button
                  rounded
                  transparent
                  onPress={() => this.props.navigation.navigate("Statistics")}
                >
                  <Icon
                    active
                    fontsize={15}
                    style={{ color: "green" }}
                    name="menu"
                  />
                  <Icon
                    active
                    fontsize={15}
                    style={{ color: "green" }}
                    name="tree"
                    type="FontAwesome"
                  />
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
        <FooterBar pageNameProp="Login" />
      </Container>
    );
  }
}

export default LoginScreen;
