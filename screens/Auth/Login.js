import React from "react";
import { View } from "../config";
import AuthInput from "../../components/AuthInput";
import AuthButton from "../../components/AuthButton";

export default () => (
  <View>
    <AuthInput
      placeholder={"Email"}
      value={""}
      keyboardType={"email-address"}
    />
    <AuthButton onPress={() => null} text={"Log In"} />
  </View>
);
