import { createGlobalStyle } from "styled-components";

// color palette
export const colors = {
  darkGreen: "#264653",
  lightGreen: "#ADCDAF",
  white: "#FFFFFF",
  pink: "#FFB7C3",
  yellow: "#F9A620",
  blue: "#81B9CB",
  black: "#000000",
};

export const BackgroundGradient = createGlobalStyle`
  body {
    background-image: linear-gradient(to bottom, ${colors.pink}, ${colors.white});
    height: 100%;
  }

`;

export const LoginBackground = createGlobalStyle`
  body {
    background-image: linear-gradient(to bottom, ${colors.white}, ${colors.lightGreen}, ${colors.pink});
    height: 100%;
  }`;
