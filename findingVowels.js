// Write code to return the the number of vowels in `str`

var vowelCount = function (str) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      let lowerString = str[i].toLowerCase();
      if (vowels.indexOf(lowerString) !== -1) {
          count++
      }
    }
    return count;
  };