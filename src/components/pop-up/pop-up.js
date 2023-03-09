import "./pop-up.scss";
// This is the expanded version of the Card component:
// Like Card it will display Activity name, Activity image, and add/remove button.
//As well as description, location, and duration of the activity.

export default function Popup(props) {
  return (
    <div className="popup">
      <div className="popup\_inner">
        <h1>{props.text}</h1>
        <button onClick={props.closePopup}>close me</button>
      </div>
    </div>
  );
}
