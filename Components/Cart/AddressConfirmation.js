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
import { withNavigation } from "react-navigation";

import HeaderBar from "../Header/Header";
import FooterBar from "../Footer/Footer";
import CartStore from "../Stores/CartStore";
import CartRow from "./CartRows";
import PlantStore from "../Stores/PlantStore";
import UserStore from "../Stores/UserStore";
import logo from "../Logo/logoWithText.png";
import AuthStore from "../Stores/AuthStore";
import HistoryStore from "../Stores/HistoryStore";

// create a component
class AddressConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: UserStore.user.username,
      email: UserStore.user.email,
      phone: null,
      city: "",
      block: null,
      street: "",
      avenue: null,
      house: null,
      apartmentNumber: "",
      deliveryInstructions: ""
    };
  }

  componentDidMount() {
    if (UserStore.signedIn) {
      let user = AuthStore.user;
      this.setState({
        name: user.username,
        email: user.email,
        phone: UserStore.phone,
        city: UserStore.city,
        block: UserStore.block,
        street: UserStore.street,
        avenue: UserStore.avenue,
        house: UserStore.house_number,
        apartmentNumber: UserStore.apt_number,
        deliveryInstructions: UserStore.del_instructions
      });
    }
  }

  updateparameter(inputVal, stateVal) {
    if (stateVal === 0) {
      this.setState({ name: inputVal + "" });
    } else if (stateVal === 1) {
      this.setState({ email: inputVal + "" });
    } else if (stateVal === 2) {
      this.setState({ phone: inputVal });
    } else if (stateVal === 3) {
      this.setState({ city: inputVal + "" });
    } else if (stateVal === 4) {
      this.setState({ block: inputVal });
    } else if (stateVal === 5) {
      this.setState({ street: inputVal + "" });
    } else if (stateVal === 6) {
      this.setState({ avenue: inputVal });
    } else if (stateVal === 7) {
      this.setState({ house: inputVal });
    } else if (stateVal === 8) {
      this.setState({ apartmentNumber: inputVal + "" });
    } else if (stateVal === 9) {
      this.setState({ deliveryInstructions: inputVal + "" });
    }
  }

  checkParameters() {
    if (this.state.phone === null || isNaN(this.state.phone)) {
      alert("Please write in a valid Number");
    } else if (this.state.city.length < 3) {
      alert("Please write in a valid City");
    } else if (this.state.block === null || isNaN(this.state.block)) {
      alert("Please write in a valid Block Number");
    } else if (this.state.street.length < 1) {
      alert("Please write in a street Name/Number");
    } else if (this.state.house === null || isNaN(this.state.house)) {
      alert("Please write in a house number");
    } else if (isNaN(this.state.avenue)) {
      alert("Please write in a valid Avenue Number");
    } else {
      AuthStore.updateProfileInformation();
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
      HistoryStore.changePage("AddressConfirmation");
    }
  }

  render() {
    let submitCheck;
    if (
      this.state.phone === null ||
      isNaN(this.state.phone) ||
      this.state.phone < 10000000 ||
      this.state.phone > 99999999
    ) {
      submitCheck = "Update Phone Number";
    } else if (this.state.city.length < 3) {
      submitCheck = "Update City Name";
    } else if (this.state.block === null || isNaN(this.state.block)) {
      submitCheck = "Update Block Number";
    } else if (this.state.street.length < 1) {
      submitCheck = "Update Street";
    } else if (this.state.house === null || isNaN(this.state.house)) {
      submitCheck = "Update House Number";
    } else if (this.state.house === null || isNaN(this.state.house)) {
      submitCheck = "Update House Number";
    } else {
      submitCheck = "Submit";
    }

    let saveDetailButton;
    if (submitCheck === "Submit") {
      saveDetailButton = (
        <Button
          success
          full
          rounded
          style={{
            backgroundColor: "#119a50",
            shadowOpacity: 0.5,
            shadowOffset: { width: 0, height: 5 }
          }}
          onPress={() => this.checkParameters()}
        >
          <Text style={{ fontWeight: "bold" }}> {submitCheck}</Text>
        </Button>
      );
    } else {
      saveDetailButton = (
        <Button
          danger
          bordered
          full
          rounded
          onPress={() => this.checkParameters()}
        >
          <Text style={{ fontWeight: "bold" }}> {submitCheck}</Text>
        </Button>
      );
    }

    return (
      <Container>
        <HeaderBar
          pageNameProp="User Details"
          screenNameProp="AddressConfirmation"
        />
        <View padder>{saveDetailButton}</View>
        <Content>
          <Button
            full
            disabled
            style={{ flexWrap: "wrap" }}
            style={{ backgroundColor: "#136c3c" }}
          >
            <Text>User Information:</Text>
          </Button>
          <View padder>
            <Item>
              <Icon active name="ios-person" type="Ionicons" />
              <Input
                placeholder="Name"
                disabled
                value={this.state.name}
                style={{ alignSelf: "center" }}
                onChangeText={inputVal => this.updateparameter(inputVal, 0)}
              />
            </Item>
            <Item>
              <Icon active name="email" type="Zocial" />
              <Input
                placeholder="Email"
                disabled
                value={this.state.email}
                onChangeText={inputVal => this.updateparameter(inputVal, 1)}
                keyboardType="email-address"
              />
            </Item>
            <Item last>
              <Icon active name="phone" type="FontAwesome" />
              <Input
                placeholder="Phone Number"
                value={UserStore.phone_number}
                onChangeText={inputVal => {
                  UserStore.updateProfileInitial(inputVal, "phone_number");
                  this.updateparameter(inputVal, 2);
                }}
                keyboardType="number-pad"
              />
            </Item>
          </View>
          <Button
            full
            disabled
            style={{ flexWrap: "wrap", backgroundColor: "#136c3c" }}
          >
            <Text>Delivery Information:</Text>
          </Button>
          <View padder>
            <Item disabled>
              <Input disabled placeholder="Country = Kuwait" />
              <Button
                transparent
                style={{ borderColor: "#119a50" }}
                onPress={() =>
                  alert(
                    "Unfortunately we are only delivering inside Kuwait at this time."
                  )
                }
              >
                <Icon name="information-circle" style={{ color: "#119a50" }} />
              </Button>
            </Item>
            <Item stackedLabel>
              <Label>City</Label>
              <Input
                value={UserStore.city}
                onChangeText={inputVal => {
                  UserStore.updateProfileInitial(inputVal, "city");
                  this.updateparameter(inputVal, 3);
                }}
              />
            </Item>
            <Item stackedLabel>
              <Label>Block</Label>
              <Input
                value={UserStore.block}
                onChangeText={inputVal => {
                  UserStore.updateProfileInitial(inputVal, "block");
                  this.updateparameter(inputVal, 4);
                }}
                keyboardType="number-pad"
              />
            </Item>
            <Item stackedLabel>
              <Label>Street</Label>
              <Input
                value={UserStore.street}
                onChangeText={inputVal => {
                  UserStore.updateProfileInitial(inputVal, "street");
                  this.updateparameter(inputVal, 5);
                }}
              />
            </Item>
            <Item stackedLabel>
              <Label>Avenue/Jaddah (Optional)</Label>
              <Input
                value={UserStore.avenue}
                onChangeText={inputVal => {
                  UserStore.updateProfileInitial(inputVal, "avenue");
                  this.updateparameter(inputVal, 6);
                }}
              />
            </Item>
            <Item stackedLabel>
              <Label>House Number</Label>
              <Input
                value={UserStore.house_number}
                onChangeText={inputVal => {
                  UserStore.updateProfileInitial(inputVal, "house_number");
                  this.updateparameter(inputVal, 7);
                }}
                keyboardType="number-pad"
              />
            </Item>
            <Item stackedLabel>
              <Label>Apartment Number (Optional)</Label>
              <Input
                value={UserStore.apt_number}
                onChangeText={inputVal => {
                  UserStore.updateProfileInitial(inputVal, "apt_number");
                  this.updateparameter(inputVal, 8);
                }}
                keyboardType="number-pad"
              />
            </Item>
            <Item last>
              <Icon
                active
                name="truck-delivery"
                type="MaterialCommunityIcons"
              />
              <Input
                placeholder="Delivery Instructions"
                value={UserStore.del_instructions}
                onChangeText={inputVal => {
                  UserStore.updateProfileInitial(inputVal, "del_instructions");
                  this.updateparameter(inputVal, 9);
                }}
              />
            </Item>
          </View>
          <Image source={logo} style={{ width: 400, height: 400 }} />
        </Content>
        <FooterBar
          pageNameProp="User Details"
          screenNameProp="AddressConfirmation"
        />
      </Container>
    );
  }
}

//make this component available to the app
export default withNavigation(observer(AddressConfirmation));
