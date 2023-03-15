import { useState } from "react";
import { Button } from "./styles.js";
import SuscriptionService from "../../../services/suscription.service"

export default function PopupButton(props) {

  const [suscriptions, setSuscriptions] = useState([]);
  const [currentSuscriptions, setCurrentSuscriptions] = useState([]);
  // Receive the info of activity from the page
  const activity = props.activity;

  var data = {
    start_time: new Date(),
    end_time: new Date(),
    userId: localStorage.getItem("userId"),
    activityId: activity.id
  }

  function addToAgenda() {
    console.log(data);
    SuscriptionService.create(data).then(data => {
      //Do anything then data return.
      
    }).catch(err => {
      console.log(err);
    })
  }

  function removeFromAgenda() {
    setSuscriptions(SuscriptionService.getAll())
    .then(() => {
      setCurrentSuscriptions(suscriptions.filter(suscription => suscription.userId === data.userId && suscription.activityId === activity.id))
      .then(() => {
        currentSuscriptions.forEach(suscription => 
          SuscriptionService.deleteOne(suscription.id).then(data => {
            //Do anything then data return.
              
          }).catch(err => {
            console.log(err);
          })
        )
      })
    })
    
  }

  return (
    <>
    {props.type === "add" ? (
      <Button onClick={addToAgenda}>Add to agenda</Button>
    ) : null}
    {props.type === "delete" ? (
      <Button onClick={removeFromAgenda}>Remove from agenda</Button>
    ) : null}
    </>
  );
}
