/* exported toObject */
function toObject(keyValuePair) {
  const value = {};
  value[keyValuePair[0]] = keyValuePair[1];
  return value;
}
