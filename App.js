import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { Text, View } from "react-native";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  const preLoad = async () => {
    try {
      /* Load Font */
      await Font.loadAsync({
        ...Ionicons.font,
      });
      /* Load Asset */
      await Asset.loadAsync([require("./assets/logo.png")]);
      setLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    preLoad();
  }, []);

  return loaded ? (
    <View style={{ padding: 50 }}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  ) : (
    <AppLoading />
  );
}
