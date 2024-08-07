import { Link } from "react-router-dom";
import classes from "./Plant.module.css";

export type PlantProps = {
  id: string;
  name: string;
  type: string;
  image: string;
  water: string;
};

export default function Plant({ id, name, type, water, image }: PlantProps) {
  return (
    <li className={classes.plant}>
      <Link to={id}>
        <img className={classes.plantImage} src={image} />
        <h2> {name} </h2>
        <div>Water needs: {water}</div>
        <div>Type: {type}</div>
      </Link>
    </li>
  );
}
