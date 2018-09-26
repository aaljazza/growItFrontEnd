import { decorate, observable, computed, action } from "mobx";
import axios from "axios";
import { StyleSheet, Text, View } from "react-native";

//Import Stores
import plantdabase from "./databases/plantdatabase";
import userdatabase from "./databases/userdatabase";
import trackinghistory from "./databases/TrackingHistory";
import accessoriesdatabase from "./databases/accessoriesdatabase";

const instance = axios.create({
  baseURL: "http://104.248.43.116"
});
const serverReady = "No";

class UsersStore {
  constructor() {
    this.signedIn = false;
    this.user = [];
  }

  userSignedIn() {
    this.signedIn = !this.signedIn;
  }

  fetchSignedInUser() {
    if (serverReady === "Yes") {
    } else {
      this.user = userdatabase;
    }
  }
}
decorate(UsersStore, {
  signedIn: observable,
  user: observable
});
const UserStore = new UsersStore();
export default UserStore;
UserStore.fetchSignedInUser();
