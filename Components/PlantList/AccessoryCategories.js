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
import PlantStore from "../Stores/PlantStore";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

import lightImage from "./categoryImages/light.jpg";
import potImage from "./categoryImages/pots.jpg";
import seedImage from "./categoryImages/seeds.jpg";
import soilImage from "./categoryImages/soil.jpg";
import sprayImage from "./categoryImages/sprays.jpg";
import toolImage from "./categoryImages/tools.jpg";

class AccessoryCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      quant: 1
    };
  }
  render() {
    let accessory = this.props.accessory;
    let list = ["Soil", "Pots", "Sprays", "Tools", "Lights", "Seeds"];
    let catImage;
    if (accessory.category === "Soil") {
      catImage = soilImage;
    } else if (accessory.category === "Pots") {
      catImage = potImage;
    } else if (accessory.category === "Sprays") {
      catImage = sprayImage;
    } else if (accessory.category === "Tools") {
      catImage = toolImage;
    } else if (accessory.category === "Lights") {
      catImage = lightImage;
    } else {
      catImage = seedImage;
    }
    if (accessory.category === "Plant") {
      return <View />;
    }

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
            <Image
              source={{ uri: accessory.img }}
              style={{
                width: 120,
                height: 100,
                alignSelf: "center",
                borderRadius: 20
              }}
              resizeMode="cover"
            />
            <Button
              success
              transparent
              onPress={() => {
                PlantStore.changeShopSegment(2);
                PlantStore.changeSubSection(accessory.category);
                PlantStore.changeFilterAccessory(accessory.category);
              }}
              style={{ flexDirection: "row", justifyContent: "flex-start" }}
            >
              <Text style={{ fontWeight: "bold", color: "green" }}>
                {accessory.category}
              </Text>
              <Icon name="chevron-right" type="FontAwesome" />
            </Button>
          </View>
        </CardItem>
      </Card>
    );
  }
}

export default withNavigation(observer(AccessoryCategories));
