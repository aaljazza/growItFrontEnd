//import liraries
import React from "react";
import { StatusBar, Alert, Animated, Image } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  View,
  Body,
  Content,
  Header,
  Label,
  Title,
  Left,
  Icon,
  Right,
  Item,
  Input,
  FooterTab
} from "native-base";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";
import HeaderBar from "../Header/Header";
import FooterBar from "../Footer/Footer";
import CartStore from "../Stores/CartStore";
import CartRow from "./CartRows";
import PlantStore from "../Stores/PlantStore";
import UserStore from "../Stores/UserStore";
import OrderRows from "./OrderRows";
import logo from "../Logo/logoWithText.png";

// create a component
class OrderComplete extends React.Component {
  constructor() {
    super();
    this.fadeAnimation = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.fadeAnimation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true
    }).start();
  }

  render() {
    return (
      <Container>
        <HeaderBar pageNameProp="Confirm Order" />
        <Button full disabled success style={{ backgroundColor: "#119a50" }}>
          <Text>Your Order Has Been Submitted:</Text>
        </Button>
        <Content>
          <Animated.View
            style={{
              opacity: this.fadeAnimation
            }}
          >
            <View padder>
              <Card>
                <CardItem>
                  <Text
                    style={{
                      fontSize: 24,
                      alignSelf: "center",
                      alignContent: "center"
                    }}
                  >
                    Thank you for shopping with Grow It.
                  </Text>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Text style={{ fontSize: 20 }}>
                    Our team will contact you to ensure delivery within 24
                    hours.
                  </Text>
                </CardItem>
              </Card>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Animated.Image
                style={[{ height: 200 }, { width: 200 }]}
                source={logo}
              />
            </View>
            <Text> </Text>
            <Button
              full
              success
              bordered
              style={{ borderColor: "#119a50" }}
              onPress={() => this.props.navigation.navigate("Shop")}
            >
              <Text style={{ color: "#119a50", fontWeight: "bold" }}>
                Continue Shopping
              </Text>
            </Button>
            <Text> </Text>
            <Button
              full
              success
              bordered
              style={{ borderColor: "#119a50" }}
              onPress={() => this.props.navigation.navigate("Profile")}
            >
              <Text style={{ color: "#119a50", fontWeight: "bold" }}>
                Go to My Profile
              </Text>
            </Button>
          </Animated.View>
        </Content>
        <FooterBar pageNameProp="Confirm Order" />
      </Container>
    );
  }
}

export default withNavigation(observer(OrderComplete));
