import React from "react";
import styled from "styled-components";
import { View } from "../config";
import constants from "../../constants";

const Image = styled.Image`
  width: ${constants.width}px;
  margin-bottom: 50px;
`;

const Touchable = styled.TouchableOpacity``;

const SignUpBtn = styled.View`
  width: ${constants.width / 2}px;
  background-color: ${(props) => props.theme.blueColor};
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const SignUpBtnText = styled.Text`
  color: white;
  text-align: center;
  font-weight: 600;
`;

const LoginLink = styled.View``;

const LoginLinkText = styled.Text`
  color: ${(props) => props.theme.blueColor};
  font-weight: 600;
`;

export default ({ navigation }) => {
  return (
    <View>
      <Image resizeMode={"contain"} source={require("../../assets/logo.png")} />
      <Touchable onPress={() => navigation.navigate("Signup")}>
        <SignUpBtn>
          <SignUpBtnText>Create New Account</SignUpBtnText>
        </SignUpBtn>
      </Touchable>
      <Touchable onPress={() => navigation.navigate("Login")}>
        <LoginLink>
          <LoginLinkText>Log in</LoginLinkText>
        </LoginLink>
      </Touchable>
    </View>
  );
};
