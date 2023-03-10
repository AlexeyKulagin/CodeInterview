/*
First Reverse
=============
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.

Examples
--------
Input: "coderbyte"
Output: etybredoc

Input: "I Love Code"
Output: edoC evoL I
*/

function FirstReverse(str) { 

    // code goes here 
  
    let strOut = ''
    for (let i = str.length -1; i >= 0; i--) {
      strOut += str[i]
    }
    return strOut
}
     
console.log(FirstReverse("I Love Code"));