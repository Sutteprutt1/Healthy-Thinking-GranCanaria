import authService from "../../services/auth.service.js";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import {
  RegisterWrapper,
  RegisterSection,
  Form,
  Input,
  RegisterButton,
  ReturnButton,
} from "./styles.js";

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
        navigate("/");
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
            {/* <Link to="/"> */}
            <RegisterButton type="submit">Register</RegisterButton>
            {/* </Link> */}
          </Form>
        </RegisterWrapper>
        <ReturnButton onClick={() => navigate("/")}>Return</ReturnButton>
      </RegisterSection>
    </>
  );
}
