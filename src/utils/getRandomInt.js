/**
 * Gets random integer from closed range [0, toNumber] (includes both ends)
 * @param {!number} toNumber - Maximum  value (integer number)
 */

export const getRandomInt = (toNumber) =>
  Math.floor(Math.random() * toNumber + 1);
