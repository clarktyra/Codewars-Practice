// https://www.codewars.com/kata/remove-anchor-from-url/train/javascript
// 7 kyu
// Remove anchor from URL
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
// Examples:
// // returns 'www.codewars.com'
// removeUrlAnchor('www.codewars.com#about')

// // returns 'www.codewars.com?page=1' 
// removeUrlAnchor('www.codewars.com?page=1')

//Solution

function removeUrlAnchor(url){
  var everything = url.split('#');
  return everything[0];
}