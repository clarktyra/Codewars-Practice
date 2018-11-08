// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
// 7 kyu
// Shortest Word
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

//Solution
function findShort(s){
    var array = s.split(' ');  
    var smallest = array.reduce((shortestWord, currentWord) => {
      return currentWord.length < shortestWord.length ? currentWord : shortestWord
      }, array[0]);
    return smallest.length;
  }