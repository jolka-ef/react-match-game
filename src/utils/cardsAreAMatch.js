export const cardsAreAMatch = (cardsKeys, separator = "_") => {
  const [firstCard, secondCard] = cardsKeys;
  const [firstColor] = firstCard.split(separator);
  const [secondColor] = secondCard.split(separator);
  return firstColor === secondColor;
};
