import { useEffect, useState } from "react";
import { Card } from "../components/activity-card/card/card";
import ActivityService from "../services/activity.service.js"
import { BackgroundGradient } from "../components/globalStyles";

export function Home() {

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
    <div className="home">
      <BackgroundGradient />
      <h1>Home</h1>
      {activity &&
        activity.map((event, index) => (
          <Card key={index} activity={event} buttonImage="/images/PlusMath.png"/>
        ))}
    </div>
  );
}
