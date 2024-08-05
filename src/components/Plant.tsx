import classes from './Plant.module.css'

type PlantProps = {
  name: string;
  type: string;
  image: string;
  water: string;
};

export default function Plant({ name, type, water, image }: PlantProps) {
  return (
    <div className={classes.plant}>
      <img className={classes.plantImage} src={image} />
      <div>
        <h2> {name} </h2>
      </div>
      <div>Water needs: {water}</div>
      <div>Type: {type}</div>
    </div>
  );
}
