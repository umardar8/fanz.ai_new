import React from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import BaseColors from "../../constant";
import { Styles } from "../../styles";

export default function InputField(props) {
  const {
    leftIcon,
    placeholder,
    type,
    size,
    value,
    onChange,
    rightIcon,
    inputStyle,
    inputWidth,
    label,
  } = props;

  return (
    <>
      <div className={label ? "row m-0" : null}>
        {label ? (
          <div className="col mb-1">
            <div className="text-light" style={Styles.headerItem}>
              {label}
            </div>{" "}
          </div>
        ) : null}
        <InputGroup>
          {leftIcon ? (
            <InputLeftElement pointerEvents="none">{leftIcon}</InputLeftElement>
          ) : null}

          <Input
            width="95%"
            style={
              inputStyle
                ? inputStyle
                : {
                    border: `1px solid ${BaseColors.medium_grey}`,
                    borderRadius: 10,
                    width: inputWidth ? inputWidth : "250px",
                    height: "5vh",
                    padding: "15px 20px",
                    background: BaseColors.medium_light_grey,
                    color: BaseColors.white,
                  }
            }
            placeholder={placeholder}
            type={type}
            size={size ? size : "md"}
            value={value}
            onChange={onChange}
          />
          {rightIcon ? (
            <InputRightElement pointerEvents="none">
              {rightIcon}
            </InputRightElement>
          ) : null}
        </InputGroup>
      </div>
    </>
  );
}
