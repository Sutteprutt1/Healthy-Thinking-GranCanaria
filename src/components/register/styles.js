import styled from "styled-components";
import { colors } from "../globalStyles.js";

export const RegisterSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  max-height: 100vh;
  margin: 0 auto;
  position: absolute;
  padding-top: 40px;
`;

export const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.darkGreen};
  width: 300px;
  height: 480px;
  border-radius: 40px;
  margin: 0 auto;
  align-self: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const Input = styled.input`
  width: 200px;
  height: 50px;
  margin: 10px;
  box-sizing: border-box;
  color: ${colors.white};
  border: none;
  background: transparent;
  border-bottom: 1px solid ${colors.white};
  outline: none;
  ::placeholder {
    color: ${colors.white};
    font-size: 16px;
  }
`;

export const RegisterButton = styled.button`
  background-color: ${colors.lightGreen};
  width: 114px;
  height: 44px;
  margin-top: 20px;
  border-radius: 40px;
  border: none;
  color: white;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
`;

export const ReturnButton = styled.button`
  background-color: ${colors.lightGreen};
  width: 114px;
  height: 44px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 40px;
  border: none;
  color: white;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
`;
