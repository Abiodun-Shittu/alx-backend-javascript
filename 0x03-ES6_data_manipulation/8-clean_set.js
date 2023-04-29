const cleanSet = (set, startString) => {
  let result = '';
  if (!startString) {
    return result;
  }
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      result += `${value.slice(startString.length)}-`;
    }
  });
  // remove the last dash and return the result
  return result.slice(0, -1);
};

export default cleanSet;
