import React from "react";
import { Button } from "@chakra-ui/react";
import BaseColors from "../../constant";

export default function PrimaryButton(props) {
  const {
    btnStyle,
    background,
    leftIcon,
    rightIcon,
    variant,
    colorScheme,
    size,
    label,
    fontSize,
    marginRight,
    padding,
    onClick,
    btnWidth,
    btnClassName,
  } = props;

  return (
    <Button
      style={
        btnStyle
          ? btnStyle
          : {
              background: background ? background : BaseColors.purple,
              color: BaseColors.white,
              minWidth: "120px",
              borderRadius: 25,
              fontFamily: `"Montserrat", sans-serif`,
              fontSize: fontSize ? fontSize : `1rem`,
              marginRight: marginRight ? marginRight : "none",
              padding: padding ? padding : "auto",
              width: btnWidth ? btnWidth : "auto",
            }
      }
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      variant={variant}
      colorScheme={colorScheme}
      size={size}
      className={btnClassName}
      onClick={onClick} // Pass onClick prop to Button component
    >
      {label}
    </Button>
  );
}
