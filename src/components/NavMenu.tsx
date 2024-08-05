import classes from "./NavMenu.module.css";

export default function NavMenu() {
  return (
    <div className={classes.navMenu}>
      <ul className={classes.linkList}>
        <div>My Plants</div>
        <div>Watering Schedule</div>
      </ul>
    </div>
  );
}
