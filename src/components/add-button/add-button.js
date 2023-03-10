// A button component that can be used to add a new item to a list but also remove an item from a list.
// The button will have a different label depending on whether it is being used to add or remove an item.
import { Button } from "./styles.js";

export function AddButton(props) {
  return (
    <Button
      onClick={() => {
        props.onClick();
      }}
    >
      +
    </Button>
  );
}
