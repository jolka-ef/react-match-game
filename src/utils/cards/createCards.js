import { getRandomInt } from "../getRandomInt";
import { getValues } from "../getValues";

import { swapElements } from "../swapElements";
import { colors } from "./colors";

/**
 * Creates randomized array of cards .
 * @param {Object} colors - object with colors names and values
 */

export const createCards = (colors) => {
  const cards = [...getValues(colors), ...getValues(colors)];
  for (let index = cards.length - 1; index > 1; index--) {
    const randomInt = getRandomInt(index);
    swapElements(cards, randomInt, index);
  }
  return cards;
};
export const cards = createCards(colors);
