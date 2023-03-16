import { React, useState, useCallback } from "react";
import { Activity, CardDiv, Title, Image, ImageDiv, ImageDim, AddButtonDiv } from "./styles";
import { AddButton } from "../add-button/add-button";
import { Popup } from "../pop-up/pop-up";

// Card component that will display Activity name, Activity image, and add/remove button
export function Card(props) {

  // Receive the info of activity from the page
  const activity = props.activity;

  // Initial state of popup is false
  const [popup, setPopup] = useState(false);

  const togglePopup = useCallback(() => {
    setPopup(!popup);
  }, [popup]);

  // If popup is true, then render the Popup component
  if (popup) {
    return <Popup togglePopup={togglePopup} activity={activity} type={props.type}/>;
  }

  return (
    <Activity>
      <Title>{activity.name}</Title>
      <CardDiv onClick={togglePopup}>
        <ImageDiv>
          <ImageDim>
            <Image src={'http://localhost:8081/public/images/' + activity.filename}/>
          </ImageDim>
        </ImageDiv>
        <AddButtonDiv>
          <AddButton buttonImage={`/images/${props.type}.png`}/>
        </AddButtonDiv>
      </CardDiv>
    </Activity>
  );
}
