import { LoginWrapper, Title, Input, SubmitButton } from "./styles";

export function UserLogin() {
  return (
    <LoginWrapper>
      <Title>Login</Title>
      <Input placeholder="email" />
      <Input placeholder="password" />
      <SubmitButton>Login</SubmitButton>
    </LoginWrapper>
  );
}
