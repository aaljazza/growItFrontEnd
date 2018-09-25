import React from "react";

import { View, ListView, SafeAreaView, Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Thumbnail,
  Text,
  SwipeRow,
  Card,
  CardItem,
  Left,
  Body,
  Badge,
  Right
} from "native-base";

class AccessoriesRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      quant: 1
    };
  }
  render() {
    let accessory = this.props.accessory;
    return (
      <Card>
        <CardItem bordered>
          <Left>
            <Thumbnail source={{ uri: accessory.img }} />
          </Left>
          <Body>
            <Text>{accessory.name}</Text>
            <Text note style={{ fontWeight: "bold" }}>
              {accessory.price} K.D.
            </Text>
          </Body>
          <Right style={{ flexDirection: "row" }}>
            <Button
              transparent
              onPress={() => this.setState({ open: !this.state.open })}
            >
              <Text>{this.state.open ? "Less" : "More"}</Text>
            </Button>
          </Right>
        </CardItem>
        {this.state.open === true && (
          <View>
            <CardItem bordered>
              <Image
                source={{ uri: accessory.img }}
                style={{ width: "100%", height: 200 }}
              />
            </CardItem>
            <CardItem>
              <Text style={{ fontWeight: "bold" }}>Description:</Text>
            </CardItem>
            <CardItem bordered>
              <Text note>{accessory.description}</Text>
            </CardItem>
            <CardItem bordered style={{ flexDirection: "row" }}>
              <Button
                transparent
                danger
                disabled={this.state.quant === 1}
                onPress={() => this.setState({ quant: this.state.quant - 1 })}
              >
                <Icon
                  name="ios-remove-circle-outline"
                  type="Ionicons"
                  activeTint="#119a50"
                />
              </Button>
              <Text style={{ fontWeight: "bold" }}> {this.state.quant} </Text>
              <Button
                transparent
                success
                color={"#119a50"}
                disabled={this.state.quant >= accessory.quantity}
                onPress={() => this.setState({ quant: this.state.quant + 1 })}
              >
                <Icon
                  name="ios-add-circle-outline"
                  type="Ionicons"
                  activeTint="#119a50"
                />
              </Button>
              <Button success bordered color={"#119a50"}>
                <Text>
                  Add {this.state.quant}{" "}
                  {this.state.quant > 1 ? "items" : "item"} to Cart
                </Text>
              </Button>
            </CardItem>
          </View>
        )}
      </Card>
    );
  }
}

export default AccessoriesRow;
