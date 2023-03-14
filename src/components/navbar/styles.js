import styled from "styled-components";
import { colors } from "../globalStyles";

export const NavWrapper = styled.div`
  background-color: ${colors.darkGreen};
  width: 60px;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 60px;
`;

export const NavButton = styled.button`
  background-color: unset;
  padding: unset;
  border: none;
  position: fixed;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  left: 0;
  z-index: 2;
  width: 50px;
  height: 66px;
  img {
    height: 100%;
    object-fit: contain;
  }
  &.open {
    left: 100%;
  }
`;
