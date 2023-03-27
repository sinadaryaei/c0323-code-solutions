/* exported countdown */
function countdown(number) {
  const result = [];
  let countdown = number;
  while (countdown >= 0) {
    result.push(countdown);
    countdown--;
  }
  return result;
}
