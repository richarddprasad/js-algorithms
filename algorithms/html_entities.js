function convertHTML(str) {
    console.log("Original: " + str);
    let rv = str.split("").map(c => {
      //console.log("c: " + c);
      switch(c) {
        case '&':
          c = '&amp;';
          //console.log("Found ampersand");
          //console.log("new c: " + c);
          break;
  
        case '<':
          c = '&lt;';
          break;
  
        case '>':
          c = '&gt;';
          break;
  
        case '\'':
          c = '&apos;';
          break;
  
        case '\"':
          c = '&quot;';
          break;
  
        default:
      }
        return c;
    }).join("");
  
    //console.log(rv); 
    return rv;
  }
  
  console.log(convertHTML("Dolce & Gabbana"));
  console.log(convertHTML("Hamburgers < Pizza < Tacos"));
  console.log(convertHTML("Sixty > twelve"));
  console.log(convertHTML('Stuff in "quotation marks"'));
  console.log(convertHTML("Schindler's List"));
  console.log(convertHTML("<>"));
  console.log(convertHTML("abc"));