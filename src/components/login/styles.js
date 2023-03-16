import styled from "styled-components";
import { colors } from "../globalStyles.js";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.darkGreen};
  width: 300px;
  height: 360px;
  border-radius: 40px;
  margin: 0 auto;
  margin-top: 40px;
  align-self: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
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

export const SubmitButton = styled.button`
  background-color: ${colors.lightGreen};
  width: 114px;
  height: 44px;
  border-radius: 40px;
  border: none;
  color: white;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  margin-top: 28px;
`;

export const Register = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  p {
    font-size: 14px;
  }
`;

export const RegisterButton = styled.button`
  background-color: ${colors.lightGreen};
  width: 114px;
  height: 44px;
  border-radius: 40px;
  border: none;
  color: white;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
`;
