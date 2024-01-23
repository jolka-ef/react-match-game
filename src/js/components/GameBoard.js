import styles from "../../css/GameBoard.module.css";
import { useEffect, useState } from "react";
import { cardsAreAMatch } from "../../utils/cardsAreAMatch";
import { Card } from "./Card";
import { cardsKeys } from "../../utils/cards/createCardsKeys";
import { isInTheArray } from "../../utils/isInTheArray";

export const GameBoard = ({ setShowEndDialog }) => {
  const [chosenCards, setChosenCards] = useState([]);
  const [successfulMatches, setSuccessfulMatches] = useState([]);
  const [turns, setTurns] = useState(0);

  /**
   * Checks if chosen cards match.
   * @param {Array} chosenCards  - List of cardKeys of chosen cards.
   */
  useEffect(() => {
    if (chosenCards.length === 2) {
      if (cardsAreAMatch(chosenCards)) {
        setTimeout(
          () => setSuccessfulMatches([...successfulMatches, ...chosenCards]),
          4000
        );
      }
      setTimeout(() => setChosenCards([]), 4000);
      setTurns(turns + 1);
    }
  }, [chosenCards]);

  /**
   * Checks if game is over.
   * @param {Array} successfulMatches - List of keys of inactive cards.
   */
  useEffect(() => {
    if (successfulMatches.length === cardsKeys.length) {
      setShowEndDialog(true);
    }
  }, [successfulMatches]);

  return (
    <>
      <main>
        <section>
          <header className={styles.Score}>
            <h2 className={styles["Score-heading"]}>
              Matches : {successfulMatches.length / 2}
            </h2>
            <h2 className={styles["Score-heading"]}>Turns : {turns}</h2>
          </header>
          <ul className={styles.Cards}>
            {cardsKeys.map((cardKey, index) => {
              const isInactive = isInTheArray(successfulMatches, cardKey);
              return (
                <li key={index}>
                  <Card
                    chosenCards={chosenCards}
                    card={cardKey}
                    inactive={isInactive}
                    setChosenCards={setChosenCards}
                  />
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
};
