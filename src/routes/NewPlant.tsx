import { FormEvent } from "react";
import { Modal } from "../components/Modal";
import styles from "./NewPlant.module.css";
import { useNavigate } from "react-router-dom";

export default function NewPlant() {
  const navigate = useNavigate()

  function closeHandler() {
    // programmatic navigation
    navigate('..')
  }
  
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Array.from(formData.entries()).reduce(
      (acc, entry) => ({ ...acc, [entry[0]]: entry[1] }),
      {}
    );
    const body = JSON.stringify(data);

    try {
      const result = await fetch("http://localhost:8080/plants", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body,
      });
      console.log(result);
    } catch (e) {
      console.log("error!!!", e);
    }
  };

  return (
    <Modal>
      <form onSubmit={handleSubmit} className={styles.newPlantForm}>
        <div className={styles.newPlantDetail}>
          <label htmlFor="name">Enter plant name:</label>
          <input name="name" type="text" />
        </div>
        <div className={styles.newPlantDetail}>
          <label htmlFor="image">Enter plant image URL:</label>
          <input name="image" type="url" />
        </div>
        <div className={styles.newPlantDetail}>
          <label htmlFor="type">Enter plant type:</label>
          <input name="type" type="text" />
        </div>
        <div className={styles.newPlantDetail}>
          <label htmlFor="water">Choose watering schedule:</label>
          <select name="water">
            <option value="high">Once a week</option>
            <option value="med">Once every 2 weeks</option>
            <option value="low">Once every 4 weeks</option>
          </select>
        </div>
        <div className={styles.newPlantDetail}>
          <label><button type="submit">Add new plant</button></label>
          <label><button onClick={closeHandler}>Close</button></label>
        </div>
      </form>
    </Modal>
  );
}
