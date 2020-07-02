import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const StackFactoryNavigation = createStackNavigator();

export default ({ route }) => {
  const { name } = route;
  const { customRoute, customConfig } = route.params;

  return (
    <StackFactoryNavigation.Navigator>
      <StackFactoryNavigation.Screen
        name={name}
        component={customRoute}
        options={customConfig}
      />
    </StackFactoryNavigation.Navigator>
  );
};
