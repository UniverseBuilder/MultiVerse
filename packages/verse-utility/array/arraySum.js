const arraySum = (array, predicate) => {
  let sum = 0;
  if (predicate) {
    for (let i = 0; i < array.length; i++) {
      sum += Number(array[i][predicate]);
    }
  } else {
    for (let i = 0; i < array.length; i++) {
      sum += Number(array[i]);
    }
  }
  return sum;
};

export default arraySum;
