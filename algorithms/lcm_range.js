function smallestCommons(arr) {
    let max = arr[0];
    let min = arr[1];
  
    if(max < min) {
      let temp = max;
      max = min;
      min = temp;
    }
    
    let nums = [];
    for(let i = min; i <= max; i++) {
      nums.push(i);
    }
  
    let lcm = 0;
    let i = max - 1;
    while(lcm === 0) {
      let test = max * i;
  
      if(nums.every(n => test % n === 0)) {
        lcm = max * i;
        break;
      } else {
        i++;
      }
    }
  
  
    return lcm;
  }
  
  
  smallestCommons([1,5]);