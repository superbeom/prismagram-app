import React from "react";
import { View } from "react-native";
import { useIsLoggedIn } from "../AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "../navigation/AuthNavigation";
import MainNavigation from "../navigation/MainNavigation";

export default () => {
  // const isLoggedIn = useIsLoggedIn();
  const isLoggedIn = true;

  return (
    <View style={{ flex: "1" }}>
      <NavigationContainer>
        {isLoggedIn ? <MainNavigation /> : <AuthNavigation />}
      </NavigationContainer>
    </View>
  );
};
