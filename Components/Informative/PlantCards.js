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
import { observer } from "mobx-react";

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
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem bordered style={{ flexDirection: "column" }}>
          <Text style={{ fontWeight: "bold" }}>About this Plant:</Text>
          <Text note>
            Plant information will go here to show which plant is the right one
            for you.
          </Text>
        </CardItem>
        <CardItem bordered style={{ flexDirection: "column" }}>
          <Text style={{ fontWeight: "bold" }}>Inside the Box:</Text>
          <Text note>
            The box will include Seeds, Germination box, Plant Pot, Trowel, and
            Soil.
          </Text>
        </CardItem>
        <CardItem bordered style={{ flexDirection: "row" }}>
          <Button
            transparent
            danger
            disabled={this.state.quant === 1}
            onPress={() => this.setState({ quant: this.state.quant - 1 })}
          >
            <Icon
              name="ios-remove-circle-outline"
              type="Ionicons"
              activeTint="green"
            />
          </Button>
          <Text style={{ fontWeight: "bold" }}> {this.state.quant} </Text>
          <Button
            transparent
            success
            disabled={this.state.quant >= plant.quantity}
            onPress={() => this.setState({ quant: this.state.quant + 1 })}
          >
            <Icon
              name="ios-add-circle-outline"
              type="Ionicons"
              activeTint="green"
            />
          </Button>
          <Button success bordered>
            <Text>Add {this.state.quant} to Cart</Text>
          </Button>
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
        </CardItem>
        <CardItem style={{ flexDirection: "column" }}>
          <Text note style={{ fontWeight: "bold" }}>
            Note:
          </Text>
          <Text note>
            Upon purchase, you will receive instructions to maintain your plant
            from the seed until it is ready to eat. You will also have access to
            the statistics page and reminders inside this app.
          </Text>
        </CardItem>
      </Card>
    );
  }
}

export default observer(PlantCards);
