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
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

import PlantStore from "../Stores/PlantStore";
import CartStore from "../Stores/CartStore";
import HistoryStore from "../Stores/HistoryStore";

class AccessoriesRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      quant: 1,
      showToast: false
    };
  }

  componentDidUpdate() {
    let accessory = this.props.accessory;
    if (accessory.quantity < this.state.quant) {
      this.setState({ quant: accessory.quantity });
    }
  }

  render() {
    let accessory = this.props.accessory;
    return (
      <Card
        style={{
          width: 150,
          borderRadius: 20,
          shadowOpacity: 50,
          shadowRadius: 3
        }}
      >
        <CardItem style={{ borderRadius: 20 }}>
          <View style={{ flexDirection: "column" }}>
            <View style={{ flexDirection: "row" }}>
              <Left>
                <Button
                  transparent
                  style={{ height: 90 }}
                  onPress={() => {
                    PlantStore.updateSelectedItem(accessory.id);
                    this.props.navigation.navigate("ItemDetail");
                    HistoryStore.changePage("Shop");
                  }}
                >
                  <Thumbnail
                    square
                    source={{ uri: accessory.img }}
                    style={{ height: 90 }}
                  />
                </Button>
              </Left>
              <Right>
                <Text style={{ fontSize: 12 }}>{accessory.name}</Text>
                <Text note style={{ fontWeight: "bold" }}>
                  {accessory.price} K.D.
                </Text>
              </Right>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Button
                transparent
                disabled={this.state.quant <= 1}
                danger
                onPress={() => this.setState({ quant: this.state.quant - 1 })}
              >
                <Icon
                  name="ios-remove-circle-outline"
                  type="Ionicons"
                  activeTint="green"
                />
              </Button>
              <Text style={{ fontWeight: "bold" }}> {this.state.quant} </Text>
              <Button
                transparent
                success
                disabled={
                  this.state.quant >= 4 ||
                  this.state.quant >= accessory.quantity
                }
                onPress={() => this.setState({ quant: this.state.quant + 1 })}
              >
                <Icon
                  name="ios-add-circle-outline"
                  type="Ionicons"
                  activeTint="green"
                />
              </Button>
            </View>
            <Button
              full
              success
              bordered
              small
              rounded
              disabled={
                accessory.quantity <= 0 || accessory.quantity < this.state.quant
              }
              onPress={() => {
                PlantStore.addProductToCart(accessory.id, this.state.quant);
                CartStore.addToCart(accessory.id, this.state.quant);
              }}
              color={accessory.quantity === 0 && "maroon"}
            >
              <Text
                note
                style={
                  accessory.quantity === 0
                    ? { color: "maroon" }
                    : { color: "green" }
                }
              >
                {accessory.quantity === 0 ? "Sold Out" : "Add"}
              </Text>
            </Button>
            <Text style={{ fontSize: 5 }}> </Text>
            <Button
              full
              dark
              bordered
              small
              rounded
              onPress={() => {
                PlantStore.updateSelectedItem(accessory.id);
                this.props.navigation.navigate("ItemDetail");
                HistoryStore.changePage("Shop");
              }}
            >
              <Text>More Info</Text>
            </Button>
          </View>
        </CardItem>
      </Card>
    );
  }
}

export default withNavigation(observer(AccessoriesRow));
