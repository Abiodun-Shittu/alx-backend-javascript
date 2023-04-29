const cleanSet = (set, startString) => {
  if (!set || !startString) return '';
  const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));
  const cleanedValues = filteredValues.map((value) => value.slice(startString.length));
  return cleanedValues.join('-');
};

export default cleanSet;
