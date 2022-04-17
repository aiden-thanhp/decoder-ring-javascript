// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () { 
  const alphabet = "abcdefghiklmnopqrstuvwxyz".split(""); //call an alphabet array 

  const grid = [1, 2, 3, 4, 5]; 
  const idArray = []; //create a grid array with all ids for each letter
    grid.forEach(verticalEle => {
        grid.forEach(horizontalEle => {
            idArray.push(`${horizontalEle}${verticalEle}`)
        });
    });

  const letters = alphabet.reduce((result, letter, index) => {
    result.push({
        'letter': letter,
        'id': idArray[index]
    })
    return result; // assign each letter with their id
  }, []);

  function callId(letters, letter) { //call id based on the letter
    if (letter === " ") return " "; //ignore space
    else {
      if (letter === "j") letter = "i"; //letter i and j return the same id
      return letters.filter(element => element.letter === letter)
                    .map(element => element.id).join("");
    }
  }

  function callLetter(letters, id) { //call letter based on the id
    if (id === " ") return " "; //ignore space
    else {
      let result = letters.filter(element => element.id === id)
                          .map(element => element.letter).join("");
      if (result === 'i') result = '(i/j)'; //return both i and j for id 42
      return result;
    }
  }

  function checkDecodingLength(input) { //function to check if decoding message has even length
    const splitArray = input.split(" ");
    return splitArray.every((element) => element.length % 2 === 0)
  }
 
  function splitDecodingInput(input) { //function to return an array of each pair of id including space
    const splitArray = input.split(" ");
    const resultArray = [];
    splitArray.forEach(element => {
      for (let i = 0; i < element.length; i += 2) {
        resultArray.push(`${element[i]}${element[i + 1]}`);
      }
      resultArray.push(' ');
    });
    resultArray.pop();
    return resultArray;
  }

  function polybius(input, encode = true) {
    if (!encode) { //if not encoding, do decoding
      if (!checkDecodingLength(input)) return false; //check if the length is even
      else {
        const decodingArray = splitDecodingInput(input); 
        const output = decodingArray.reduce((result, id) => { //decoding the array
          result.push(callLetter(letters, id));
          return result;
        }, [])
        return output.join("");
      }
    } else {
      const output = input.toLowerCase().split("").reduce((result, letter) => { //encoding the array
        result.push(callId(letters, letter));
        return result;
      }, []);
      return output.join("");
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
