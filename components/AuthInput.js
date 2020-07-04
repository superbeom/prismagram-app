import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import constants from "../constants";

const Container = styled.View`
  margin-bottom: 20px;
`;

const TextInput = styled.TextInput`
  width: ${constants.width / 2}px;
  padding: 10px;
  background-color: ${(props) => props.theme.greyColor};
  border: 1px solid ${(props) => props.theme.darkGreyColor};
  border-radius: 4px;
`;

const AuthInput = ({
  value,
  onChange,
  placeholder,
  keyboardType = "default",
  autoCapitalize = "none",
  returnKeyType = "done",
  onEndEditing = () => null,
}) => (
  <Container>
    <TextInput
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      returnKeyType={returnKeyType}
      onEndEditing={onEndEditing}
      autoCorrect={false}
    />
  </Container>
);

AuthInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  keyboardType: PropTypes.oneOf([
    "default",
    "number-pad",
    "decimal-pad",
    "numeric",
    "email-address",
    "phone-pad",
  ]),
  autoCapitalize: PropTypes.oneOf(["none", "sentences", "words", "characters"]),
  returnKeyType: PropTypes.oneOf(["done", "go", "next", "search", "send"]),
  onEndEditing: PropTypes.func,
};

export default AuthInput;
