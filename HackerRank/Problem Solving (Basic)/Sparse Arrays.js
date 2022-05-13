function matchingStrings(strings, queries) {
  return queries.map(query => {
     return strings.filter(string => string === query).length; 
  });
}