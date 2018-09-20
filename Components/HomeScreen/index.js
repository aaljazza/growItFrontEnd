import React, { Component } from "react";
import HomeScreen from "./HomeScreen";
import LoginScreen from "../LoginScreen/LoginScreen";
import PlantScreen from "../PlantList/PlantScreen";
import SideBarDrawer from "../SideBarDrawer/SideBarDrawer";
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Login: { screen: LoginScreen },
    Plants: { screen: PlantScreen }
  },
  {
    contentComponent: props => <SideBarDrawer {...props} />
  }
);
export default HomeScreenRouter;
