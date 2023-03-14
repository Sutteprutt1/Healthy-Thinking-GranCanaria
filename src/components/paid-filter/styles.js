import styled from "styled-components";
import { colors } from "../globalStyles";

export const Filter = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  right: 50%;
  margin-bottom: 20px;
`;

export const LeftButton = styled.div`
  background-color: ${colors.yellow};
  height: 60px;
  width: 60px;
  border-radius: 50%;
  display: flex;
  position: relative;
`;

export const RightButton = styled.div`
  background-color: ${colors.darkGreen};
  height: 60px;
  width: 60px;
  border-radius: 50%;
  display: flex;
`;

export const FilterImg = styled.img`
  height: 59px;
  width: 59px;
  margin: auto;
`;

export const FilterLane = styled.div`
  height: 50px;
  width: 5px;
  position: absolute;
  background-color: ${colors.yellow};
  transform: rotate(-45deg);
  left: 45%;
  top: 10%;
`;

export const Toggle = styled.div`
  background-color: ${colors.darkGreen};
  width: 60px;
  height: 30px;
  border-radius: 20px;
  position: relative;
  margin-left: 15px;
  margin-right: 15px;
`;

export const ToggleCircle = styled.div`
  background-color: ${colors.white};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  left: 5px;
`;