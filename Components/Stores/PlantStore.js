import { decorate, observable, computed, action } from "mobx";
import axios from "axios";
import { StyleSheet, Text, View } from "react-native";
import { Toast } from "native-base";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

//Import Stores
import plantdabase from "./databases/plantdatabase";
import userdatabase from "./databases/userdatabase";
import trackinghistory from "./databases/TrackingHistory";
import accessoriesdatabase from "./databases/accessoriesdatabase";
import AuthStore from "./AuthStore";

let instance = axios.create({
  baseURL: "http://178.128.205.28/"
});
let serverReady = "Yes";

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
    this.singleItemProduct = null;
    this.careFilter = "";
    this.lightingFilter = "";
    this.sizeFilter = "";
    this.petFilter = "";
    this.plantSearch = "";
    this.accessorySearch = "";
    this.shopSegment = 0;
    this.subSection = "";
    this.accessoryFilter = "Soil";
    this.categories = [];
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
  updateSelectedItem(itemID) {
    this.singleItemProduct = itemID;
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
  addProductToCart(productID, quantity) {
    let indexVal = this.plants.findIndex(plant => plant.id === productID);
    if (indexVal >= 0) {
      this.plants[indexVal].quantity -= quantity;
      Toast.show({
        text: `Added ${quantity} ${this.plants[indexVal].name} to Cart`,
        buttonText: "x",
        duration: 1500,
        type: "success",
        style: {
          backgroundColor: "#119a50"
        }
      });
    } else {
      indexVal = this.accessories.findIndex(item => item.id === productID);
      this.accessories[indexVal].quantity -= quantity;
      Toast.show({
        text: `Added ${quantity} ${this.accessories[indexVal].name} to Cart`,
        buttonText: "x",
        duration: 1500,
        type: "success",
        style: {
          backgroundColor: "#119a50"
        }
      });
    }
  }
  removeProductToCart(productID, quantity) {
    let indexVal = this.plants.findIndex(plant => plant.id === productID);
    if (indexVal >= 0) {
      this.plants[indexVal].quantity += quantity;
    } else {
      indexVal = this.accessories.findIndex(item => item.id === productID);
      this.accessories[indexVal].quantity += quantity;
    }
  }

  updateAccessoryQuantity() {
    for (let j = 0; j < this.accessories.length; j++) {
      if (this.accessories[j].quantity > 4) {
        this.accessories[j].quantity = 4;
      }
      if (this.accessories[j].category === 2) {
        this.accessories[j].category = "Soil";
      }
      if (this.accessories[j].category === 3) {
        this.accessories[j].category = "Pots";
      }
      if (this.accessories[j].category === 5) {
        this.accessories[j].category = "Sprays";
      }
      if (this.accessories[j].category === 6) {
        this.accessories[j].category = "Tools";
      }
      if (this.accessories[j].category === 7) {
        this.accessories[j].category = "Lights";
      }
    }
  }

  updatePlantQuantity() {
    for (let i = 0; i < this.plants.length; i++) {
      if (this.plants[i].quantity > 4) {
        this.plants[i].quantity = 4;
      }
    }
  }

  get selectedPlant() {
    return this.plants.filter(plant => +plant.id === +this.singlePlantProduct);
  }

  get selectedItem() {
    return this.accessories.filter(
      item => +item.id === +this.singleItemProduct
    );
  }

  get filteredAccessory() {
    return this.accessories.filter(
      accessory => accessory.category === this.accessoryFilter
    );
  }

  get filteredMultiplePlants() {
    let plants = this.plants;
    if (this.careFilter !== "") {
      plants = plants.filter(plant => plant.care_level === this.careFilter);
    }
    if (this.lightingFilter !== "") {
      plants = plants.filter(plant => plant.lighting === this.lightingFilter);
    }
    if (this.sizeFilter !== "") {
      plants = plants.filter(plant => plant.size === this.sizeFilter);
    }
    if (this.petFilter !== "") {
      if (this.petFilter === "yes") {
        plants = plants.filter(plant => plant.pet_friendly === true);
      } else if (this.petFilter === "no") {
        plants = plants.filter(plant => plant.pet_friendly === false);
      }
    }
    return plants.filter(plant =>
      `${plant.name} ${plant.scientific_name}`
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
  fetchCategories() {
    if (serverReady === "Yes") {
      return instance
        .get("/categorieslist/?format=json")
        .then(res => res.data)
        .then(category => (this.categories = category))
        .catch(err => console.error(err));
    } else {
      this.accessories = accessoriesdatabase;
    }
  }

  fetchAccessory() {
    if (serverReady === "Yes") {
      return instance
        .get("/accessorieslist/?format=json")
        .then(res => res.data)
        .then(accessory => (this.accessories = accessory))
        .then(accessory => {
          this.updateAccessoryQuantity();
        })
        .catch(err => console.error(err));
    } else {
      this.accessories = accessoriesdatabase;
    }
  }
  fetchPlants() {
    if (serverReady === "Yes") {
      this.currentUser = userdatabase;
      this.trackedPlants = trackinghistory;
      return instance
        .get("/plantslist/?format=json")
        .then(res => res.data)
        .then(plant => (this.plants = plant))
        .then(plant => {
          this.updatePlantQuantity();
        })
        .catch(err => console.error(err));
    } else {
      this.plants = plantdabase;
    }
  }
  postRequest() {
    let data = { items: [{ productID: 1, quantity: 2 }] };
    return instance
      .post("/createorder/?format=json", data)
      .then(res => res.data)
      .then(res => console.log("success"))
      .catch(err => console.log(err.response));
  }
}

decorate(PlantsStore, {
  plants: observable,
  categories: observable,
  typeFilter: observable,
  accessories: observable,
  currentUser: observable,
  singlePlantProduct: observable,
  selectedTrackPlant: observable,
  singleItemProduct: observable,
  trackID: observable,
  trackedPlants: observable,
  careFilter: observable,
  lightingFilter: observable,
  sizeFilter: observable,
  petFilter: observable,
  plantSearch: observable,
  selectedPlant: computed,
  selectedItem: computed,
  filteredMultiplePlants: computed,
  accessorySearch: observable,
  filteredMultipleAccessory: computed,
  shopSegment: observable,
  accessoryFilter: observable,
  filteredAccessory: computed
});
const PlantStore = new PlantsStore();
export default withNavigation(observer(PlantStore));
PlantStore.fetchPlants();
PlantStore.fetchAccessory();
PlantStore.fetchCategories();
