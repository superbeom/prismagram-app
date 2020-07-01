import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TakePhoto from "../screens/Photo/TakePhoto";
import SelectPhoto from "../screens/Photo/SelectPhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";

const PhotoNavigation = createStackNavigator();
const PhotoTab = createMaterialTopTabNavigator();

const PhotoTabs = () => (
  <PhotoTab.Navigator tabBarPosition="bottom">
    <PhotoTab.Screen name="TakePhoto" component={TakePhoto} />
    <PhotoTab.Screen name="SelectPhoto" component={SelectPhoto} />
  </PhotoTab.Navigator>
);

export default () => (
  <PhotoNavigation.Navigator>
    <PhotoNavigation.Screen name="PhotoTabs" component={PhotoTabs} />
    <PhotoNavigation.Screen name="UploadPhoto" component={UploadPhoto} />
  </PhotoNavigation.Navigator>
);
