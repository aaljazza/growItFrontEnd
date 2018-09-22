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

class PlantCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }
  render() {
    let plant = this.props.plant;
    return (
      <Card
        style={{
          alignSelf: "center",
          shadowOpacity: 0.3,
          shadowRadius: 20,
          shadowOffset: { width: 20, height: 20 },
          width: 300,
          borderRadius: 20
        }}
      >
        <CardItem>
          <Body>
            <Text>{plant.local_name}</Text>
            <Text note>{plant.scientific_name}</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Image
            source={{ uri: plant.img }}
            style={{ height: 300, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>Care Level:</Text>
            <Text note>{plant.careLevel}</Text>
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
        <CardItem bordered>
          <Body>
            <Text>Watering:</Text>
            <Text note>Every {plant.wateringFrequency} days</Text>
          </Body>
          <Body>
            <Text>Ready to Eat:</Text>
            <Text note>
              About {plant.stage1day + plant.stage2day + plant.stage3day} days
            </Text>
          </Body>
          <Right>
            <Button rounded success>
              <Icon active fontsize={2} name="add" />
            </Button>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

export default PlantCards;
