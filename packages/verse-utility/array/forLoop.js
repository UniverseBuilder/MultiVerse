import largestNumber from '../numbers/largestNumber';

const forLoop = (array, predicate) => {
  for (let i = 0; i < array.length; i++) {
    predicate(array[i], i);
  }
};

export default forLoop;
