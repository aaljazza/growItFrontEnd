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
    this.singlePlantProduct = null;
    this.careFilter = "";
    this.lightingFilter = "";
    this.sizeFilter = "";
    this.petFilter = "";
    this.plantSearch = "";
    this.accessorySearch = "";
    this.shopSegment = 1;
    this.subSection = "";
    this.accessoryFilter = "Soil";
  }
  resetAllFilter() {
    this.careFilter = "";
    this.lightingFilter = "";
    this.sizeFilter = "";
    this.petFilter = "";
  }

  changeShopSegment(inputVal) {
    this.shopSegment = +inputVal;
  }

  updateStats(trackID) {
    this.trackID = trackID;
  }
  updateSelectedPlant(plantID) {
    this.singlePlantProduct = plantID;
  }
  changeFilterCare(inputVal) {
    this.careFilter = inputVal;
  }
  changeFilterlighting(inputVal) {
    this.lightingFilter = inputVal;
  }
  changeFilterSize(inputVal) {
    this.sizeFilter = inputVal;
  }
  changeFilterPet(inputVal) {
    this.petFilter = inputVal;
  }
  plantSearchInput(inputVal) {
    this.plantSearch = inputVal.toLowerCase();
    this.accessorySearch = inputVal.toLowerCase();
  }
  changeFilterAccessory(inputVal) {
    this.accessoryFilter = inputVal;
  }
  changeSubSection(inputVal) {
    this.subSection = inputVal;
  }

  get selectedPlant() {
    return this.plants.filter(plant => +plant.id === this.singlePlantProduct);
  }

  get filteredAccessory() {
    return this.accessories.filter(
      accessory => accessory.type === this.accessoryFilter
    );
  }

  get filteredMultiplePlants() {
    if (this.plantSearch === "") {
      return this.plants;
    }
    return this.plants.filter(plant =>
      `${plant.local_name} ${plant.scientific_name}`
        .toLowerCase()
        .includes(this.plantSearch)
    );
  }
  get filteredMultipleAccessory() {
    if (this.accessorySearch === "") {
      return this.accessories;
    }
    return this.accessories.filter(accessory =>
      `${accessory.name}`.toLowerCase().includes(this.accessorySearch)
    );
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
  trackedPlants: observable,
  careFilter: observable,
  lightingFilter: observable,
  sizeFilter: observable,
  petFilter: observable,
  plantSearch: observable,
  selectedPlant: computed,
  filteredMultiplePlants: computed,
  accessorySearch: observable,
  filteredMultipleAccessory: computed,
  shopSegment: observable,
  accessoryFilter: observable,
  filteredAccessory: computed
});
const PlantStore = new PlantsStore();
PlantStore.fetchPlants();
export default PlantStore;
