/**
 * Creates array of cards keys .
 * @param {Array} cards - array of cards colors
 */

import { colors } from "./colors";
import { createCards } from "./createCards";

const createCardsKeys = (cards, separator = "_") =>
  cards.map((color, index) => `${color}${separator}${index}`);

export const cardsKeys = createCardsKeys(createCards(colors));
