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
      open: false,
      quant: 1
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
            <Text note style={{ fontWeight: "bold" }}>
              {plant.price} K.D.
            </Text>
          </Body>

          <Right style={{ flexDirection: "row" }}>
            <Button
              transparent
              onPress={() => this.setState({ open: !this.state.open })}
            >
              {this.state.open ? <Text>Less</Text> : <Text>More</Text>}
            </Button>
          </Right>
        </CardItem>
        {this.state.open && (
          <View>
            <CardItem bordered>
              <Image
                source={{ uri: plant.img }}
                style={{ width: "100%", height: 200 }}
              />
            </CardItem>
            <CardItem bordered style={{ flexDirection: "column" }}>
              <Text style={{ fontWeight: "bold" }}>About this Plant:</Text>
              <Text note>
                Plant information will go here to show which plant is the right
                one for you.
              </Text>
            </CardItem>
            <CardItem bordered style={{ flexDirection: "column" }}>
              <Text style={{ fontWeight: "bold" }}>Inside the Box:</Text>
              <Text note>
                The box will include Seeds, Germination box, Plant Pot, Trowel,
                and Soil.
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
            <CardItem style={{ flexDirection: "column" }}>
              <Text note style={{ fontWeight: "bold" }}>
                Note:
              </Text>
              <Text note>
                Upon purchase, you will receive instructions to maintain your
                plant from the seed until it is ready to eat. You will also have
                access to the statistics page and reminders inside this app.
              </Text>
            </CardItem>
          </View>
        )}
      </Card>
    );
  }
}

export default PlantRow;
