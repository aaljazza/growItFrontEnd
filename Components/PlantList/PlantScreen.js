import React from "react";

import { SafeAreaView, View } from "react-native";
import {
  Text,
  Container,
  Content,
  Item,
  Icon,
  Input,
  Button,
  Badge,
  Form,
  Picker,
  Segment
} from "native-base";
import { observer } from "mobx-react";

// Plant Database
import PlantRow from "./PlantRows";
import HeaderBar from "../Header/Header";
import FooterBar from "../Footer/Footer";
import PlantStore from "../Stores/PlantStore";
import Filters from "./Filters";
import AccessoriesRows from "./AccessoriesRows";
import AccessoryCategories from "./AccessoryCategories";

class PlantScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      filter: false,
      segment: PlantStore.shopSegment
    };
  }
  render() {
    let plantItems;
    plantItems = PlantStore.filteredMultiplePlants.map((plantItem, index) => (
      <PlantRow key={index} plant={plantItem} />
    ));
    let AccessoryItems;
    let list = ["Soil", "Pots", "Sprays", "Tools", "Lights", "Seeds"];
    AccessoryItems = list.map((accessory, index) => (
      <AccessoryCategories key={index} accessory={accessory} />
    ));
    filtAccessory = PlantStore.filteredAccessory.map((accessory, index) => (
      <AccessoriesRows key={index} accessory={accessory} />
    ));
    let filter = null;
    if (
      PlantStore.careFilter !== "" ||
      PlantStore.lightingFilter !== "" ||
      PlantStore.petFilter !== "" ||
      PlantStore.sizeFilter !== ""
    ) {
      if (PlantStore.shopSegment === 0) {
        filter = 1;
      }
    }
    return (
      <Container>
        <HeaderBar pageNameProp="Plants List" />
        <Segment
          style={{
            justifyContent: "center",
            backgroundColor: "white"
          }}
        >
          <Button
            active={PlantStore.shopSegment === 0}
            first
            style={{
              width: 100,
              justifyContent: "center",
              backgroundColor: PlantStore.shopSegment === 0 ? "green" : "white",
              borderColor: "green"
            }}
            onPress={() => PlantStore.changeShopSegment(0)}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 10,
                color: PlantStore.shopSegment === 0 ? "white" : "green"
              }}
            >
              Packages
            </Text>
          </Button>
          <Button
            active={PlantStore.shopSegment === 1}
            last={this.state.subSection === ""}
            style={{
              width: 100,
              justifyContent: "center",
              backgroundColor: PlantStore.shopSegment === 1 ? "green" : "white",
              borderColor: "green"
            }}
            onPress={() => PlantStore.changeShopSegment(1)}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 10,
                color: PlantStore.shopSegment === 1 ? "white" : "green"
              }}
            >
              Full Shop
            </Text>
          </Button>
          {PlantStore.subSection !== "" && (
            <Button
              last
              active={PlantStore.shopSegment === 2}
              style={{
                width: 100,
                justifyContent: "center",
                backgroundColor:
                  PlantStore.shopSegment === 2 ? "green" : "white",
                borderColor: "green"
              }}
              onPress={() => PlantStore.changeShopSegment(2)}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 10,
                  color: PlantStore.shopSegment === 2 ? "white" : "green"
                }}
              >
                {PlantStore.subSection}
              </Text>
            </Button>
          )}
        </Segment>
        {filter === 1 && (
          <Button
            danger
            outline
            small
            full
            onPress={() => PlantStore.resetAllFilter()}
          >
            <Text style={{ fontWeight: "bold" }}>Clear Filters</Text>
          </Button>
        )}
        {PlantStore.shopSegment === 0 && (
          <View>
            <Item rounded>
              <Text> </Text>
              <Icon name="ios-search" />
              <Input
                placeholder="Search"
                value={PlantStore.plantSearch}
                onChangeText={inputVal => PlantStore.plantSearchInput(inputVal)}
              />
              <Button
                transparent
                success
                rounded
                onPress={() => this.setState({ filter: !this.state.filter })}
              >
                <Icon name="filter" type="FontAwesome" active={false} />
              </Button>
              <Text> </Text>
            </Item>
          </View>
        )}
        {!this.state.filter ? <View /> : <Filters />}
        <Content padder>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-evenly"
            }}
          >
            {PlantStore.shopSegment === 0 && plantItems}
            {PlantStore.shopSegment === 1 && AccessoryItems}
          </View>
          {PlantStore.shopSegment === 2 && filtAccessory}
        </Content>
        <FooterBar pageNameProp="Plants" />
      </Container>
    );
  }
}

export default observer(PlantScreen);
