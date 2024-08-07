import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";

type ModalProps = {
    children: JSX.Element;
}

export function Modal({children}: ModalProps) {
  const navigate = useNavigate()

  function closeHandler() {
    // programmatic navigation
    navigate('..')
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}
