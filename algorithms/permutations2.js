// Finds all unique permutations possible from
// the characters in the given string such that
// no character repeats

function permAlone(str) {
    let characters = str.split("");
    let strings = [];

    console.log("characters: ", characters);

    // Needed for Heap's algorithm
    function swap(index1, index2) {
        let temp = characters[index1];
        characters[index1] = characters[index2];
        characters[index2] = temp;
    }

    // Heap's Algorithm
    // n: the number of elements
    // a: an array of elements of size n
    // Instead of passing in an array (a),
    // let's exploit the use of closures
    function generate(n) {
        if (n === 1) {
            strings.push(characters.join(""));
            //return a;
        }
        else {
            for (let i = 0; i < n - 1; i++) {
                generate(n - 1, characters);

                if (n % 2 === 0) {
                    swap(i, n - 1);
                } else {
                    swap(0, n - 1);
                }
            } // end for
            generate(n-1, characters);
        } // end else
    } // end function

    generate(characters.length);
    console.log("strings: ", strings);

    // Step 2: Remove duplicates
    // NEVERMIND, not part of the test requirements
    // let filteredStrings = [];
    // strings.forEach(s1 => {
    //     if(!filteredStrings.some(s2 => s1 === s2)) {
    //         filteredStrings.push(s1);
    //     }
    // });
    // console.log("Filtered Strings: ", filteredStrings);

    // Step 3: Remove strings with repeating characters
    // indexOf() might be helpful here... just kidding
    // Note: The given solution uses regex
    strings = strings.filter(s => {
        for(let i = 0, j = 1; j < s.length; i++, j++) {
            if(s[i] === s[j]) {
                return false;
            } 
        }
        return true;
    });
    console.log("Final Result: ", strings);

    return strings.length;
}

console.log(permAlone("aab")); //should return 2.
// permAlone("aaa"); //should return 0.
// permAlone("aabb"); //should return 8.
// permAlone("abcdefa"); //should return 3600.
// permAlone("abfdefa"); //should return 2640.
// permAlone("zzzzzzzz"); //should return 0.
// permAlone("a"); //should return 1.
// permAlone("aaab"); //should return 0.
// permAlone("aaabb"); //should return 12.