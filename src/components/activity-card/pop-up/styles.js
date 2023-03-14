import styled from "styled-components";
import { colors } from "../../globalStyles";

export const PopUp = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
`;

export const CardDiv = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 90%;
  margin: auto;
  background-color: ${colors.darkGreen};
  border-radius: 40px;
  color: ${colors.white};
  z-index: 5;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Description = styled.p`
  font-size: 16px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 85%;
`;

export const Button = styled.button`
  background-color: ${colors.lightGreen};
  border: none;
  color: white;
  padding: 15px 20px;
  text-align: center;
  border-radius: 20px;
  align-self: center;
  margin-bottom: 30px;
`;

export const Image = styled.img`
  height: max-content;
  width: 100%;
`;

export const ImageDiv = styled.div` 
  height: 100%;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  overflow: hidden;
  margin: auto;
`;

export const ImageDim = styled.div`
  // height: 72px;
  // width: 210px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const DarkFilter = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: ${colors.black};
  opacity: 0.5;
  z-index: 1;
  transition-duration: 500ms;
  transition-property: background-color;
`;
