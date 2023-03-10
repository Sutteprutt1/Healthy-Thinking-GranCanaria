import { CardDiv, Description, Title } from "./styles";
import PopupButton from "./popup-button";

// This is the expanded version of the Card component:
// Like Card it will display Activity name, Activity image, and add/remove button.
//As well as description, location, and duration of the activity.

export function Popup(props) {
  const { togglePopup } = props;

  function handleClose() {
    togglePopup();
  }

  return (
    <CardDiv>
      <button onClick={handleClose}>X</button>
      <Title>Arrucas Botanical Park</Title>
      <Description>Hæ this is a placeholder. Just a test! </Description>
      <PopupButton />
    </CardDiv>
  );
}
