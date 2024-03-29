const search = (fileString, keyword) => {
  const indexes = [];  // [[1, 4], [5, 10]
  const index = fileString.search(keyword);
  if (index < 0) {
    return [];
  }
  indexes.push([index, index + keyword.length]);
  return indexes;
};

export default search;
