import { decorate, observable, computed, action } from "mobx";
import axios from "axios";
import { StyleSheet, Text, View } from "react-native";
//Import Stores

const instance = axios.create({
  baseURL: "http://104.248.43.116"
});

class PlantsStore {
  constructor() {
    this.plants = [];
    this.typeFilter = null;
  }

  fetchPlants() {
    return instance
      .get("/plantslist/?format=json")
      .then(res => res.data)
      .then(plant => (this.plants = plant))
      .catch(err => console.error(err));
  }
}

decorate(PlantsStore, {
  plants: observable
});
const PlantStore = new PlantsStore();
PlantStore.fetchPlants();
export default PlantStore;
