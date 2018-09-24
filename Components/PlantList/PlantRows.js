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
  Right
} from "native-base";
import { observer } from "mobx-react";
import PlantStore from "../Stores/PlantStore";
import { withNavigation } from "react-navigation";

class PlantRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      quant: 1
    };
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
                <Thumbnail source={{ uri: plant.img }} style={{ height: 90 }} />
              </Left>
              <Right>
                <Text style={{ fontWeight: "bold" }}>{plant.local_name}</Text>
                <Text note style={{ fontSize: 10 }}>
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
                disabled={this.state.quant === 1}
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
                />
              </Button>
            </View>
            <Button full success bordered small rounded>
              <Text note style={{ color: "green" }}>
                Add
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
