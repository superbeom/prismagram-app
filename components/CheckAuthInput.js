import React from "react";

const EMPTY = "Empty";
const BLANK = "Blank";
const NOT_EMAIL = "Not email";
const INVALID_EMAIL = "Invalid email";

export const CheckValueName = (props) => {
  if (props === "") {
    // If '${props}' is empty
    return EMPTY;
  } else {
    // If '${props}' is not empty, Check whether '${props}' is blank or not
    for (let i = 0; i < props.length; i++) {
      if (props.charAt(i) === " ") {
        // 공백이라면, 다음 문자 체크 (i++)
        continue;
      } else {
        // 문자가 하나라도 포함되어 있으면
        return null;
      }
    }
    return BLANK;
  }
};

export const CheckValueEmail = (props) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (props === "") {
    return EMPTY;
  } else if (!props.includes("@") || !props.includes(".")) {
    return NOT_EMAIL;
  } else if (!emailRegex.test(props)) {
    return INVALID_EMAIL;
  }
};
