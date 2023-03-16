import { useState } from "react";
import { Button } from "./styles.js";
import SuscriptionService from "../../../services/suscription.service";

export default function PopupButton(props) {
  const [suscriptions, setSuscriptions] = useState([]);
  const [currentSuscriptions, setCurrentSuscriptions] = useState([]);
  const activity = props.activity;
  const { togglePopup } = props;

  const [addedToAgenda, setAddedToAgenda] = useState(false); // initialize to false

  var data = {
    start_time: new Date(),
    end_time: new Date(),
    userId: localStorage.getItem("userId"),
    activityId: activity.id,
  };

  function addToAgenda() {
    SuscriptionService.create(data)
      .then(() => {
        console.log("Activity added to agenda!");
        setAddedToAgenda(true); // set to true after adding to agenda
        setTimeout(() => {
          togglePopup();
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function removeFromAgenda() {
    setSuscriptions(SuscriptionService.getAll()).then(() => {
      setCurrentSuscriptions(
        suscriptions.filter(
          (suscription) =>
            suscription.userId === data.userId &&
            suscription.activityId === activity.id
        )
      ).then(() => {
        currentSuscriptions.forEach((suscription) =>
          SuscriptionService.deleteOne(suscription.id)
            .then(() => {
              console.log("Activity removed from agenda!");
              setAddedToAgenda(false); // set to false after removing from agenda
            })
            .catch((err) => {
              console.log(err);
            })
        );
      });
    });
  }

  return (
    <>
      {props.type === "add" ? (
        <Button
          addedToAgenda={addedToAgenda}
          onClick={addedToAgenda ? removeFromAgenda : addToAgenda}
        >
          {addedToAgenda ? "Added!" : "Add to agenda"}
        </Button>
      ) : null}
      {props.type === "delete" ? (
        <Button onClick={removeFromAgenda}>Remove from agenda</Button>
      ) : null}
    </>
  );
}
