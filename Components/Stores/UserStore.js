import { decorate, observable, computed, action } from "mobx";
import axios from "axios";
import { StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

//Import Stores
import plantdabase from "./databases/plantdatabase";
import userdatabase from "./databases/userdatabase";
import trackinghistory from "./databases/TrackingHistory";
import accessoriesdatabase from "./databases/accessoriesdatabase";
import AuthStore from "./AuthStore";
// import AuthStore from "./AuthStore";

const instance = axios.create({
  baseURL: "http://178.128.205.28/"
});
const serverReady = "Yes";

class UsersStore {
  constructor() {
    this.signedIn = false;
    this.user = {};
    this.phone_number = null;
    this.city = "";
    this.block = null;
    this.street = null;
    this.avenue = null;
    this.house_number = null;
    this.apt_number = null;
    this.del_instructions = "";
  }

  resetProfile() {
    this.user = {};
    this.phone_number = null;
    this.city = "";
    this.block = null;
    this.street = "";
    this.avenue = null;
    this.house_number = null;
    this.apt_number = null;
    this.del_instructions = "";
  }

  updateProfileInitial(inputVal, type) {
    if (type === "phone_number") {
      this.phone_number = inputVal + "";
    } else if (type === "city") {
      this.city = inputVal + "";
    } else if (type === "block") {
      this.block = inputVal + "";
    } else if (type === "street") {
      this.street = inputVal + "";
    } else if (type === "avenue") {
      this.avenue = inputVal + "";
    } else if (type === "house_number") {
      this.house_number = inputVal + "";
    } else if (type === "apt_number") {
      this.apt_number = inputVal + "";
    } else if (type === "del_instructions") {
      this.del_instructions = inputVal + "";
    }
  }

  userSignedIn() {
    if (this.signedIn === false) {
      this.user = AuthStore.user;
    }
    this.signedIn = !this.signedIn;
    // AuthStore.loginUser(usernmane, password, "no");
  }

  registerUser(username, password, email) {
    // AuthStore.registerUser(username, password);
    const userData = {
      username: username,
      password: password,
      email: email
    };
    return instance
      .post("/register/?format=json", userData)
      .then(res => res.data)
      .then(user => {
        console.log("sign up successful");
        AuthStore.loginUser(username, password, "No");
      })
      .catch(err => {
        alert("User Already Exists, try a different username");
        console.log(err.response);
      });
  }

  fetchSignedInUser() {
    if (serverReady === "Yes") {
    } else {
      this.user = userdatabase;
    }
  }

  pushProfile() {}
}
decorate(UsersStore, {
  signedIn: observable,
  user: observable,
  phone_number: observable,
  city: observable,
  block: observable,
  stree: observable,
  avenue: observable,
  house_number: observable,
  apt_number: observable,
  del_instructions: observable
});
const UserStore = new UsersStore();
export default withNavigation(observer(UserStore));
UserStore.fetchSignedInUser();
