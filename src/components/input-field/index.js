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
    isBlack,
    maxLength,
    inputHeight,
    padding,
    background,
    disabled,
    labelStyle,
    inputClassName,
    outline,
  } = props;

  return (
    <>
      <div className={label ? "row m-0" : null}>
        {label ? (
          <div className="col mb-1 ms-1">
            <div
              className={`${isBlack ? "text-secondary" : "text-light"}`}
              style={
                labelStyle
                  ? labelStyle
                  : isBlack
                  ? Styles.headerItem3
                  : Styles.headerItem
              }
            >
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
                    height: inputHeight ? inputHeight : "5vh",
                    padding: padding ? padding : "15px 20px",
                    background: background
                      ? background
                      : BaseColors.medium_light_grey,
                    color: BaseColors.white,
                    outline: outline ? outline : "auto",
                  }
            }
            placeholder={placeholder}
            type={type}
            size={size ? size : "md"}
            value={value}
            onChange={onChange}
            maxLength={maxLength}
            disabled={disabled}
            className={inputClassName}
          />
          {rightIcon ? (
            <InputRightElement
              pointerEvents="none"
              className="d-flex justify-content-center align-items-center"
              height="99%"
            >
              {rightIcon}
            </InputRightElement>
          ) : null}
        </InputGroup>
      </div>
    </>
  );
}
