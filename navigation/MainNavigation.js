import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./TabNavigation";
import PhotoNavigation from "./PhotoNavigation";
import MessageNavigation from "./MessageNavigation";

const MainNavigation = createStackNavigator();

export default () => (
  <MainNavigation.Navigator headerMode="none" mode="modal">
    <MainNavigation.Screen name="TabNavigation" component={TabNavigation} />
    <MainNavigation.Screen name="PhotoNavigation" component={PhotoNavigation} />
    <MainNavigation.Screen
      name="MessageNavigation"
      component={MessageNavigation}
    />
  </MainNavigation.Navigator>
);
