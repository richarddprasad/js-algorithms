function permAlone(str) {
    let characters = str.split("");
    let strings = [];
    const MAX_INDEX = str.length-1;

    // // console.log("STR: ", str);
    // characters.forEach(el1 => {
    //     // console.log(el1);
    //     let temp = characters.filter(el2 => el1 !== el2);
    //     // console.log(el1, " | ", temp);
    //     generateString(el1, temp);
    // });

    // console.log(characters[0]);
    let rv = generateString(0, characters[0]);
    console.log("return value: ", rv);

    function generateString(index, current) {
        // Base Case
        if(index === MAX_INDEX) {
            console.log("BASE CASE REACHED: ", current);
            return current;
        }

        // General Case
        console.log("GENERAL CASE: ", current);
        current = characters[index+1];
        return current.concat(generateString(index+1, current));        
    }
    
    console.log("\n*****************\n");

    return str;
}

permAlone("aab"); //should return 2.
permAlone("aaa"); //should return 0.
permAlone("aabb"); //should return 8.
permAlone("abcdefa"); //should return 3600.
permAlone("abfdefa"); //should return 2640.
permAlone("zzzzzzzz"); //should return 0.
permAlone("a"); //should return 1.
permAlone("aaab"); //should return 0.
permAlone("aaabb"); //should return 12.