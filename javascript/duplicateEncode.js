// The goal of this exercise is to convert a string to a new string where each character
// in the new string is "(" if that character appears only once in the original string,
// or ")" if that character appears more than once in the original string.
// Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word){
    let result='';
    word=word.toLowerCase();
    for(let i=0;i<word.length;i++)
      word.indexOf(word[i])===word.lastIndexOf(word[i]) ? result+="(" : result+=")"
    return result;
}
