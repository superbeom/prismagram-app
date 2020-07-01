import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text } from "../config";

export default ({ navigation }) => (
  <View>
    <TouchableOpacity onPress={() => navigation.navigate("UploadPhoto")}>
      <Text>Take</Text>
    </TouchableOpacity>
  </View>
);
