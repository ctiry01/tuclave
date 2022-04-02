import styled from "styled-components";
import {ReactChild} from "react";

interface ButtonProps {
    children: ReactChild
    bgColor?: string
    color?: string
    hoverColor?: string
    onPress: Function
    [others: string]: any
}

interface ButtonStylesProps {
    bgColor: string
    color: string
    hoverColor: string
}

export const Button = ({
                           children,
                           bgColor = '#d90368',
                           color = 'white',
                           hoverColor = '#a8024f',
                           onPress,
                           ...others
                       }: ButtonProps) =>
    <Wrapper bgColor={bgColor} hoverColor={hoverColor} color={color}
             onClick={() => onPress()} {...others}>{children}</Wrapper>

const Wrapper = styled.button <ButtonStylesProps>`
  background-color: ${({bgColor}) => bgColor};
  border: none;
  text-align: center;
  color: ${({color}) => color};
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: ${({hoverColor}) => hoverColor};
  }
`