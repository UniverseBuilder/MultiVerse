export const getInitials = text => {
  const textArr = text.split(' ');
  let initials = '';
  for (let i = 0; i < textArr.length; i++) {
    initials += textArr[i].trim().substr(0, 1);
  }
  return initials.toUpperCase();
};
