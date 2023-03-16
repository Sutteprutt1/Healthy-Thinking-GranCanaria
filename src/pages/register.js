import { UserRegistration } from "../components/register/register";
import { LogoCard } from "../components/logo-card/logoCard";
import { LoginBackground } from "../components/globalStyles";

export function Register() {
  return (
    <>
      <LogoCard />
      <LoginBackground />
      <UserRegistration />
    </>
  );
}
