import { decorate, observable, computed, action } from "mobx";
import axios from "axios";
import { StyleSheet, Text, View } from "react-native";
import PlantStore from "./PlantStore";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

class CartsStore {
  constructor() {
    this.orders = [];
    this.user = [];
    this.name = "";
    this.email = "";
    this.phone = "";
    this.city = "";
    this.block = "";
    this.street = "";
    this.avenue = "";
    this.house = "";
    this.apartmentNumber = "";
    this.deliveryInstructions = "";
  }

  sendOrder(
    name,
    email,
    phone,
    city,
    block,
    street,
    avenue,
    house,
    apartmentNumber,
    deliveryInstructions
  ) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.city = city;
    this.block = block;
    this.street = street;
    this.avenue = avenue;
    this.house = house;
    this.apartmentNumber = apartmentNumber;
    this.deliveryInstructions = deliveryInstructions;
  }

  fakeInfo() {
    this.name = "Abdulla Al-Jazzaf";
    this.email = "aaljazza@gmail.com";
    this.phone = 97666886 + "";
    this.city = "Ahmadi";
    this.block = 2 + "";
    this.street = 4 + "";
    this.avenue = "";
    this.house = 51 + "";
    this.apartmentNumber = "";
    this.deliveryInstructions = "";
    this.orders = [{ product: 2, quantity: 2 }, { product: 3, quantity: 4 }];
  }
  get quantityCart() {
    let quant = 0;
    if (this.orders.length > 0) {
      for (let i = 0; i < this.orders.length; i++) {
        quant += this.orders[i].quantity;
      }
    }
    return quant;
  }

  addToCart(productID, quantity) {
    let indexVal = this.orders.findIndex(order => order.product === productID);
    if (indexVal < 0) {
      this.orders.push({
        product: productID,
        quantity: quantity
      });
    } else {
      this.orders[indexVal].quantity += quantity;
    }
  }

  removeFromCart(productID, quantity) {
    let indexVal = this.orders.findIndex(order => order.product === productID);
    if (this.orders[indexVal].quantity <= quantity) {
      this.orders.splice(indexVal, 1);
    } else {
      this.orders[indexVal].quantity -= quantity;
    }
  }
  removeItemFromCart(productID) {
    let indexVal = this.orders.findIndex(order => order.product === productID);
    this.orders.splice(indexVal, 1);
  }
  emptyCart() {
    for (let i = 0; i < this.orders.length; i++) {
      PlantStore.removeProductToCart(
        this.orders[i].product,
        this.orders[i].quantity
      );
    }
    this.orders = [];
  }
}
decorate(CartsStore, {
  orders: observable,
  quantityCart: computed,
  name: observable,
  email: observable,
  phone: observable,
  city: observable,
  block: observable,
  street: observable,
  avenue: observable,
  house: observable,
  apartmentNumber: observable,
  deliveryInstructions: observable
});
const CartStore = new CartsStore();

export default withNavigation(observer(CartStore));
