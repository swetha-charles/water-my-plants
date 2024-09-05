import { Modal } from "../components/Modal";
import styles from "./NewPlant.module.css";

export default function NewPlant() {
  return (
    <Modal>
      <form className={styles.newPlantForm}>
        <div className={styles.newPlantDetail}>
          <label htmlFor="name">Enter plant name:</label>
          <input name="name" type="text" />
        </div>
        <div className={styles.newPlantDetail}>
          <label htmlFor="type">Enter plant type:</label>
          <input name="type" type="text" />
        </div>
        <div className={styles.newPlantDetail}>
          <label htmlFor="water">Choose watering schedule:</label>
          <select name="water">
            <option value="1">Once a week</option>
            <option value="2">Once every 2 weeks</option>
            <option value="4">Once every 4 weeks</option>
          </select>
        </div>
        <button type="submit">Add new plant</button>
      </form>
    </Modal>
  );
}
