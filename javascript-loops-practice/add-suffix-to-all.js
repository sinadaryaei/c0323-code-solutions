/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const newArray = [];
  for (let i = 0; i < words.length; i++) {
    const suffixAdd = words[i] + suffix;
    newArray.push(suffixAdd);
  }
  return newArray;
}
