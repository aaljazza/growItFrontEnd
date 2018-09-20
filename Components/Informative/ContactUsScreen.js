import React from "react";
import { StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right
} from "native-base";
import HeaderBar from "../Header/Header";
import FooterBar from "../Footer/Footer";

export default class ContactUsScreen extends React.Component {
  render() {
    return (
      <Container>
        <HeaderBar pageNameProp="Contact Us" />
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Plant It!</Text>
              </Body>
            </CardItem>
          </Card>
          <Button
            full
            rounded
            dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Plants")}
          >
            <Text>Check out Plants</Text>
          </Button>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text>Login Here</Text>
          </Button>
        </Content>
        <FooterBar pageNameProp="Contact" />
      </Container>
    );
  }
}
