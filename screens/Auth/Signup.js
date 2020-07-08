import React, { useState } from "react";
import { TouchableWithoutFeedback, Alert, Keyboard } from "react-native";
import { useMutation } from "react-apollo-hooks";
import { CREATE_ACCOUNT } from "./AuthQueries";
import { View } from "../config";
import useInput from "../../hooks/useInput";
import AuthInput from "../../components/AuthInput";
import AuthButton from "../../components/AuthButton";
import {
  CheckValueName,
  CheckValueEmail,
} from "../../components/CheckAuthInput";

const EMPTY = "Empty";
const BLANK = "Blank";
const NOT_EMAIL = "Not email";
const INVALID_EMAIL = "Invalid email";
const FIRST_NAME = "First name";
const LAST_NAME = "Last name";
const USERNAME = "username";

export default ({ route, navigation }) => {
  const firstNameInput = useInput("");
  const lastNameInput = useInput("");
  const emailInput = useInput(route.params ? route.params.email : "");
  const usernameInput = useInput("");
  const [loading, setLoading] = useState(false);

  const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
    variables: {
      username: usernameInput.value,
      email: emailInput.value,
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
    },
  });

  const handleSignup = async () => {
    const { value: firstName } = firstNameInput;
    const { value: lastName } = lastNameInput;
    const { value: email } = emailInput;
    const { value: username } = usernameInput;
    const nameValueArray = [firstName, lastName, username];
    const nameStringArray = [FIRST_NAME, LAST_NAME, USERNAME];
    let result = null;

    result = CheckValueEmail(email);
    if (result === EMPTY) {
      return Alert.alert("Email can't be empty");
    } else if (result === NOT_EMAIL) {
      return Alert.alert("Please write an email");
    } else if (result === INVALID_EMAIL) {
      return Alert.alert("That email is invalid");
    }

    for (let i = 0; i < nameValueArray.length; i++) {
      result = CheckValueName(nameValueArray[i]);
      if (result === EMPTY) {
        return Alert.alert(`${nameStringArray[i]} can't be empty`);
      } else if (result === BLANK) {
        return Alert.alert(`${nameStringArray[i]} can't be blank`);
      }
    }

    try {
      setLoading(true);
      const {
        data: { createAccount },
      } = await createAccountMutation();

      if (createAccount) {
        Alert.alert("Account created", "Log in now!");
        navigation.navigate("Login", { email });
      } else {
        Alert.alert("Can't create account");
      }
    } catch (error) {
      console.log("error: ", error);
      if (error.message.includes("email")) {
        // When email is already taken - "This email is already taken"
        Alert.alert("This email is already taken");
      } else if (error.message.includes("username")) {
        // When username is already taken - "This username is already taken"
        Alert.alert("This username is already taken");
      } else {
        Alert.alert("Can't create account");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <AuthInput
          {...firstNameInput}
          placeholder={"First name"}
          autoCapitalize="words"
        />
        <AuthInput
          {...lastNameInput}
          placeholder={"Last name"}
          autoCapitalize="words"
        />
        <AuthInput
          {...emailInput}
          placeholder={"Email"}
          keyboardType={"email-address"}
        />
        <AuthInput {...usernameInput} placeholder={"Username"} />
        <AuthButton onPress={handleSignup} text={"Sign up"} loading={loading} />
      </View>
    </TouchableWithoutFeedback>
  );
};
