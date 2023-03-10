import { Button } from "./styles.js";

export default function PopupButton(props) {
  return (
    <Button
      onClick={() => {
        props.onClick();
      }}
    >
      Add to agenda
    </Button>
  );
}
