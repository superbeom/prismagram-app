import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Tabs/Home";
import Search from "../screens/Tabs/Search";
import Notifications from "../screens/Tabs/Notifications";
import Profile from "../screens/Tabs/Profile";

const TabNavigation = createBottomTabNavigator();

export default () => (
  <TabNavigation.Navigator>
    <TabNavigation.Screen name="Home" component={Home} />
    <TabNavigation.Screen name="Search" component={Search} />
    <TabNavigation.Screen
      name="Add"
      component={View}
      listeners={({ navigation }) => ({
        tabPress: (e) => {
          // Prevent default action
          e.preventDefault();

          // Do something with the `navigation` object
          navigation.navigate("PhotoNavigation");
        },
      })}
    />
    <TabNavigation.Screen name="Notifications" component={Notifications} />
    <TabNavigation.Screen name="Profile" component={Profile} />
  </TabNavigation.Navigator>
);
