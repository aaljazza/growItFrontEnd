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
      <Card>
        <CardItem>
          <Button
            transparent
            onPress={() => {
              PlantStore.updateSelectedPlant(plant.id);
              this.props.navigation.navigate("PlantDetail");
            }}
          >
            <Thumbnail source={{ uri: plant.img }} />
          </Button>
          <Body>
            <Text>{plant.local_name}</Text>
            <Text note>{plant.scientific_name}</Text>
            <Text note style={{ fontWeight: "bold" }}>
              {plant.price} K.D.
            </Text>
          </Body>
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
            <Button success bordered small>
              <Text note success>
                Add
              </Text>
            </Button>
          </View>
        </CardItem>
      </Card>
    );
  }
}

export default withNavigation(observer(PlantRow));
