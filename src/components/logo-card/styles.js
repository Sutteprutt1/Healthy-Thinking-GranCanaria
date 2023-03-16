import styled from "styled-components";
import { colors } from "../globalStyles.js";

export const LogoElement = styled.div`
  height: 135px;
  width: 318px;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin-top: 60px;
`;

export const Logo = styled.img`
  height: 90px;
  width: 90px;
  margin: auto;
  z-index: 2;
  position: absolute;
  top: 0;
`;

export const Card = styled.div`
  height: 90px;
  width: 318px;
  margin: auto;
  border-radius: 20px;
  background-color: ${colors.lightGreen};
  position: absolute;
  bottom: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h2`
  bottom: 0;
  margin: 45px 0 0 0;
  font-family: 'Tilt Neon', cursive;
  color: ${colors.darkGreen};
`;