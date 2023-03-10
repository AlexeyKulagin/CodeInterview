/*
Longest Word
============
Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"

Examples
--------
Input: "fun&!! time"
Output: time

Input: "I love dogs"
Output: love
*/

function LongestWord(sen) {

  // code goes here 

  if (sen.length <= 0) return 'Error: The string shouldn’t be empty!'
  else {
    const cleanStr = sen.replace(/[.,;:!-?]/g, '')
    const arrOfWords = cleanStr.split(' ')
    let maxLength = 0
    let maxWord = ' '
    console.log(arrOfWords)
    for (let i of arrOfWords) {
      let j = i.length
      if (j > maxLength) {
        maxLength = j
        maxWord = i
      }
    }

    return maxWord;
  }

}

// keep this function call here 
console.log(LongestWord("67Hello! How; are: you., doing12-?"));
