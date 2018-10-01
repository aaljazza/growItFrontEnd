import { decorate, observable, computed, action } from "mobx";
import axios from "axios";
import { StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

//Import Stores

class HistorysStore {
  constructor() {
    this.lastPage = "Shop";
  }

  changePage(lastPage) {
    this.lastPage = lastPage;
  }
}
decorate(HistorysStore, {
  lastPage: observable
});
const HistoryStore = new HistorysStore();
export default withNavigation(observer(HistoryStore));
