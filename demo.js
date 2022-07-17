function check(str, bracketsConfig) {
  // your solution
  let array = [];
  //"|(|)"
  for (const bracket of str) {
    for (const item of bracketsConfig) {
      if (bracket === item[0]) {
        array.push(bracket);
        //console.log(bracket);
      }
      if (bracket === item[1]) {
        const element = array.pop();
        //console.log(element);
        if (!array.pop()) {
          array.push(bracket);
        }
      }
    }
  }

  return array.length === 0;
}

const config1 = [["(", ")"]];
const config2 = [
  ["(", ")"],
  ["[", "]"],
];
const config3 = [
  ["(", ")"],
  ["[", "]"],
  ["{", "}"],
];
const config4 = [["|", "|"]];
const config5 = [
  ["(", ")"],
  ["|", "|"],
];
const config6 = [
  ["1", "2"],
  ["3", "4"],
  ["5", "6"],
  ["7", "7"],
  ["8", "8"],
];
const config7 = [
  ["(", ")"],
  ["[", "]"],
  ["{", "}"],
  ["|", "|"],
];

console.log(check("|(|)", config5));
