//___________________________________________________6. Extracting Substrings

//Use slice(), substring(), and substr();
const str = "Hello, Bangladesh! We are looking for enemy"
console.log(str.slice(7, 18)); //Bangladesh!
console.log(str.substring(7, 18)); //Bangladesh!
console.log(str.substr(7, 11)); // 'World'

//___________________________________________________7. Splitting and Joining Strings
//Convert a string into an array and back to a string.

const sentence = "The quick brown fox";
const words = sentence.split(" ");
console.log(words); // ['The', 'quick', 'brown', 'fox']
console.log(words.join(" ")); // 'The quick brown fox'



//___________________________________________________8. Replacing Parts of Strings
// Replace one part of a string with another.

console.log(str.replace("Hello", "Assalamualikum")); // 'Hello, JavaScript!'
console.log(str.replace(/a/g, " ")); // 'Hell0, W0rld!'


//___________________________________________________9. String Padding
//Add characters to the beginning or end of a string to reach a certain length

const num = "5";
console.log(num.padStart(3, '0')); // '005'
console.log(num.padEnd(3, '0')); // '500'



//___________________________________________________6. Extracting Substrings
//___________________________________________________6. Extracting Substrings


