import { BackFace } from "../../svg/BackFace";
import { FrontFace } from "../../svg/FrontFace";
import styles from "../../css/Card.module.css";
import { isInTheArray } from "../../utils/isInTheArray";

export const Card = ({ card, chosenCards, inactive, setChosenCards }) => {
  const isChosen = isInTheArray(chosenCards, card);

  const handleClick = () => {
    if (!isChosen && chosenCards.length < 2) {
      setChosenCards([...chosenCards, card]);
    }
  };
  return (
    <button className={styles.Button} disabled={inactive} onClick={handleClick}>
      <figure
        className={`${styles.Container} ${
          isChosen && styles["Container--chosen"]
        } ${inactive && styles["Container--inactive"]}`}
      >
        <BackFace className={styles.Back} />
        <FrontFace className={styles.Front} color={card.split("_")[0]} />
      </figure>
    </button>
  );
};
