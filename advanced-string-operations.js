//___________________________________________________10. Reversing a String
//Write a function to reverse a string

const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString("Abdullah Al Mamun")); // 'tpircSavaJ'

//___________________________________________________11. Counting Characters
// Count the number of occurrences of a specific character.

const countChar = (str, char) => str.split(char).length - 1;
console.log(countChar("hello world", 'b')); // 2

//___________________________________________________12. Palindrome Check
//Check if a string is a palindrome

const isPalindrome = (str) => str === str.split("").reverse().join("");
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false


//___________________________________________________13. Extracting Numbers from Strings
//Extract numbers from a mixed string.

const extractNumbers = (str) => str.match(/\d+/g).map(Number);
console.log(extractNumbers("I have 2 apples and 3 bananas")); // [2, 3]



