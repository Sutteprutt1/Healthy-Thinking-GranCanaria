import React, { useState } from "react";
import { Button } from "./styles.js";
import SuscriptionService from "../../../services/suscription.service";

export default function PopupButton(props) {
  // Receive the info of activity from the page
  const activity = props.activity;

  const [addedToAgenda, setAddedToAgenda] = useState(false); // Initialize the state variable to false

  // Receive the togglePopup function from the parent component
  const { togglePopup } = props;

  var data = {
    start_time: new Date(),
    end_time: new Date(),
    userId: localStorage.getItem("userId"),
    activityId: activity.id,
  };

  function addToAgenda() {
    console.log(data);
    SuscriptionService.create(data)
      .then((data) => {
        //Do anything then data return.
        console.log("Activity added to agenda!");
        setAddedToAgenda(true); // Update the state variable to true
        setTimeout(() => {
          togglePopup(); // Close the modal after a 2 second delay
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function removeFromAgenda() {
    // Implement the logic to remove the activity from the agenda here
    console.log("Activity removed from agenda!");
    setAddedToAgenda(false); // Update the state variable to false
  }

  return (
    <Button
      addedToAgenda={addedToAgenda}
      onClick={addedToAgenda ? removeFromAgenda : addToAgenda}
    >
      {addedToAgenda ? "Added!" : "Add to agenda?"}
    </Button>
  );
}
