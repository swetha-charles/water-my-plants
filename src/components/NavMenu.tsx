import { Link } from "react-router-dom";
import classes from "./NavMenu.module.css";

export default function NavMenu() {
  return (
    <nav className={classes.navMenu}>
      <ul className={classes.linkList}>
        <li>
          <Link to={"/plants"}>Plants</Link>
        </li>
        <li><Link to={'/watering-schedule'}>Watering Schedule</Link></li>
      </ul>
    </nav>
  );
}
