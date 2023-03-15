import { useEffect, useState } from "react";
import { Card } from "../components/activity-card/card/card";
import ActivityService from "../services/activity.service.js";
import FilterService from "../services/filter.service.js";
import { BackgroundGradient } from "../components/globalStyles";
import Navbar from "../components/navbar/navbar";
import { PaidFilter } from "../components/paid-filter/paid-filter";

export function Home() {
  const [activity, setActivity] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    retrieveEvent();
  }, []);

  const retrieveEvent = () => {
    ActivityService.getAll()
      .then((response) => {
        setActivity(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    FilterService.getAll()
      .then((response) => {
        setFilter(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Navbar />
      <BackgroundGradient />
      <h1>Home</h1>
      <PaidFilter />
      {filter &&
        filter.map((event, index) => <></>)
      }
      {activity &&
        activity.map((event, index) => <Card key={index} activity={event} type="add" />)}
    </>
  );
}
