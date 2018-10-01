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
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

import HeaderBar from "../Header/Header";
import FooterBar from "../Footer/Footer";
import HistoryStore from "../Stores/HistoryStore";

class OrderHistoryScreen extends React.Component {
  render() {
    return (
      <Container>
        <HeaderBar pageNameProp="Orders" screenNameProp="Shop" />
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
            onPress={() => {
              this.props.navigation.navigate("Plants");
              HistoryStore.changePage("Home");
            }}
          >
            <Text>Check out Plants</Text>
          </Button>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => {
              this.props.navigation.navigate("Login");
              HistoryStore.changePage("Home");
            }}
          >
            <Text>Login Here</Text>
          </Button>
        </Content>
        <FooterBar pageNameProp="Orders" screenNameProp="Shop" />
      </Container>
    );
  }
}

export default withNavigation(observer(OrderHistoryScreen));
