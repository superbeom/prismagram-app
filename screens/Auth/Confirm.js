import React, { useState } from "react";
import { TouchableWithoutFeedback, Alert, Keyboard } from "react-native";
import { useMutation } from "react-apollo-hooks";
import { CONFIRM_SECRET } from "./AuthQueries";
import { useLogIn } from "../../AuthContext";
import { View } from "../config";
import useInput from "../../hooks/useInput";
import AuthInput from "../../components/AuthInput";
import AuthButton from "../../components/AuthButton";

export default ({ route }) => {
  const confirmInput = useInput("");
  const [loading, setLoading] = useState(false);
  const { email } = route.params;
  const logIn = useLogIn();

  const [confirmSecretMutation] = useMutation(CONFIRM_SECRET, {
    variables: {
      email: email,
      secret: confirmInput.value,
    },
  });

  const handleConfirm = async () => {
    const { value } = confirmInput;

    if (value === "" || !value.includes(" ")) {
      return Alert.alert("Invalid secret");
    }

    try {
      setLoading(true);
      const {
        data: { confirmSecret },
      } = await confirmSecretMutation();

      if (confirmSecret !== "" || confirmSecret !== false) {
        logIn(confirmSecret);
      } else {
        Alert.alert("Can't confirm secret");
      }
    } catch (error) {
      console.log("error: ", error);
      if (error.message.includes("conbination")) {
        // When secret is wrong - "Wrong email/secret conbination"
        Alert.alert("Wrong secret!");
      } else {
        Alert.alert("Can't confirm secret");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <AuthInput
          {...confirmInput}
          placeholder={"Secret"}
          returnKeyType={"send"}
          onSubmitEditing={handleConfirm}
          secureTextEntry={true}
        />
        <AuthButton
          onPress={handleConfirm}
          text={"Confirm"}
          loading={loading}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
