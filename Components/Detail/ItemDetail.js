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
import PlantStore from "../Stores/PlantStore";
import CartStore from "../Stores/CartStore";
import HeaderBar from "../Header/Header";
import FooterBar from "../Footer/Footer";
import { withNavigation } from "react-navigation";
import HistoryStore from "../Stores/HistoryStore";

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      quant: 1
    };
  }
  componentDidUpdate() {
    let item = PlantStore.selectedItem[0];
    if (item.quantity < this.state.quant) {
      this.setState({ quant: item.quantity });
    }
  }
  render() {
    let item = PlantStore.selectedItem[0];
    return (
      <Container>
        <HeaderBar pageNameProp={item.name} screenNameProp="ItemDetail" />
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
            <CardItem bordered>
              <Body>
                <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Image
                source={{ uri: item.img }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem bordered style={{ flexDirection: "column" }}>
              <Text style={{ fontWeight: "bold" }}>About this Item:</Text>
              <Text>{item.description}</Text>
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
                  this.state.quant >= item.quantity || this.state.quant >= 4
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
                  item.quantity <= 0 || item.quantity < this.state.quant
                }
                onPress={() => {
                  PlantStore.addProductToCart(item.id, this.state.quant);
                  CartStore.addToCart(item.id, this.state.quant);
                  this.props.navigation.navigate("Shop");
                  HistoryStore.changePage("ItemDetail");
                }}
              >
                {item.quantity <= 0 ? (
                  <Text>Sold Out</Text>
                ) : (
                  <Text>Add {this.state.quant} to Cart</Text>
                )}
              </Button>
            </CardItem>
          </Card>
        </Content>
        <FooterBar pageNameProp="Item" screenNameProp="ItemDetail" />
      </Container>
    );
  }
}

export default withNavigation(observer(ItemDetail));
