export const areTheSameElements = (array) => {
  const set = new Set(array);
  console.log(set);
  return set.size === 1;
};
