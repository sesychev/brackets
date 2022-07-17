module.exports = function check(str, bracketsConfig) {
  // your solution
  let array = [];
  let top = 0;
  //just for fun
  for (const bracket of str) {
    for (const item of bracketsConfig) {
      if (bracket === item[0] && bracket !== item[1]) {
        array.push(bracket);
        top++;
      } else if (bracket === item[1]) {
        const element = array.pop();
        if (element === item[0]) {
          top--;
        } else if (element) {
          array.push(element);
          array.push(bracket);
          top++;
        } else {
          array.push(bracket);
          top++;
        }
      }
    }
    console.log(array);
  }

  return array.length === 0;
};
