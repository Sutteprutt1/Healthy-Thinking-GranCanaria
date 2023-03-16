import styled from "styled-components";
import { colors } from "../globalStyles";

export const Filter = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  right: 50%;
  margin-bottom: 20px;
  margin-top: 60px;
`;

export const Button = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  display: flex;
  position: relative;
`;

export const SelectedButton = styled(Button)`
  background-color: ${colors.yellow};
`;

export const NotSelectedButton = styled(Button)`
  background-color: ${colors.darkGreen};
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
  transform: rotate(-45deg);
  left: 45%;
  top: 10%;
`;

export const SelectedFilterLane = styled(FilterLane)`
  background-color: ${colors.yellow};
`;

export const NotSelectedFilterLane = styled(FilterLane)`
  background-color: ${colors.darkGreen};
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
  
`;

export const ToggleCircleLeft = styled(ToggleCircle)`
  left: 5px;
`;

export const ToggleCircleRight = styled(ToggleCircle)`
  right: 5px;
`;