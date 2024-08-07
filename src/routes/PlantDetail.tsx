import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PlantProps } from "../components/Plant";
import classes from "./PlantDetail.module.css";
import { Modal } from "../components/Modal";

export default function PlantDetail() {
  const [plant, setPlant] = useState<PlantProps>();
  let { plantId } = useParams();

  useEffect(() => {
    const getPlant = async () => {
      const response = await fetch("http://localhost:8080/plants/" + plantId);
      const data = await response.json();
      return data.plant as PlantProps;
    };

    getPlant()
      .then((plant) => setPlant(plant))
      .catch((e) => setPlant(undefined));
  }, []);

  if (!plant) {
    return (
      <Modal>
        <div>Nooo!</div>
      </Modal>
    );
  } else {
    return (
      <Modal>
        <div className={classes.plant}>
          <img className={classes.plantImage} src={plant.image} />
          <h2> {plant.name} </h2>
          <div>Water needs: {plant.water}</div>
          <div>Type: {plant.type}</div>
        </div>
      </Modal>
    );
  }
}
