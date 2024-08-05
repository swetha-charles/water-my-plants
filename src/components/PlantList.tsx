import { useEffect, useState } from "react";
import Plant from "./Plant";
import classes from "./PlantList.module.css";

type PlantType = {
  name: string;
  image: string;
  type: string;
  water: string;
}

export default function PlantList() {
  const [plants, setPlants] = useState<PlantType[]>([]);

  useEffect(() => {
    const getPlants = async () => {
      const response = await fetch("http://localhost:8080/plants");
      const data = await response.json();
      return data.plants as PlantType[];
    };

    getPlants()
      .then((plants) => setPlants(plants))
      .catch((_) => setPlants([]));
  }, []);

  return (
    <div>
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
