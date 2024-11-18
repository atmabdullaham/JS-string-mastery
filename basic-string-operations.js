//____________________________1. String Creation & Length_______________________________

//Create a string and find its length.

const str = "Hello, World!";
console.log(str.length); // 13

const status = "Hero, Programmer"
console.log(status);
console.log(status.length);

//_____________________________2. Accessing Characters__________________________________
// Access the first and last characters of a string.

console.log(str[0]); // 'H'
console.log(str[str.length - 1]); // '!'


console.log(status[0]); // 'H'
console.log(status[status.length - 1]); // 'r'


//______________________________3. Changing Case_________________________________________
// Convert strings to uppercase and lowercase

console.log(status.toUpperCase()); //HERO, PROGRAMMER
console.log(status.toLowerCase()); //hero, programmer
