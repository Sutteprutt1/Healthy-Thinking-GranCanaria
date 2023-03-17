import { useState } from "react";
import { Button } from "./styles.js";
import SuscriptionService from "../../../services/suscription.service";

export default function PopupButton(props) {
  // const [suscriptions, setSuscriptions] = useState([]);
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
    SuscriptionService.getAll().then((data) => {
      try {
        data.map((info, index) => {
          console.log('subscription: ' + info + ' - ' + info.userId);
          if (info.userId === localStorage.getItem('userId') && info.activityId === activity.id) {
            SuscriptionService.deleteOne(info.id).then(() => {
              console.log("Activity removed from agenda!");
              setAddedToAgenda(false); // set to false after removing from agenda
            }).catch((err) => {
              console.log(err);
            });
          } else {
            console.log('Something is wrong');
          }
        })
      } catch {
        console.log(data);
        if (data.userId === localStorage.getItem('userId') && data.activityId === activity.id) {
          SuscriptionService.deleteOne(data.id).then(() => {
            console.log("Activity removed from agenda!");
            setAddedToAgenda(false); // set to false after removing from agenda
          }).catch((err) => {
            console.log(err);
          });
        } else {
          console.log('Something is wrong');
        }
      }
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
