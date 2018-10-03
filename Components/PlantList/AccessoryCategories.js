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
    if (accessory.category === "Plants") {
      return <Text />;
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
        <CardItem style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
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
        </CardItem>
        <CardItem
          style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
        >
          <View style={{ flexDirection: "column" }}>
            <Button
              success
              transparent
              onPress={() => {
                PlantStore.changeShopSegment(2);
                PlantStore.changeSubSection(accessory.category);
                PlantStore.changeFilterAccessory(accessory.id);
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
