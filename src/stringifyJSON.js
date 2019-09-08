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
    return result;
  
  } else if (isNaN(obj)) {
    result += 'NaN';
  }

  if (Array.isArray(obj)) {
    result = '['
    for (var i = 0; i < obj.length; i++) {
      result += stringifyJSON(obj[i]) + ',';
    }
    if (result[result.length - 1] === ',') {
      result = result.slice(0, -1);
    }
    result += ']';
  } else if(typeof obj ==='object') {
    result = '{';
    for(var key in obj) {
      if(obj[key] !== undefined && typeof obj[key] !== 'function' && typeof obj[key] !== 'symbol') {
        result += '"' + key + '":';
        result = result + stringifyJSON(obj[key]) + ',';
      };
    }
    if(result.slice(-1) === ',') {
      result = result.slice(0, -1);
    }
    result += '}';
  }
  return result;
};

/*

input: any kind of data(number, string, boolean, array, obj, null, NaN)
output: single string
constraints:
edge cases: function or undefined or symbol

*/