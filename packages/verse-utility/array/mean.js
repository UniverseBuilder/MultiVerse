import arraySum from './arraySum';
import round from '../utility/round';

const mean = (array, days, predicate) => {
  return round(arraySum(array, predicate) / days);
};

export default mean;
