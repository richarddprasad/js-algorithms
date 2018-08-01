function sortedUnion(arr) {
    let temp = [];
  
    // Copy everything into a single array
    for(let i = 0; i < arguments.length; i++) {
      arguments[i].forEach(el => temp.push(el));
    }
    console.log("temp:")
    console.log(temp);
  
    // Remove duplicates using previously written algorithm
    // This is the removeDuplicates() code
    let rv = [];
    temp.map(el1 => {
      if (!rv.some(el2 => el1 === el2)) {
          rv.push(el1);
      }
  });
  
    //console.log(rv);
  
    return rv;
  }
  
  console.log(sortedUnion([1, 3, 2], [5, 2, 1, 4], [2, 1]));
  console.log(sortedUnion([1, 3, 2], [1, [5]], [2, [4]]));
