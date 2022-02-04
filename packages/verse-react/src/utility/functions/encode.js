export const encode = data => {
  let hex, i;
  let result = '';
  for (i = 0; i < data.length; i++) {
    hex = data.charCodeAt(i).toString(16);
    result += ('000' + hex).slice(-4);
  }
  return btoa(result);
};

export const decode = encodedString => {
  let data = atob(encodedString);
  let j;
  let hexes = data.match(/.{1,4}/g) || [];
  let back = '';
  for (j = 0; j < hexes.length; j++) {
    back += String.fromCharCode(parseInt(hexes[j], 16));
  }
  return back;
};
