import { Card } from "../activity-card/card/card";
import { UserImg, UserName, UserWrapper } from "./styles";

export function UserProfile() {

  return (
    <UserWrapper>
      <UserImg src="https://i.imgur.com/1Q9ZQ2r.jpg" />
      <UserName>Your name</UserName>
      <Card />
    </UserWrapper>
  );
}
