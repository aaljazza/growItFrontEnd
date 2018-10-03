import { decorate, observable, computed, action } from "mobx";
import axios from "axios";
import { StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";
import moment from "moment";

//Import Stores
import plantdabase from "./databases/plantdatabase";
import userdatabase from "./databases/userdatabase";
import accessoriesdatabase from "./databases/accessoriesdatabase";
import AuthStore from "./AuthStore";
// import AuthStore from "./AuthStore";

const instance = axios.create({
  baseURL: "http://142.93.163.231/"
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
    this.trackinghistory = [];
    this.orders = [];
    this.trackingPlant = {};
  }

  // get updateLabels() {
  //   let label = [0];
  //   let dateVal;
  //   if (this.trackingPlant !== 0) {
  //     for (let i = 0; i < this.trackingPlant.plantheight_set.length; i++) {
  //       if (this.trackingPlant.plantheight_set[i].active === true) {
  //         dateVal =
  //           moment().diff(this.trackingPlant.planted_on, "days") -
  //           moment().diff(this.trackingPlant.plantheight_set[i].days, "days");
  //         label.push(dateVal);
  //       }
  //     }
  //   }
  //   return label;
  // }

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

  createHeight(height, track) {
    let data = {
      track: track,
      active: true,
      height: height / 10
    };
    return instance
      .post("/heightcreate/?format=json", data)
      .then(res => res.data)
      .then(res => {
        alert("Height Added");
        this.fetchTrackHistory();
      })
      .catch(err => {
        alert("Error Occured, Try Again Later");
        console.log(err.response);
      });
  }

  addTrackPlant(plantID) {
    let data = {
      active: true,
      plant: plantID,
      user: AuthStore.user.user_id
    };
    return instance
      .post("/track/?format=json", data)
      .then(res => res.data)
      .then(res => {
        this.fetchTrackHistory();
        alert("Tracked Plant Added");
      })
      .catch(err => {
        console.log(err.response);
        alert("An error occured. Try again later.");
      });
  }

  removeTrackPlant(plantID, trackID) {
    let data = {
      plant: plantID,
      active: false,
      user: AuthStore.user.user_id
    };
    return instance
      .put("/trackupdate/" + trackID + "/?format=json", data)
      .then(res => res.data)
      .then(res => {
        this.fetchTrackHistory();
        alert("Tracked Plant Removed");
      })
      .catch(err => {
        console.log(err.response);
        alert("An error occured. Try again later.");
      });
  }

  updatePlantHeight(heightID, height, track) {
    let data = {
      track: track,
      active: false,
      height: height
    };
    return instance
      .put("/heightupdate/" + heightID + "/?format=json", data)
      .then(res => res.data)
      .then(res => {
        this.fetchTrackHistory();
      })
      .catch(err => {
        console.log(err.response);
      });
  }

  fetchOrderHistory() {
    return instance
      .get("/order/" + 1 + "/?format=json")
      .then(res => res.data)
      .then(res => {
        this.orders = res;
      })
      .catch(err => {
        console.log(err.response);
      });
  }

  fetchTrackHistory() {
    return instance
      .get("/tracklist/" + 1 + "/?format=json")
      .then(res => res.data)
      .then(res => {
        this.trackinghistory = res;
        this.fetchOrderHistory();
      })
      .catch(err => {
        console.log(err.response);
      });
  }

  get updatedTrackList() {
    return this.trackinghistory.filter(active => active.active === true);
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
  del_instructions: observable,
  orders: observable,
  trackingPlant: observable,
  trackinghistory: observable,
  updatedTrackList: computed
});
const UserStore = new UsersStore();
export default withNavigation(observer(UserStore));
UserStore.fetchSignedInUser();
