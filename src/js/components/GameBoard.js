import { Card } from "./Card";
import styles from "../../css/GameBoard.module.css";
import { useEffect, useState } from "react";
import { cards } from "../../utils/cards/createCards";
import { cardsAreAMatch } from "../../utils/cards/cardsAreAMatch";
import { areTheSameElements } from "../../utils/areTheSameElements";
import { isInTheArray } from "../../utils/isInTheArray";
import { cardsKeys } from "../../utils/cards/createCardsKeys";

export const GameBoard = () => {
  const [chosenCards, setChosenCards] = useState([]);
  const [successfulMatches, setSuccessfulMatches] = useState([]);
  const [turns, setTurns] = useState(0);

  /**
   * Checks if chosen cards match.
   * @param {Array} chosenCards  - List of cardKeys of chosen cards.
   */
  useEffect(() => {
    if (chosenCards.length === 2) {
      if (areTheSameElements(chosenCards)) {
        setTimeout(
          () => setSuccessfulMatches([...successfulMatches, chosenCards[0]]),
          4000
        );
      }
      setTimeout(() => setChosenCards([]), 4000);
      setTurns(turns + 1);
    }
  }, [chosenCards]);
  return (
    <main>
      <section className="BoardGame">
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
  );
};
