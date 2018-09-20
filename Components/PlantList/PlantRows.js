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

// Plant Database
import plantdatabase from "./plantdatabase";

class PlantRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  render() {
    let plant = this.props.plant;
    return (
      <Card>
        <CardItem>
          <Button transparent onPress={() => alert("image Zoom")}>
            <Thumbnail source={{ uri: plant.imageURL }} />
          </Button>
          <Body>
            <Text>{plant.localName}</Text>
            <Text note>{plant.scientificName}</Text>
          </Body>

          <Right style={{ flexDirection: "row" }}>
            <Button
              transparent
              onPress={() => this.setState({ open: !this.state.open })}
            >
              {this.state.open ? <Text>Less</Text> : <Text>More</Text>}
            </Button>
            <Button rounded success>
              <Icon active fontsize={2} name="add" />
            </Button>
          </Right>
        </CardItem>
        {this.state.open && (
          <CardItem bordered>
            <Body>
              <Text>Care Level:</Text>
              <Text note>{plant.careLevel === 0 ? "Easy" : "Difficult"}</Text>
            </Body>
            <Body>
              <Text>Toxic:</Text>
              <Text note>{plant.toxic === true ? "Yes" : "No"}</Text>
            </Body>
            <Body>
              <Text>Size:</Text>
              <Text note>{plant.size}</Text>
            </Body>
          </CardItem>
        )}
        {this.state.open && (
          <CardItem bordered>
            <Body>
              <Text>Theme:</Text>
              <Text note>{plant.theme}</Text>
            </Body>
            <Body>
              <Text>Location:</Text>
              <Text note>{plant.location}</Text>
            </Body>
            <Body>
              <Text>Color:</Text>
              <Text note>{plant.color}</Text>
            </Body>
          </CardItem>
        )}
        {this.state.open && (
          <CardItem bordered>
            <Body>
              <Text>Watering:</Text>
              <Text note>Every {plant.wateringFrequency} days</Text>
            </Body>
            <Body>
              <Text>Replotting Frequency:</Text>
              <Text note>Every {plant.fertilizingFrequency} days</Text>
            </Body>
          </CardItem>
        )}
      </Card>
    );
  }
}

export default PlantRow;
