const search = (fileString, keyword) => {
  const indexes = [];  // [[1, 4], [5, 10]]
  while (fileString.indexOf(keyword) >= 0) {
    const index = fileString.search(keyword);
    fileString = fileString.substr(index + keyword.length);
    indexes.push([index, index + keyword.length]);
  }
  return indexes;
};

export default search;
