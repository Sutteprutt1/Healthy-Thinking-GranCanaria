import styled from "styled-components";
import { colors } from "../globalStyles";

export const NavWrapper = styled.div`
  background-color: ${colors.darkGreen};
  width: 80px;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  img {
    width: 35px;
    height: 35px;
    margin-top: 68px;
  }
  img:hover {
    color: ${colors.yellow};
  }
  z-index: 20;
`;

export const NavButton = styled.button`
  background-color: unset;
  padding: unset;
  border: none;
  position: fixed;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  left: 0;
  z-index: 20;
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

export const DarkFilter = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: ${colors.black};
  opacity: 0.7;
  z-index: 19;
  transition-duration: 500ms;
  transition-property: background-color;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  margin-left: 100px;
  font-size: 24px;
  margin-top: 68px;
  margin-bottom: 6px;
  height: 35px;
`;

export const NotSelectedTitle = styled(Title)`
  color: ${colors.lightGreen};
`;

export const SelectedTitle = styled(Title)`
  color: ${colors.yellow};
`;

export const LogOutTitle = styled(Title)`
  color: ${colors.pink};
`;

