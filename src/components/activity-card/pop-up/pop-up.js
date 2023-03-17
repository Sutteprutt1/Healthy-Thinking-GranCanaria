import {
  PopUp,
  CardDiv,
  Description,
  Title,
  Image,
  ImageDiv,
  DarkFilter,
  ExitButton,
} from "./styles";
import PopupButton from "./popup-button";

// This is the expanded version of the Card component:
// Like Card it will display Activity name, Activity image, and add/remove button.
//As well as description, location, and duration of the activity.

export function Popup(props) {
  // Receive the info of activity from the page
  const activity = props.activity;

  const { togglePopup } = props;

  function handleClose() {
    togglePopup();
  }

  return (
    <PopUp>
      <DarkFilter onClick={handleClose} />
      <CardDiv>
        <ExitButton onClick={handleClose}>X</ExitButton>
        <Title>{activity.name}</Title>
        <ImageDiv>
          <Image
            src={"https://healthy-thinking.onrender.com/public/images/" + activity.filename}
          />
        </ImageDiv>
        <Description>{activity.description}</Description>
        <PopupButton
          activity={activity}
          type={props.type}
          togglePopup={togglePopup}
        />
      </CardDiv>
    </PopUp>
  );
}
