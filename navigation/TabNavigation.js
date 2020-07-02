import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackFactoryNavigation from "./StackFactoryNavigation";
import Home from "../screens/Tabs/Home";
import Search from "../screens/Tabs/Search";
import Notifications from "../screens/Tabs/Notifications";
import Profile from "../screens/Tabs/Profile";
import MessagesLink from "../components/MessagesLink";

const TabNavigation = createBottomTabNavigator();

export default () => (
  <TabNavigation.Navigator>
    <TabNavigation.Screen
      name="Home"
      component={StackFactoryNavigation}
      initialParams={{
        customRoute: Home,
        customConfig: {
          headerRight: () => <MessagesLink />,
        },
      }}
    />
    <TabNavigation.Screen
      name="Search"
      component={StackFactoryNavigation}
      initialParams={{
        customRoute: Search,
        customConfig: {},
      }}
    />
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
    <TabNavigation.Screen
      name="Notifications"
      component={StackFactoryNavigation}
      initialParams={{
        customRoute: Notifications,
        customConfig: {},
      }}
    />
    <TabNavigation.Screen
      name="Profile"
      component={StackFactoryNavigation}
      initialParams={{
        customRoute: Profile,
        customConfig: {},
      }}
    />
  </TabNavigation.Navigator>
);
