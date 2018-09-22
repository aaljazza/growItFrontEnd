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
let serverReady = "No";

class PlantsStore {
  constructor() {
    this.plants = [];
    this.trackedPlants = [];
    this.accessories = [];
    this.typeFilter = null;
    this.currentUser = [];
    this.selectedTrackPlant = 0;
    this.trackID = null;
  }

  updateStats(trackID) {
    this.trackID = trackID;
  }

  fetchPlants() {
    if (serverReady === "Yes") {
      return instance
        .get("/plantslist/?format=json")
        .then(res => res.data)
        .then(plant => (this.plants = plant))
        .catch(err => console.error(err));
    } else {
      this.plants = plantdabase;
      this.currentUser = userdatabase;
      this.trackedPlants = trackinghistory;
      this.accessories = accessoriesdatabase;
    }
  }
}

decorate(PlantsStore, {
  plants: observable,
  typeFilter: observable,
  accessories: observable,
  currentUser: observable,
  selectedTrackPlant: observable,
  trackID: observable,
  trackedPlants: observable
});
const PlantStore = new PlantsStore();
PlantStore.fetchPlants();
export default PlantStore;
