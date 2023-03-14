import { useEffect, useState } from "react";
import { Card } from "../activity-card/card/card";
import { UserImg, UserName, UserWrapper } from "./styles";
import ActivityService from "../../services/activity.service.js"

export function UserProfile() {

  const [activity, setActivity] = useState([]);

  useEffect(() => {
    retrieveEvent();
  }, []);

  const retrieveEvent = () => {
    ActivityService.getAll()
      .then(response => {
        setActivity(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <UserWrapper>
      <UserImg src="https://i.imgur.com/1Q9ZQ2r.jpg" />
      <UserName>Your name</UserName>
      {activity &&
        activity.map((event, index) => (
          <Card key={index} activity={event} />
        ))};
    </UserWrapper>
  );
}
