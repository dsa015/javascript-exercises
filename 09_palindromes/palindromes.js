const palindromes = function (word) {
    // regex, if word includes A-Za-z0-9
    const processedWord = word.toLowerCase().includes(/[^A-Za-z0-9]/g) 
   
    return processedWord
};

// Do not edit below this line
module.exports = palindromes;
