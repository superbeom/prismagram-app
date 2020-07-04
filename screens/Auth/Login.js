import React from "react";
import { TouchableWithoutFeedback, Alert, Keyboard } from "react-native";
import { View } from "../config";
import useInput from "../../hooks/useInput";
import AuthInput from "../../components/AuthInput";
import AuthButton from "../../components/AuthButton";

export default () => {
  const emailInput = useInput("");
  const handleLogin = () => {
    const { value } = emailInput;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (value === "") {
      return Alert.alert("Email can't be empty");
    } else if (!value.includes("@") || !value.includes(".")) {
      return Alert.alert("Please write an email");
    } else if (!emailRegex.test(value)) {
      return Alert.alert("That email is invalid");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <AuthInput
          {...emailInput}
          placeholder={"Email"}
          keyboardType={"email-address"}
          returnKeyType={"send"}
          onEndEditing={handleLogin}
        />
        <AuthButton onPress={handleLogin} text={"Log In"} />
      </View>
    </TouchableWithoutFeedback>
  );
};
