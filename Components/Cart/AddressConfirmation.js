import React from "react";
import { StatusBar, Alert, Image } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  View,
  Body,
  Content,
  Header,
  Label,
  Title,
  Left,
  Icon,
  Right,
  Item,
  Input,
  FooterTab
} from "native-base";
import { observer } from "mobx-react";
import HeaderBar from "../Header/Header";
import FooterBar from "../Footer/Footer";
import CartStore from "../Stores/CartStore";
import CartRow from "./CartRows";
import PlantStore from "../Stores/PlantStore";
import UserStore from "../Stores/UserStore";
import logo from "../Logo/logoWithText.png";

// create a component
class AddressConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      city: "",
      block: "",
      street: "",
      avenue: "",
      house: "",
      apartmentNumber: "",
      deliveryInstructions: ""
    };
  }

  componentDidMount() {
    if (UserStore.signedIn) {
      let user = UserStore.user[0];
      this.setState({
        name: user.name + "",
        email: user.email,
        phone: user.phone + "",
        city: CartStore.city + "",
        block: CartStore.block + "",
        street: CartStore.street + "",
        avenue: CartStore.avenue + "",
        house: CartStore.house + "",
        apartmentNumber: CartStore.apartmentNumber + "",
        deliveryInstructions: CartStore.deliveryInstructions + ""
      });
    }
  }

  updateparameter(inputVal, stateVal) {
    if (stateVal === 0) {
      this.setState({ name: inputVal + "" });
    } else if (stateVal === 1) {
      this.setState({ email: inputVal + "" });
    } else if (stateVal === 2) {
      this.setState({ phone: inputVal + "" });
    } else if (stateVal === 3) {
      this.setState({ city: inputVal + "" });
    } else if (stateVal === 4) {
      this.setState({ block: inputVal + "" });
    } else if (stateVal === 5) {
      this.setState({ street: inputVal + "" });
    } else if (stateVal === 6) {
      this.setState({ avenue: inputVal + "" });
    } else if (stateVal === 7) {
      this.setState({ house: inputVal + "" });
    } else if (stateVal === 8) {
      this.setState({ apartmentNumber: inputVal + "" });
    } else if (stateVal === 9) {
      this.setState({ deliveryInstructions: inputVal + "" });
    }
  }

  checkParameters() {
    if (this.state.name.length < 3) {
      alert("Please write in a valid Name");
    } else if (this.state.phone.length !== 8) {
      alert("Please write in a valid Number");
    } else if (this.state.city.length < 3) {
      alert("Please write in a valid City");
    } else if (this.state.block.length === 0) {
      alert("Please write in a valid Block Number");
    } else if (this.state.street.length === 0) {
      alert("Please write in a street Name/Number");
    } else if (this.state.house.length === 0) {
      alert("Please write in a house number");
    } else {
      CartStore.sendOrder(
        this.state.name,
        this.state.email,
        this.state.phone,
        this.state.city,
        this.state.block,
        this.state.street,
        this.state.avenue,
        this.state.house,
        this.state.apartmentNumber,
        this.state.deliveryInstructions
      );
      this.props.navigation.navigate("FinalOrderConfirmation");
    }
  }

  render() {
    return (
      <Container>
        <HeaderBar pageNameProp="User Details" />
        <Button
          full
          disabled
          style={{ flexWrap: "wrap" }}
          style={{ backgroundColor: "#119a50" }}
        >
          <Text>Please confirm the Delivery Information Below:</Text>
        </Button>
        <Content>
          <View padder>
            <Item>
              <Icon active name="ios-person" type="Ionicons" />
              <Input
                placeholder="Name"
                value={this.state.name}
                style={{ alignSelf: "center" }}
                onChangeText={inputVal => this.updateparameter(inputVal, 0)}
              />
            </Item>
            <Item>
              <Icon active name="email" type="Zocial" />
              <Input
                placeholder="Email"
                value={this.state.email}
                onChangeText={inputVal => this.updateparameter(inputVal, 1)}
                keyboardType="email-address"
              />
            </Item>
            <Item last>
              <Icon active name="phone" type="FontAwesome" />
              <Input
                placeholder="Phone Number"
                value={this.state.phone}
                onChangeText={inputVal => this.updateparameter(inputVal, 2)}
                keyboardType="number-pad"
              />
            </Item>
          </View>
          <Button full style={{ flexWrap: "wrap" }}>
            <Text>Please confirm the Delivery Information Below:</Text>
          </Button>
          <View padder>
            <Item disabled>
              <Input disabled placeholder="Country = Kuwait" />
              <Button
                transparent
                onPress={() =>
                  alert(
                    "Unfortunately we are only delivering inside Kuwait at this time."
                  )
                }
              >
                <Icon name="information-circle" />
              </Button>
            </Item>
            <Item floatingLabel>
              <Label>City</Label>
              <Input
                value={this.state.city}
                onChangeText={inputVal => this.updateparameter(inputVal, 3)}
              />
            </Item>
            <Item floatingLabel>
              <Label>Block</Label>
              <Input
                value={this.state.block}
                onChangeText={inputVal => this.updateparameter(inputVal, 4)}
                keyboardType="number-pad"
              />
            </Item>
            <Item floatingLabel>
              <Label>Street</Label>
              <Input
                value={this.state.street}
                onChangeText={inputVal => this.updateparameter(inputVal, 5)}
              />
            </Item>
            <Item floatingLabel>
              <Label>Avenue/Jaddah (Optional)</Label>
              <Input
                value={this.state.avenue}
                onChangeText={inputVal => this.updateparameter(inputVal, 6)}
              />
            </Item>
            <Item floatingLabel>
              <Label>House Number</Label>
              <Input
                value={this.state.house}
                onChangeText={inputVal => this.updateparameter(inputVal, 7)}
                keyboardType="number-pad"
              />
            </Item>
            <Item floatingLabel>
              <Label>Apartment Number (Optional)</Label>
              <Input
                value={this.state.apartmentNumber}
                onChangeText={inputVal => this.updateparameter(inputVal, 8)}
                keyboardType="number-pad"
              />
            </Item>
          </View>
          <Button full style={{ flexWrap: "wrap" }}>
            <Text>Please confirm the Delivery Information Below:</Text>
          </Button>
          <View padder>
            <Item last>
              <Icon
                active
                name="truck-delivery"
                type="MaterialCommunityIcons"
              />
              <Input
                placeholder="Delivery Instructions"
                value={this.state.deliveryInstructions}
                onChangeText={inputVal => this.updateparameter(inputVal, 9)}
              />
            </Item>
          </View>
          <Button
            success
            bordered
            full
            rounded
            style={{ borderColor: "#119a50" }}
            onPress={() => this.checkParameters()}
          >
            <Text
              style={{ color: "#119a50", fontWeight: "bold", fontSize: 30 }}
            >
              {" "}
              Save Details{" "}
            </Text>
          </Button>
          <Image source={logo} style={{ width: 400, height: 400 }} />
        </Content>
        <FooterBar pageNameProp="User Details" />
      </Container>
    );
  }
}

//make this component available to the app
export default observer(AddressConfirmation);
