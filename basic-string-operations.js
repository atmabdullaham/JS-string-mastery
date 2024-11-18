//___________________________________________________1. String Creation & Length

//Create a string and find its length.

const str = "Hello, World!";
console.log(str.length); // 13

const status = "Hero, Programmer"
console.log(status);
console.log(status.length);

//____________________________________________________2. Accessing Characters
// Access the first and last characters of a string.

console.log(str[0]); // 'H'
console.log(str[str.length - 1]); // '!'


console.log(status[0]); // 'H'
console.log(status[status.length - 1]); // 'r'


//______________________________3. Changing Case
// Convert strings to uppercase and lowercase

console.log(status.toUpperCase()); //HERO, PROGRAMMER
console.log(status.toLowerCase()); //hero, programmer


//___________________________________________________4. Trimming String
// Remove whitespace from both ends of a string


const paddedStr = "   Hello, World!   ";
console.log(paddedStr.trim()); // 'Hello, World!'
console.log(paddedStr); // '   Hello, World!   '


//___________________________________________________5. Finding Sub string

//Check if a string includes another string.

console.log(str.includes("World")); // true
console.log(str.indexOf("World")); // 7

console.log(str.includes("Hello"));
console.log(str.includes("Hello,"));
console.log(str.includes("H"));
console.log(str.indexOf("Hello"));