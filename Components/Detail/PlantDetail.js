import React from "react";

import { View, ListView, SafeAreaView, Image, Dimensions } from "react-native";
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
import { withNavigation } from "react-navigation";

import PlantStore from "../Stores/PlantStore";
import CartStore from "../Stores/CartStore";
import HeaderBar from "../Header/Header";
import FooterBar from "../Footer/Footer";
import HistoryStore from "../Stores/HistoryStore";
import packagePic from "./packageNoLamp.png";

const SCREEN_WIDTH = Dimensions.get("window").width;

class PlantDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      quant: 1,
      orderOpen: false
    };
  }
  componentDidUpdate() {
    let plant = PlantStore.selectedPlant[0];
    if (plant.quantity < this.state.quant) {
      this.setState({ quant: plant.quantity });
    }
  }
  render() {
    let plant = PlantStore.selectedPlant[0];
    return (
      <Container>
        <HeaderBar pageNameProp={plant.name} screenNameProp="PlantDetail" />
        <Content>
          <Card
            style={{
              alignSelf: "center",
              shadowOpacity: 0.3,
              shadowRadius: 20,
              shadowOffset: { width: 20, height: 20 },
              borderRadius: 20
            }}
          >
            <CardItem>
              <Body>
                <Text>{plant.name}</Text>
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
              <Text note>{plant.description}</Text>
            </CardItem>
            <CardItem bordered style={{ flexDirection: "row" }}>
              <Button
                transparent
                danger
                disabled={this.state.quant <= 1}
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
                disabled={
                  this.state.quant >= plant.quantity || this.state.quant >= 4
                }
                onPress={() => this.setState({ quant: this.state.quant + 1 })}
              >
                <Icon
                  name="ios-add-circle-outline"
                  type="Ionicons"
                  activeTint="green"
                />
              </Button>
              <Button
                success
                bordered
                disabled={
                  plant.quantity <= 0 || plant.quantity < this.state.quant
                }
                onPress={() => {
                  PlantStore.addProductToCart(plant.id, this.state.quant);
                  CartStore.addToCart(plant.id, this.state.quant);
                  this.props.navigation.navigate("Shop");
                  HistoryStore.changePage("PlantDetail");
                }}
              >
                {plant.quantity <= 0 ? (
                  <Text>Sold Out</Text>
                ) : (
                  <Text>Add {this.state.quant} to Cart</Text>
                )}
              </Button>
            </CardItem>
          </Card>
          <Card
            style={{
              alignSelf: "center",
              shadowOpacity: 0.3,
              shadowRadius: 20,
              shadowOffset: { width: 20, height: 20 },
              borderRadius: 20
            }}
          >
            <CardItem bordered style={{ flexDirection: "column" }}>
              <Text style={{ fontWeight: "bold" }}>Inside the Box:</Text>
              <Text note>
                The box will include Seeds, Germination box, Full Size Pot, and
                sufficient soil for the life of the plant.
              </Text>
            </CardItem>
            <CardItem bordered>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Details Inside the Box:
              </Text>
              <Right>
                <Button
                  transparent
                  onPress={() =>
                    this.setState({ orderOpen: !this.state.orderOpen })
                  }
                >
                  {this.state.orderOpen ? (
                    <Icon
                      type="Entypo"
                      name="chevron-up"
                      style={{ fontSize: 25, color: "#119a50" }}
                    />
                  ) : (
                    <Icon
                      type="Entypo"
                      name="chevron-down"
                      style={{ fontSize: 25, color: "#119a50" }}
                    />
                  )}
                </Button>
              </Right>
            </CardItem>
            {this.state.orderOpen && (
              <View>
                <CardItem
                  bordered
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Image
                    source={packagePic}
                    style={{ width: SCREEN_WIDTH - 100, maxHeight: 50 }}
                  />
                </CardItem>
                <CardItem bordered>
                  <Text note>Plant Seeds sufficient for multiple pots.</Text>
                </CardItem>
                <CardItem bordered>
                  <Text note>
                    Reusable nursery which can handle 9 at a single time.
                  </Text>
                </CardItem>
                <CardItem bordered>
                  <Text note>
                    A suitable pot for the selected plant which will cover the
                    life of the plant.
                  </Text>
                </CardItem>
                <CardItem bordered>
                  <Text note>
                    Sufficeint amount of soil for the life of the plant with
                    pre-mixed perlite to help the plants grow stronger.
                  </Text>
                </CardItem>
                <CardItem bordered>
                  <Text note>
                    A tracking code for the plant to get real-time statistics
                    for your plant through this app.
                  </Text>
                </CardItem>
              </View>
            )}
          </Card>
          <Card
            style={{
              alignSelf: "center",
              shadowOpacity: 0.3,
              shadowRadius: 20,
              shadowOffset: { width: 20, height: 20 },
              borderRadius: 20
            }}
          >
            <CardItem bordered>
              <Body>
                <Text>Care Level:</Text>
                <Text note>{plant.care_level}</Text>
              </Body>
              <Body>
                <Text>Pet Friendly:</Text>
                <Text note>{plant.pet_friendly ? "Yes" : "No"}</Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>Size:</Text>
                <Text note>{plant.size}</Text>
              </Body>
              <Body>
                <Text>Color:</Text>
                <Text note>{plant.color}</Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>Watering:</Text>
                <Text note>Every {plant.watering_frequency} days</Text>
              </Body>
              <Body>
                <Text>Ready to Eat:</Text>
                <Text note>
                  About {plant.stage_1day + plant.stage_2day + plant.stage_3day}{" "}
                  days
                </Text>
              </Body>
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
          </Card>
        </Content>
        <FooterBar pageNameProp="About Us" screenNameProp="PlantDetail" />
      </Container>
    );
  }
}

export default withNavigation(observer(PlantDetail));
