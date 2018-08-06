// Flatten an array of nested arrays

function flattenArray(arr) {
  let rv = [];

  let flatten = function(a) {
    if(!(a instanceof Array)) {
      rv.push(a);
    } else {
      for(let el in a) {
        flatten(a[el]);
      }
    }
  };

  arr.forEach(flatten);
  console.log(rv);

  return rv;

}

flattenArray([1, [2], [3, [[4]]]]);