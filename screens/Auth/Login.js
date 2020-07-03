import React from "react";
import { View } from "../config";
import useInput from "../../hooks/useInput";
import AuthInput from "../../components/AuthInput";
import AuthButton from "../../components/AuthButton";

export default () => {
  const emailInput = useInput("");

  return (
    <View>
      <AuthInput
        {...emailInput}
        placeholder={"Email"}
        keyboardType={"email-address"}
      />
      <AuthButton onPress={() => null} text={"Log In"} />
    </View>
  );
};
