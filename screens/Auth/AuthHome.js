import React from "react";
import styled from "styled-components";
import { View } from "../config";
import constants from "../../constants";
import AuthButton from "../../components/AuthButton";

const Image = styled.Image`
  width: ${constants.width}px;
  margin-bottom: 50px;
`;

const Touchable = styled.TouchableOpacity``;

const LoginLink = styled.View`
  margin-top: 20px;
`;

const LoginLinkText = styled.Text`
  color: ${(props) => props.theme.blueColor};
  font-weight: 600;
`;

export default ({ navigation }) => {
  return (
    <View>
      <Image resizeMode={"contain"} source={require("../../assets/logo.png")} />
      <AuthButton
        onPress={() => navigation.navigate("Signup")}
        text={"Create New Account"}
      />
      <Touchable onPress={() => navigation.navigate("Login")}>
        <LoginLink>
          <LoginLinkText>Log in</LoginLinkText>
        </LoginLink>
      </Touchable>
    </View>
  );
};
