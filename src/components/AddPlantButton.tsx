import styles from "./AddPlantButton.module.css";
export default function AddPlantButton() {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.addPlantButton}>Add new plant</button>
    </div>
  );
}
