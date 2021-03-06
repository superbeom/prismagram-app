import React, { useState } from "react";
import { TouchableWithoutFeedback, Alert, Keyboard } from "react-native";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN } from "./AuthQueries";
import { View } from "../config";
import useInput from "../../hooks/useInput";
import AuthInput from "../../components/AuthInput";
import AuthButton from "../../components/AuthButton";

export default ({ route, navigation }) => {
  const emailInput = useInput(route.params ? route.params.email : "");
  const [loading, setLoading] = useState(false);

  const [requestSecretMutation] = useMutation(LOG_IN, {
    variables: { email: emailInput.value },
  });

  const handleLogin = async () => {
    const { value } = emailInput;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (value === "") {
      return Alert.alert("Email can't be empty");
    } else if (!value.includes("@") || !value.includes(".")) {
      return Alert.alert("Please write an email");
    } else if (!emailRegex.test(value)) {
      return Alert.alert("That email is invalid");
    }

    try {
      setLoading(true);
      const {
        data: { requestSecret },
      } = await requestSecretMutation();

      if (requestSecret) {
        Alert.alert("Check your email");
        navigation.navigate("Confirm", { email: value });
      } else {
        Alert.alert("Account not found");
        navigation.navigate("Signup", { email: value });
      }
    } catch (error) {
      console.log("error: ", error);
      Alert.alert("Can't log in now");
    } finally {
      setLoading(false);
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
          onSubmitEditing={handleLogin}
        />
        <AuthButton onPress={handleLogin} text={"Log In"} loading={loading} />
      </View>
    </TouchableWithoutFeedback>
  );
};
