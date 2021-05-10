// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  

  function caesar(input, shift, encode = true) {
    // your solution code here
    
    // our parameters for shift
    if (shift === 0 || shift < -25 || shift > 25) return false;
    
  // declare the string to hold the result
  let result = "";
    
    // for each character in input
    for (let i = 0; i < input.length; i++) {
      // get current character
      let char = input[i];
      // check for spaces
      if (char === " ") {
        result += char
      } else {
// if it's not a space, get index of the alphabet string
        let code;
        for (let j = 0; j < alphabet.length; i++) {
          if (alphabet[j] === char) {
            code = j;
            break
          }
        }
        // shift the index
        code += shift
// if we go past either end of the alphabet wrap around
        if (code < 0) code += alphabet.length;
        if (code >= alphabet.length) code -= alphabet.length 
        // add matching letter to the result
        result += alphabet[code];
      }    
        return result
    }
  }
  
  

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };