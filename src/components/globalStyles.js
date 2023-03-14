import { createGlobalStyle } from "styled-components";

// color palette
export const colors = {
  darkGreen: "#264653",
  lightGreen: "#ADCDAF",
  white: "#FFFFFF",
  pink: "#FFB7C3",
  yellow: "#F9A620",
  blue: "#81B9CB",
  black: "#000000"
};

export const BackgroundGradient = createGlobalStyle`
  body {
    background: linear-gradient(to bottom, ${colors.pink}, ${colors.white});
    height: 100vh;
  }

`;

export const LoginBackground = createGlobalStyle`
  body {
    background: linear-gradient(to bottom, ${colors.lightGreen}, ${colors.pink});
    height: 100vh;
  }`;
