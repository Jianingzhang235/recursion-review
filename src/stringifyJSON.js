// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  // your code goes here
  // check type of obj
  var result = '';

  if (typeof obj === 'string') {
    result += '"' + obj + '"';
  } else if (typeof obj === 'boolean' || typeof obj === 'number') {
    result += String(obj);
  } else if (obj === null) {
    result += 'null';
  } else if (isNaN(obj)) {
    result += 'NaN';
  }
  return result;
};

/*

input: any kind of data(number, string, boolean, array, obj, null, NaN)
output: single string
constraints:
edge cases: function or undefined or symbol

*/