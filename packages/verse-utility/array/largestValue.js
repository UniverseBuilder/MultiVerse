import largestNumber from '../numbers/largestNumber';

const largestValue = (array, predicate) => {
  return array.reduce((acc, item) => {
    console.log(acc[predicate], item[predicate]);
    if (largestNumber(acc[predicate], item[predicate])) {
      acc.push(item);
      return acc;
    }
  }, []);
};

export default largestValue;
