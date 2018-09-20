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
          <Button transparent>
            <Thumbnail source={{ uri: plant.img }} />
          </Button>
          <Body>
            <Text>{plant.local_name}</Text>
            <Text note>{plant.scientific_name}</Text>
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
              <Text note>"Easy"</Text>
            </Body>
            <Body>
              <Text>Toxic:</Text>
              <Text note>No</Text>
            </Body>
            <Body>
              <Text>Size:</Text>
              <Text note>Medium</Text>
            </Body>
          </CardItem>
        )}
        {this.state.open && (
          <CardItem bordered>
            <Body>
              <Text>Theme:</Text>
              <Text note>Modern</Text>
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
