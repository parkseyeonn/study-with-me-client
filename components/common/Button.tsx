import {ButtonHTMLAttributes} from "react";
import styled, {css} from "styled-components";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: number;
  size?: "normal" | "mini" | "big"; // height, font-size
  border?: boolean;
  color?: "string";
  textColor?: "string";
}

const HEIGHT = {
  normal: 30,
  mini: 20,
  big: 50,
};

const FONT_SIZE = {
  normal: 14,
  mini: 12,
  big: 18,
};

const StyledButton = styled.button<Props>`
  width: ${props => props.width ? props.width : "auto"};
  padding: 0 10px;
  border-radius: 10px;
  transition: .2s;
  ${
    props => props.size ? css`
      height: ${HEIGHT[props.size]}px;
      line-height: ${HEIGHT[props.size]}px;
      font-size: ${FONT_SIZE[props.size]}px;
    ` : null
  }
  ${
    props => props.border ? css`
      border-color: ${props.color ?? props.theme.borderColor};
      border-width: 1px;
      background-color: white;
      color: ${props.color ?? props.theme.borderColor};
    ` : css`
      border: none;
      background-color ${props.color ?? props.theme.themeColor1};
      color: ${props.textColor ?? props.theme.white};
    `
  }
  &:hover {
    opacity: .8;
  }
`;

export function Button({children, ...props}: Props) {
    return (
        <StyledButton {...props}>
        {children}
        </StyledButton>
    )
};
