import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components";
import PropTypes from "prop-types";
import constants from "../constants";

const Touchable = styled.TouchableOpacity``;

const Container = styled.View`
  width: ${constants.width / 1.5}px;
  background-color: ${(props) => props.theme.blueColor};
  padding: 10px;
  border-radius: 4px;
`;

const Text = styled.Text`
  color: white;
  text-align: center;
  font-weight: 600;
`;

const AuthButton = ({ onPress, text, loading = false }) => (
  <Touchable onPress={onPress} disabled={loading}>
    <Container>
      {loading ? <ActivityIndicator color={"white"} /> : <Text>{text}</Text>}
    </Container>
  </Touchable>
);

AuthButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

export default AuthButton;
