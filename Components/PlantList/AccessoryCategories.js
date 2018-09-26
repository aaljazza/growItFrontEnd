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
              source={{
                uri:
                  "https://images.unsplash.com/photo-1531873252757-8c22fa9e7a98?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=02a158a34e8be935b0394a30a1775355&auto=format&fit=crop&w=2233&q=80"
              }}
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
                PlantStore.changeSubSection(accessory);
                PlantStore.changeFilterAccessory(accessory);
              }}
              style={{ flexDirection: "row", justifyContent: "flex-start" }}
            >
              <Text style={{ fontWeight: "bold", color: "green" }}>
                {accessory}
              </Text>
              <Icon name="chevron-right" type="FontAwesome" />
            </Button>
          </View>
        </CardItem>
      </Card>
    );
  }
}

export default observer(AccessoryCategories);
