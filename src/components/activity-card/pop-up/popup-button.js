import { Button } from "./styles.js";
import SuscriptionService from "../../../services/suscription.service"

export default function PopupButton(props) {

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

  return <Button onClick={addToAgenda} >Add to agenda</Button>;
}
