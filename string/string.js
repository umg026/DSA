// Q1 : write a function called truncate that checks the length of a given string  and if it surpasses a specified maximum length , maxlength, itreplaces the endof the string with the ellipsis character "..." so that length matches the maximum length

// input str : "hellow world how are you"
// output : "hellow..."


function truncate(str, maxlength) {
    if (str.length > maxlength)
        return str.slice(0, maxlength - 3) + "..."

    else return str
}

// console.log(
truncate("hellow world how are you", 9)
// )

// ============================================================================
// Q2 : palindrome number
//  an integer is a palindrome number when it reads the same forwrd and backward

// input x = 121 // output : true
// input x = 10 // output : false

function palindrome(x) {
    return x === +x.toString().split("").reverse().join("");
}
// + is convert sting into a Number 

// console.log(
palindrome(10)
// );

// ============================================================================

// Q3 : Write a function that reverses a string. The input string is given as an array of characters s.
const str = "['h','e','l','l','o']";

const newStr = str.substring(1, str.length - 2).replace(/'/g, "").split(',').reverse()
// console.log(newStr);

// ============================================================================
// Q4 : 

function test(words) {
    var n = words.split(' ')

    return n[n.length - 1].length
}
// console.log(
test("hellow world")
// )

// ============================================================================
// Q5:  Find the Index of the First Occurrence in a String
// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0

// Answer : 
var strstsr = function (hayato, jhon) {
    return hayato.indexOf(jhon)
}

// console.log(
strstsr("hellowworld", "ww")
// );


// ============================================================================
// Q6:  First Unique Character in a String
// Example : Input: s = "leetcode"
// Output: 0

var firstUniqChar = function (string) {
    var first;

    string.split('').some(function (character, index, obj) {
        if (obj.indexOf(character) === obj.lastIndexOf(character)) {
            first = character;
            return true;
        }

        return false;
    });

    return first;
};

// console.log(
firstUniqChar("helloe")
// );

// ============================================================================
// Q7:13. Roman to Integer

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
var romanToInt = function (s) {
    const romanToIntMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let currentVal = romanToIntMap[s[i]];
        let nextVal = romanToIntMap[s[i + 1]];

        if (nextVal > currentVal) {
            total -= currentVal;
        } else {
            total += currentVal;
        }
    }

    return total;
};

console.log(romanToInt("III")); 