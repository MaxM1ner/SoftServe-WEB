import { useContext } from "react";
import { ActivitiesContext } from "../contexts/activities.context";

export default function Header() {
  let { favorite } = useContext(ActivitiesContext);

  return (
    <header>
      <h1>Activities List</h1>
      <span>Favorite activities: {favorite}</span>
    </header>
  );
}
