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
import { MapView } from "expo";

export default class AboutUsScreen extends React.Component {
  render() {
    return (
      <Container>
        <HeaderBar pageNameProp="About Us" />
        <Content padder>
          <Card>
            <CardItem bordered>
              <Body>
                <Text>About Us!</Text>
              </Body>
            </CardItem>
          </Card>

          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          />
        </Content>
        <FooterBar pageNameProp="About" />
      </Container>
    );
  }
}
