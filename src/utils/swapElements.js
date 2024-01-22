/**
 * Swaps two elements in array at given indexes.
 * @param {!Array} array - The array to swap elements.
 * @param {!number} i - The value of first index.
 * @param {!number} j - The value of second index.
 */

export const swapElements = (array, i, j) => {
  [array[i], array[j]] = [array[j], array[i]];
};
