import styles from "../../css/Dialog.module.css";
import { useEffect, useRef } from "react";

export const Dialog = ({ open, setShowEndDialog }) => {
  const dialogRef = useRef();

  /**
   * Opens and closes dialog box.
   * @param {boolean} open .
   */
  useEffect(() => {
    const element = dialogRef.current;
    if (open) {
      element.showModal();
    } else {
      element.close();
    }
  }, [open]);

  /**
   * Handles closing dialog with the Esc key.
   */
  useEffect(() => {
    const element = dialogRef.current;
    const handleCancel = () => {
      setShowEndDialog(false);
    };
    element.addEventListener("cancel", handleCancel);
    return () => {
      element.removeEventListener("cancel", handleCancel);
    };
  }, []);

  /**
   * Handles closing dialog with clicking somewhere on the page.
   */
  const handleClickOutside = (event) => {
    const element = dialogRef.current;
    const elementPosition = element.getBoundingClientRect();
    if (
      event.clientX < elementPosition.left ||
      event.clientX > elementPosition.right ||
      event.clientY < elementPosition.top ||
      event.clientY > elementPosition.bottom
    ) {
      setShowEndDialog(false);
    }
  };

  return (
    <dialog className={styles.Box} onClick={handleClickOutside} ref={dialogRef}>
      <p> Congrats !!! </p>
      <p> You made it! </p>
    </dialog>
  );
};
