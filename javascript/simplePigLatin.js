// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  str = str.split(" ");
  str.forEach(function (el, i, str) {
    if (str[i].charCodeAt(0) > 64 && str[i].charCodeAt(0) < 123) {
      str[i] += str[i][0] + "ay";
      str[i] = str[i].slice(1);
    }
  });
  return str.join(" ");
}
