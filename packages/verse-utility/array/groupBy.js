const groupBy = function (array, key, parseKey) {
  return array.reduce(function (item, x) {
    const valueKey = parseKey ? parseKey(x[key]) : key;
    (item[valueKey] = item[valueKey] || []).push(x);
    return item;
  }, {});
};

export default groupBy;
