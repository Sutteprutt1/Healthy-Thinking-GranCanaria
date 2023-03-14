import styled from "styled-components";
import { colors } from "../../globalStyles";

export const CardDiv = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 300px;
  height: 120px;
  margin: auto;
  text-align: center;
  background-color: ${colors.lightGreen};
  border-radius: 20px;
`;

export const Title = styled.h1`
  font-size: 18px;
`;

export const Description = styled.p`
  font-size: 14px;
  color: black;
`;
