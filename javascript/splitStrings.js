// Complete the solution so that it splits the string into pairs of two
// characters. If the string contains an odd number of characters then it
// should replace the missing second character of the final pair with an
// underscore ('_').

function solution(str){
    let arr=[] ;
    for(let i=1;i<str.length;i+=2){
      arr.push(String(str[i-1]+str[i]));
    }
    if(str.length%2!==0)
      arr.push(String(str[str.length-1]+"_"));
    return arr;
 }