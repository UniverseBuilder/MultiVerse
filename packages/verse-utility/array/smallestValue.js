import smallestNumber from '../numbers/smallestNumber';

const lesserThan = (array, predicate) => {
  return array.reduce((previousValue, currentValue) => {
    if (predicate) {
      return smallestNumber(previousValue[predicate], currentValue[predicate]);
    }
    return smallestNumber(previousValue, currentValue);
  }, []);
};

export default lesserThan;
