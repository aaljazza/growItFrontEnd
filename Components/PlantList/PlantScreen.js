import React from "react";

import { SafeAreaView, View, ImageBackground } from "react-native";
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
  Left,
  Body,
  Right,
  Picker,
  Segment
} from "native-base";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

// Plant Database
import PlantRow from "./PlantRows";
import HeaderBar from "../Header/Header";
import FooterBar from "../Footer/Footer";
import PlantStore from "../Stores/PlantStore";
import Filters from "./Filters";
import AccessoriesRows from "./AccessoriesRows";
import AccessoryCategories from "./AccessoryCategories";
import CartStore from "../Stores/CartStore";
import HistoryStore from "../Stores/HistoryStore";
import PlantBackground from "../LoginScreen/plantBackground2.png";

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
    AccessoryItems = PlantStore.filteredCategories.map((accessory, index) => (
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
        <ImageBackground
          source={PlantBackground}
          style={{ width: "100%", height: "100%" }}
        >
          <HeaderBar pageNameProp="Shop" screenNameProp="Shop" />
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
                backgroundColor:
                  PlantStore.shopSegment === 0 ? "#119a50" : "white",
                borderColor: "#119a50"
              }}
              onPress={() => PlantStore.changeShopSegment(0)}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 10,
                  color: PlantStore.shopSegment === 0 ? "white" : "#119a50"
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
                backgroundColor:
                  PlantStore.shopSegment === 1 ? "#119a50" : "white",
                borderColor: "#119a50"
              }}
              onPress={() => {
                this.setState({ filter: false });
                PlantStore.changeShopSegment(1);
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 10,
                  color: PlantStore.shopSegment === 1 ? "white" : "#119a50"
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
                    PlantStore.shopSegment === 2 ? "#119a50" : "white",
                  borderColor: "#119a50"
                }}
                onPress={() => {
                  this.setState({ filter: false });
                  PlantStore.changeShopSegment(2);
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 10,
                    color: PlantStore.shopSegment === 2 ? "white" : "#119a50"
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
              rounded
              small
              full
              onPress={() => PlantStore.resetAllFilter()}
              style={{ borderColor: "#136c3c" }}
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
                  onChangeText={inputVal =>
                    PlantStore.plantSearchInput(inputVal)
                  }
                />
                <Text> </Text>
                <Button
                  transparent
                  rounded
                  onPress={() => this.setState({ filter: !this.state.filter })}
                >
                  <Icon
                    name="filter"
                    type="FontAwesome"
                    active={false}
                    style={{ color: "#136c3c" }}
                  />
                </Button>
              </Item>
            </View>
          )}
          {this.state.filter & (this.state.segment === 0) ? (
            <Filters />
          ) : (
            <View />
          )}
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
              {PlantStore.shopSegment === 1 && (
                <View
                  style={{
                    justifyContent: "space-evenly",
                    flexDirection: "row",
                    flexWrap: "wrap"
                  }}
                >
                  {AccessoryItems}
                </View>
              )}
              {PlantStore.shopSegment === 2 && filtAccessory}
            </View>
            <Text> </Text>
            {CartStore.orders.length > 0 && (
              <Button
                success
                full
                rounded
                style={{
                  backgroundColor: "#119a50",
                  shadowOpacity: 0.5,
                  shadowOffset: { width: 0, height: 5 }
                }}
                onPress={() => {
                  this.props.navigation.navigate("Cart");
                  HistoryStore.changePage("Shop");
                }}
              >
                <Text style={{ fontWeight: "bold" }}>VIEW CART</Text>
              </Button>
            )}
          </Content>
          <Button
            full
            disabled
            danger
            style={{ height: 30, backgroundColor: "#136c3c" }}
          >
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>
              Stay Tuned. More items coming soon.
            </Text>
          </Button>
          <FooterBar pageNameProp="Plants" screenNameProp="Shop" />
        </ImageBackground>
      </Container>
    );
  }
}

export default withNavigation(observer(PlantScreen));
