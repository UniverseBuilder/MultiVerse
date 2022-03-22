const localTimeZone = function () {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};

export default localTimeZone;
