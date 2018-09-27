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
  Toast,
  Left,
  Body,
  Right
} from "native-base";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

import PlantStore from "../Stores/PlantStore";
import CartStore from "../Stores/CartStore";

class PlantRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      quant: 1,
      showToast: false
    };
  }

  componentDidUpdate() {
    let plant = this.props.plant;
    if (plant.quantity < this.state.quant) {
      this.setState({ quant: plant.quantity });
    }
  }

  render() {
    let plant = this.props.plant;
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
                    PlantStore.updateSelectedPlant(plant.id);
                    this.props.navigation.navigate("PlantDetail");
                  }}
                >
                  <Thumbnail
                    source={{ uri: plant.img }}
                    style={{ height: 90 }}
                  />
                </Button>
              </Left>
              <Right>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 12,
                    alignSelf: "center"
                  }}
                >
                  {plant.name}
                </Text>
                <Text note style={{ fontSize: 10, alignSelf: "center" }}>
                  {plant.scientific_name}
                </Text>
                <Text note style={{ fontWeight: "bold" }}>
                  {plant.price} K.D.
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
                danger
                disabled={this.state.quant <= 1}
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
                  this.state.quant >= plant.quantity || this.state.quant >= 4
                }
                onPress={() => this.setState({ quant: this.state.quant + 1 })}
              >
                <Icon
                  name="ios-add-circle-outline"
                  type="Ionicons"
                  activeTint="green"
                  style={{ color: "#119a50" }}
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
                plant.quantity <= 0 || plant.quantity < this.state.quant
              }
              onPress={() => {
                PlantStore.addProductToCart(plant.id, this.state.quant);
                CartStore.addToCart(plant.id, this.state.quant);
              }}
              color={plant.quantity === 0 && "maroon"}
            >
              <Text
                note
                style={
                  plant.quantity === 0
                    ? { color: "maroon" }
                    : { color: "green" }
                }
              >
                {plant.quantity === 0 ? "Limited Quantity" : "Add"}
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
                PlantStore.updateSelectedPlant(plant.id);
                this.props.navigation.navigate("PlantDetail");
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

export default withNavigation(observer(PlantRow));
