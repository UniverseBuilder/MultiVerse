const localISOString = function (array, key, parseKey) {
  var tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
  return new Date(Date.now() - tzoffset)
    .toISOString()
    .slice(0, -5)
    .replace('T', ' ');
};

export default localISOString;
