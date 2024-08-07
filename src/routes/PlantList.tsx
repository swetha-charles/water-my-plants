import { useEffect, useState } from "react";
import Plant from "./../components/Plant";
import classes from "./PlantList.module.css";
import { PlantProps } from "./../components/Plant";
import { Outlet } from "react-router-dom";

export default function PlantList() {
  const [plants, setPlants] = useState<PlantProps[]>([]);

  useEffect(() => {
    const getPlants = async () => {
      const response = await fetch("http://localhost:8080/plants");
      const data = await response.json();
      return data.plants as PlantProps[];
    };

    getPlants()
      .then((plants) => setPlants(plants))
      .catch((_) => setPlants([]));
  }, []);

  return (
    <>
      <Outlet />
      <div>
        {plants.length > 0 && (
          <ul className={classes.plantList}>
            {plants.map((plant) => (
              <Plant key={plant.id} {...plant} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
