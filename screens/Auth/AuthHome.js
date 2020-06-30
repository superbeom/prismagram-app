import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text } from "../config";

export default ({ navigation }) => (
  <View>
    <Text>Auth Home</Text>
    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
      <Text>Go to Login</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
      <Text>Go to Signup</Text>
    </TouchableOpacity>
  </View>
);
