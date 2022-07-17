module.exports = function check(str, bracketsConfig) {
  // your solution
  let array = [];

  for (const bracket of str) {
    for (const item of bracketsConfig) {
      if (bracket === item[0]) {
        array.push(bracket);
      }
      if (bracket === item[1]) {
        const element = array.pop();
        if (element !== item[0]) {
          array.push(bracket);
        }
      }
    }
  }

  return array.length === 0;
};
