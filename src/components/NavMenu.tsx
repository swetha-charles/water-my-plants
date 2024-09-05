import { Link } from "react-router-dom";
import classes from "./NavMenu.module.css";
import AddPlantButton from "./AddPlantButton";

export default function NavMenu() {
  return (
    <nav className={classes.navMenu}>
      <ul className={classes.linkList}>
        <li>
          <Link to={"/"}>Plants</Link>
        </li>
        <li>
          <Link to={"/watering-schedule"}>Watering Schedule</Link>
        </li>
        <li>
          <Link to={"/add-new-plant"}>
            <AddPlantButton />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
