const filterFunctions = {
  equals: (a, b) => a === b,
  'greater than': (a, b) => a > b,
  'lesser than': (a, b) => a < b,
  'starts With': (a, b) => a.startsWith(b),
  'ends With': (a, b) => a.endsWith(b),
  includes: (a, b) => a.includes(b),
  'not equals': (a, b) => a !== b,
};

export const powerFilter = (data, filters) => {
  return data.filter(item =>
    Object.keys(filters).reduce((acc, q) => {
      if (filters[q].column?.dataType === 'Number') {
        return filterFunctions[filters[q].operator](
          item[q],
          Number(filters[q].input)
        );
      }
      return filterFunctions[filters[q].operator](
        item[q].toLowerCase(),
        filters[q].input.toLowerCase()
      );
    }, [])
  );
};
