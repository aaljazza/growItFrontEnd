import React from "react";

import { View, ListView, SafeAreaView, Image, Alert } from "react-native";
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
import UserStore from "../Stores/UserStore";

class HeightRow extends React.Component {
  removeItemAlert(heightID, heightDate, height, track) {
    Alert.alert(`Delete Record on ${heightDate}`, "", [
      {
        text: "Yes, Delete",
        onPress: () => {
          alert("deleted");
          UserStore.updatePlantHeight(heightID, height, track);
        }
      },
      {
        text: "No, Leave it",
        onPress: () => console.log("canceled")
      }
    ]);
  }
  render() {
    let height = this.props.height;
    if (height.active === false) {
      return <View />;
    }
    return (
      <CardItem>
        <Text>
          {height.days}: {height.height} cm
        </Text>
        <Button
          transparent
          danger
          onPress={() =>
            this.removeItemAlert(
              height.id,
              height.days,
              height.height,
              height.track
            )
          }
        >
          <Icon name="ios-remove-circle" type="Ionicons" active />
        </Button>
      </CardItem>
    );
  }
}

export default withNavigation(observer(HeightRow));
