// https://www.codewars.com/kata/remove-duplicate-words/train/javascript
// 7 kyu
// Remove duplicate words
// Your task is to remove all duplicate words from string, leaving only single (first) words entries.
// Example:
// Input:
// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
// Output:
// 'alpha beta gamma delta'

//Solution

function removeDuplicateWords (s) {
  var array = s.split(' ');
  let uniqueArray = [...new Set(array)];
  var string = uniqueArray.toString().replace(/,/g , ' ');
  return string;
}