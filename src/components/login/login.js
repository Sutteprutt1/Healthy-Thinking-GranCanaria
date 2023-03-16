import {
  LoginWrapper,
  Input,
  SubmitButton,
  Form,
  Register,
  RegisterButton,
} from "./styles";
import authService from "../../services/auth.service.js";
import { useState } from "react";
import { useNavigate } from "react-router";
import { LogoCard } from "../logo-card/logoCard";

export function UserLogin() {
  let navigate = useNavigate();

  const initialUserState = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState(initialUserState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    authService
      .login(user)
      .then((response) => {
        if (localStorage.getItem("token")) {
          navigate("/home");
          console.log(localStorage.getItem("token"));
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <LogoCard/>
      <LoginWrapper>
        <Form onSubmit={onSubmit}>
          <Input
            placeholder="Email"
            type="text"
            name="email"
            onChange={handleInputChange}
            required
          />
          <Input
            placeholder="Password"
            type="password"
            name="password"
            onChange={handleInputChange}
            required
          />
          <SubmitButton type="submit">Login</SubmitButton>
        </Form>
      </LoginWrapper>
      <Register>
        <p>Don't have an account yet?</p>
        <RegisterButton to="/register">Register</RegisterButton>
      </Register>
    </>
  );
}
