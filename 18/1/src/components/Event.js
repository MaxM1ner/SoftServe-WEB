import React, { useContext, useEffect, useRef, useState } from "react";
import { ActivitiesContext } from "../contexts/activities.context";

export default function (props) {
  let checkRef = React.createRef();
  let { favorite, setFavorite } = useContext(ActivitiesContext);

  const [className, setClassName] = useState("eventDescription");
  const inputEl = useRef(null);

  let change = () => {
    if (checkRef.current.checked) {
      setFavorite(favorite + 1);
    } else {
      setFavorite(favorite - 1);
    }
  };

  let clicked = () => {
    if (className === "eventDescription") {
      setClassName("eventVisible");
    } else {
      setClassName("eventDescription");
    }
  };

  return (
    <div className="event" onClick={clicked}>
      <p className="eventName">{props.name}</p>
      <p className={className} ref={inputEl}>
        {props.description}
      </p>
      <label>
        Favorite
        <input
          type="checkbox"
          id="favCheck"
          onChange={change}
          ref={checkRef}
        ></input>
      </label>
    </div>
  );
}
