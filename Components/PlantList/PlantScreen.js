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

class PlantScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      filter: false,
      segment: 0
    };
  }
  render() {
    let plantItems;
    plantItems = PlantStore.filteredMultiplePlants.map((plantItem, index) => (
      <PlantRow key={index} plant={plantItem} />
    ));
    let AccessoryItems;
    AccessoryItems = PlantStore.filteredMultipleAccessory.map(
      (accessory, index) => (
        <AccessoriesRows key={index} accessory={accessory} />
      )
    );
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
            active={this.state.segment === 0}
            first
            style={{
              width: 150,
              justifyContent: "center",
              backgroundColor: this.state.segment === 0 ? "green" : "white",
              borderColor: "green"
            }}
            onPress={() => this.setState({ segment: 0 })}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: this.state.segment === 0 ? "white" : "green"
              }}
            >
              Plants
            </Text>
          </Button>
          <Button
            last
            active={this.state.segment === 1}
            style={{
              width: 150,
              justifyContent: "center",
              backgroundColor: this.state.segment === 1 ? "green" : "white",
              borderColor: "green"
            }}
            onPress={() => this.setState({ segment: 1 })}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: this.state.segment === 1 ? "white" : "green"
              }}
            >
              Accessories
            </Text>
          </Button>
        </Segment>
        <Item rounded>
          <Text> </Text>
          <Icon name="ios-search" />
          <Input
            placeholder="Search"
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
        <View
          style={{
            flexWrap: "wrap",
            justifyContent: "space-around",
            flexDirection: "row"
          }}
        >
          {PlantStore.careFilter === "" ? (
            <View />
          ) : (
            <Button transparent onPress={() => PlantStore.changeFilterCare("")}>
              <Badge
                style={{ backgroundColor: "maroon", flexDirection: "row" }}
              >
                <Text>Care: {PlantStore.careFilter}</Text>
                <Icon style={{ fontSize: 20 }} name="x" type="Octicons" />
              </Badge>
            </Button>
          )}
          {PlantStore.lightingFilter === "" ? (
            <View />
          ) : (
            <Button
              transparent
              onPress={() => PlantStore.changeFilterlighting("")}
            >
              <Badge
                style={{ backgroundColor: "maroon", flexDirection: "row" }}
              >
                <Text>Light: {PlantStore.lightingFilter}</Text>
                <Icon style={{ fontSize: 20 }} name="x" type="Octicons" />
              </Badge>
            </Button>
          )}
          {PlantStore.sizeFilter === "" ? (
            <View />
          ) : (
            <Button transparent onPress={() => PlantStore.changeFilterSize("")}>
              <Badge
                style={{ backgroundColor: "maroon", flexDirection: "row" }}
              >
                <Text>Size: {PlantStore.sizeFilter}</Text>
                <Icon style={{ fontSize: 20 }} name="x" type="Octicons" />
              </Badge>
            </Button>
          )}
          {PlantStore.petFilter === "" ? (
            <View />
          ) : (
            <Button transparent onPress={() => PlantStore.changeFilterPet("")}>
              <Badge
                style={{ backgroundColor: "maroon", flexDirection: "row" }}
              >
                <Text>Pet/Kids: {PlantStore.petFilter}</Text>
                <Icon style={{ fontSize: 20 }} name="x" type="Octicons" />
              </Badge>
            </Button>
          )}
          {PlantStore.themeFilter === "" ? (
            <View />
          ) : (
            <Button
              transparent
              onPress={() => PlantStore.changeFilterTheme("")}
            >
              <Badge
                style={{ backgroundColor: "maroon", flexDirection: "row" }}
              >
                <Text>Theme: {PlantStore.themeFilter}</Text>
                <Icon style={{ fontSize: 20 }} name="x" type="Octicons" />
              </Badge>
            </Button>
          )}
        </View>
        {!this.state.filter ? <View /> : <Filters />}
        <Content padder>
          {this.state.segment === 0 ? plantItems : AccessoryItems}
        </Content>
        <FooterBar pageNameProp="Plants" />
      </Container>
    );
  }
}

export default observer(PlantScreen);
