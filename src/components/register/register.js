import authService from "../../services/auth.service.js";
import { useState } from "react";
import { useNavigate } from "react-router";
import {
  RegisterWrapper,
  RegisterSection,
  Form,
  Input,
  RegisterButton,
  ReturnButton,
} from "./styles.js";

import { LogoCard } from "../logo-card/logoCard.js";

export function UserRegistration() {
  let navigate = useNavigate();

  const initialUserState = {
    username: "",
    email: "",
    password: "",
    location: "",
  };

  const [user, setUser] = useState(initialUserState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    // create new user
    authService
      .register(user)
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
      <RegisterSection>
        <RegisterWrapper>
          <Input
            placeholder="Username"
            type="text"
            name="username"
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
          <Form onSubmit={onSubmit}>
            <Input
              placeholder="Email"
              type="text"
              name="email"
              onChange={handleInputChange}
              required
            />
            <Input
              placeholder="Location"
              type="text"
              name="location"
              onChange={handleInputChange}
              required
            />

            <RegisterButton type="submit">Register</RegisterButton>
          </Form>
        </RegisterWrapper>
        <ReturnButton onClick={() => navigate("/")}>Return</ReturnButton>
      </RegisterSection>
    </>
  );
}
