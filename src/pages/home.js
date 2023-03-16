import { useEffect, useState } from "react";
import { Card } from "../components/activity-card/card/card";
import ActivityService from "../services/activity.service.js";
import FilterService from "../services/filter.service.js";
import { BackgroundGradient } from "../components/globalStyles";
import Navbar from "../components/navbar/navbar";
import {
  PaidFilterFree,
  PaidFilterPayment,
} from "../components/paid-filter/paid-filter";

export function Home() {
  const [activity, setActivity] = useState([]);
  const [freeActivity, setFreeActivity] = useState([]);
  const [paymentActivity, setPaymentActivity] = useState([]);
  const [filter, setFilter] = useState([]);

  const [paid, setPaid] = useState(false);
  function changePaid() {
    if (paid === true) {
      setPaid(false);
    } else {
      setPaid(true);
    }
  }

  useEffect(() => {
    retrieveEvent();
  }, []);

  useEffect(() => {
    setPaidActivities();
    console.log(freeActivity);
    console.log(paymentActivity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activity]);

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

  const setPaidActivities = () => {
    setFreeActivity(activity.filter((activity) => activity.paid === 0));
    setPaymentActivity(activity.filter((activity) => activity.paid === 1));
  };

  return (
    <>
      <Navbar />
      <BackgroundGradient />
      <h1>Home</h1>
      {!paid ? (
        <>
          <PaidFilterFree onClick={() => changePaid()} />
          {filter && filter.map((event, index) => <></>)}
          {freeActivity.map((event, index) => (
            <Card key={index} activity={event} type="add" />
          ))}
        </>
      ) : (
        <>
          <PaidFilterPayment onClick={() => changePaid()} />
          {filter && filter.map((event, index) => <></>)}
          {paymentActivity.map((event, index) => (
            <Card key={index} activity={event} type="add" />
          ))}
        </>
      )}
    </>
  );
}
