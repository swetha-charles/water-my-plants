import { Link } from "react-router-dom";
import classes from "./NavMenu.module.css";

export default function NavMenu() {
  return (
    <nav className={classes.navMenu}>
      <ul className={classes.linkList}>
        <li>
          <Link className={classes.link} to={"/plants"}>Plants</Link>
        </li>
        <li><Link className={classes.link}  to={'/watering-schedule'}>Watering Schedule</Link></li>
        <button>Add new plant</button>
      </ul>
    </nav>
  );
}
