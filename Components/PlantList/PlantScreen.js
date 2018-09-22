import React from "react";

import { SafeAreaView } from "react-native";
import {
  Text,
  Container,
  Content,
  Item,
  Icon,
  Input,
  Button,
  Form,
  Picker,
  Segment
} from "native-base";

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
    plantItems = PlantStore.plants.map((plantItem, index) => (
      <PlantRow key={index} plant={plantItem} />
    ));
    let AccessoryItems;
    AccessoryItems = PlantStore.accessories.map((accessory, index) => (
      <AccessoriesRows key={index} accessory={accessory} />
    ));

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
        {this.state.segment === 0 && (
          <Item rounded>
            <Text> </Text>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
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
        )}

        {this.state.filter && <Filters />}

        <Content padder>
          {this.state.segment === 0 ? plantItems : AccessoryItems}
        </Content>
        <FooterBar pageNameProp="Plants" />
      </Container>
    );
  }
}

export default PlantScreen;
