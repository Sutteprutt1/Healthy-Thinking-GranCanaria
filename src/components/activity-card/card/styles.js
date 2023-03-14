import styled from "styled-components";
import { colors } from "../../globalStyles";

export const CardDiv = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 320px;
  height: 104px;
  margin: auto;
  background-color: ${colors.lightGreen};
  border-radius: 20px;
  display: flex;
  overflow: hidden;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 15px;
`;

export const Description = styled.p`
  font-size: 14px;
  color: black;
`;

export const Image = styled.img`
  height: max-content;
  width: 100%;
`;

export const ImageDiv = styled.div` 
  height: 100%;
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageDim = styled.div`
  height: 72px;
  width: 210px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const AddButtonDiv = styled.div`
  display: flex;
  height: 100%;
  width: 25%;
  align-items: center;
  justify-content: center;
  border-left: 2px solid ${colors.darkGreen};
`;

export const Activity = styled.div`
  margin: auto;
  width: 320px;
  margin-bottom: 20px;
`;
