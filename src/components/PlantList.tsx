import Plant from "./Plant";
import classes from "./PlantList.module.css"

import data from "./plants.json";

const plants = data.plants;

export default function PlantList() {
  return (
    <div >
      {plants.length > 0 && (
        <ul className={classes.plantList}>
          {plants.map((plant) => (
            <Plant {...plant} />
          ))}
        </ul>
      )}
    </div>
  );
}
