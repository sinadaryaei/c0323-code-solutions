/* exported getKeys */
function getKeys(object) {
  const objArray = [];
  for (const property in object) {
    objArray.push(property);
  }
  return objArray;
}
