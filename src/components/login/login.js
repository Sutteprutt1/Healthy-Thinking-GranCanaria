import { LoginWrapper, Title, Input, SubmitButton } from "./styles";
import authService from "../../services/auth.service.js"
import { useState } from "react";
import { useNavigate } from "react-router";

export function UserLogin() {

  let navigate = useNavigate()

  const initialUserState = {
    email: "",
    password: ""
  };

  const [user, setUser] = useState(initialUserState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    authService.login(user).then((response) => {
      if (localStorage.getItem("token")) {
        navigate("/home")
        console.log(localStorage.getItem("token"));
      }
    }).catch(e => {
      console.log(e);
    });
  }

  return (
    <LoginWrapper>
      <Title>Login</Title>
      <form onSubmit={onSubmit}>
        <Input placeholder="email" type="text" name='email' onChange={handleInputChange} required />
        <Input placeholder="password" type="text" name='password' onChange={handleInputChange} required />
        <SubmitButton type='submit'>Login</SubmitButton>
      </form>
    </LoginWrapper>
  );
}
