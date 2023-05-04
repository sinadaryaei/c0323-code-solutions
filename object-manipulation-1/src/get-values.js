/* exported getValues */
function getValues(object) {
  const objArray = [];
  for (const property in object) {
    objArray.push(object[property]);
  }
  return objArray;
}
