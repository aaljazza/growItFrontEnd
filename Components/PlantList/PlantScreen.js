import React from "react";

import { SafeAreaView } from "react-native";
import { Text, Container, Content } from "native-base";

// Plant Database
import plantdatabase from "./plantdatabase";
import PlantRow from "./PlantRows";
import HeaderBar from "../Header/Header";
import FooterBar from "../Footer/Footer";
import PlantStore from "../Stores/PlantStore";

class PlantScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  render() {
    let plantItems;
    plantItems = PlantStore.plants.map((plantItem, index) => (
      <PlantRow key={index} plant={plantItem} />
    ));

    return (
      <Container>
        <HeaderBar pageNameProp="Plants List" />
        <Content padder>{plantItems}</Content>
        <FooterBar pageNameProp="Plants" />
      </Container>
    );
  }
}

export default PlantScreen;
