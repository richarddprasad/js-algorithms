// This function takes an optional second parameter
// All arguments must be integers, else undefined will be returned
// If only one valid argument is provided, a function is returned

function addTogether() {
    console.log(arguments.length);
    console.log("arg1: " + arguments[0]);
    if(arguments.length > 1) {
      console.log("arg2: " + arguments[1]);
    }
    
  
    let rv = undefined;
  
    if(arguments.length === 1) {
      if(Number.isInteger(arguments[0])) {
        rv = arg2 => {
          if(Number.isInteger(arg2)) {
            return arg2 + arguments[0];
          } else {
            return undefined;
          }
        };
      }
    } else {
      if(Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
        rv = arguments[0] + arguments[1];
      }
    }
  
    console.log("rv: " + rv);
    console.log("**************");
  
    return rv;
  }
  
  console.log(addTogether(2, 3)); //should return 5.
  console.log(addTogether(2)(3)); //should return 5.
  console.log(addTogether("http://bit.ly/IqT6zt")); //should return undefined.
  console.log(addTogether(2, "3")); //should return undefined.
  console.log(addTogether(2)([3])); //should return undefined.