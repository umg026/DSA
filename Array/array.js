// Que 1: second largest number 
// given an array of size N , print the second largetst

// input : [12,35,1,10,34,1] output----> 34
// input : [10,5,10]  output ----> 5

const arr = [10, 5, 10, 10, 4, 6]
arr.sort((a, b) => a - b)

const newArr = [...new Set(arr)]

// console.log(
newArr.slice(newArr.length - 2, -1)
// )

// ===================================================
// Q2 : Rotate array by k 
// given am interger array , rotate the array to the right by k steps,
// where k is non negetive

// input: [1, 2, 3, 4, 5, 6, 7], k = 3  ---------->> output : [5,6,7,1,2,3]

// [1,2,3,4,5,6,7] => [7,1,2,3,4,5,6] => [6,7,1,2,3,4,5] => [5,6,7,1,2,3,4]

// const arr1 = [1, 2, 3, 4, 5, 6, 7]


function rotateArr(arr, k) {
    k = k % arr.length

    const array = arr.splice(arr.length - k)

    return array.concat(arr);
}

// console.log(
rotateArr([-1, -100, 3, 99], 2)
// )

// ===================================================
// Q3 :  remove duplicate from shorted array 
// given an integer array nums shorted in an non-decresing order
//  , remove the duplicates in-place such that each unique elements appears only onece . 
// the relative oerder of the elemets should be kept the same then return the number of 
// unique elements in nums


//input : [1,1,2]  ----------->>> output : 2 ,[1,2]
//input : [0,0,1,1,1,2,2,3,3,4]  ----------->>> output : 5 ,[0,1,2,3,_,_,_]


function removeDuplicates(nums) {
    var newarr = [...new Set(nums)]

    return newarr.length;
}

// console.log(
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
// )

// using for loop 
function removeDuplicates(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] == nums[i + 1]) {
            nums.splice(i + 1, 1);
            i--;
        }
    }
    return nums.length;
}

// console.log(
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
// )


// ===================================================
// Q4 : Sum of all elements in array 

var sumElement = function (nums) {
    const newArr = nums.reduce((item, prev) => item += prev, 0)
    return newArr
}

// console.log(
sumElement([1, 2, 3, 4, 5, 6])
// )


// using for loop 
const arr1 = [1, 2, 3, 4, 5]
let sum = 0;
for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
}
// console.log(sum)

// ===================================================
// Q5 : find the largest length word in array 

function largetstLength(arrays) {
    let blank = ""
    for (let i = 0; i < arrays.length; i++) {
        if (blank.length < arrays[i].length) {
            blank = arrays[i]
        }
    }
    return blank;
}

// console.log(
largetstLength(["ab", "abc", "abcde"])
// )

function longest(arr) {
    return arr.reduce((long, curr) => { // must retun the array
        return curr.length > long.length ? curr : long

    }, "")
}
// console.log(
longest(["ab", "abc", "abcde"])
// )

// ===================================================
// Q6 : checks if arrays is sorted

function shortedArray(nums) {
    let arr = [...nums].sort((a, b) => a - b)
    let isEqual = arr.every((value, index) => value === nums[index]) // check arr every elemet is equal to nums


    // if (isEqual) {
    //     console.log("array is shoetrd", arr)

    // }
    // else {
    //     console.log("array is not shorted", arr)
    // }

}
shortedArray([1, 3, 2, 4, 5])

// ===================================================
// Q7 : merge all the array

const merge = [[3, 4, 5], [5, 6, 7], [1, 2, 3]]

const newMerge = merge.flat()

// console.log(
newMerge.reduce((item, prev) => item + prev, 0)
// )

// ===================================================
// Q7 : find the intersection of two array 

// ex : array1: [1, 2, 3, 4, 5]
// array2: [3, 4, 5, 6, 7]
// Intersection:
// The common elements in both arrays are: [3, 4, 5]

function intersection(arr1, arr2) {
    let blank = []

    for (let i = 0; i < arr1.length; i++) {

        for (let g = 0; g < arr2.length; g++) {
            if (arr2[g] == arr1[i]) {
                blank.push(arr2[g])
            }
        }
    }
    return blank
}

// console.log(
intersection([1, 2, 3], [2, 3, 4])
// )

// ===================================================
// Q8 : Fibonacci serires  --> 0,1,1,2,3,5,8,13,21,34,55,89,144,233
// recursion
// f(n-1) + f(n-2) for n > 1

const fib = function (n) {
    if (n <= 1) return n

    return fib(n - 1) + fib(n - 2)
}
// console.log(
fib(8)
// )



// ===================================================
// Q9 : valid anagram
// an anagram is a wordor phase fromed by rearranging the letters 
// of a diifrence word or phase using all original letter exactly once 

// input  "rat" =>   "car" ---> false

const same = function (s, t) {
    const frist = s.split("").sort().join()
    const sencond = t.split("").sort().join()

    return frist === sencond ? "true" : "false"
}

// console.log(
same("jay", "yja")
// )


// ===================================================
// Q10 : two sum
// given an array of integers nums and an interger Target,
// return indices of the two numbers such that they add up to target.

// input  nums =[2,7,11,15] target =9
// output ==>  [0,1]

const nums = function (arr, target) {


    for (let i = 0; i < arr.length; i++) {
        const sum = arr[i] + arr[i + 1]

        if (sum == target) {
            return [i, i + 1]
        }

    }
    return []
}
// console.log(
nums([1, 2, 3, 4, 5], 9)
// )


// ===================================================
// Q11 : best time to buy and sell stocks
// you are given an array prices where prices[i] is the price of a given stock on the ith day
// you want to maximzie your profit by chosing a songle day to buy one stock and choosing a diifrnet
//  day in the future to sell that stock.
// retun the maximum profit if you cant achive any profit then retun 0

// input = price [7,1,5,3,6,4] ----> output 5


// ===================================================
// Q12 :  Given an array of integers, find the maximum element in the array.

// Example: Input: [3, 5, 2, 7, 1], Output: 7

function findmaxInt(nums) {
    return Math.max(...nums)

}
// console.log(
"anser :", findmaxInt([3, 5, 2, 7, 1])
// )

// ===================================================
// Q13 :  Write a function to reverse an array of integers.

// Example: Input: [1, 2, 3, 4, 5], Output: [5, 4, 3, 2, 1]

function reverseArr(nums) {
    return nums.sort((a, b) => b - a)
}
// console.log(
reverseArr([1, 2, 3, 4, 5])
// )


// ============================================================
// Q 14 :  Given an array of integers, find the first duplicate element.

// Example: Input: [1, 2, 3, 4, 2], Output: 2

function duplicate(nums) {
    const seen = new Set()

    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) {
            return nums[i]
        }
        else {
            seen.add(nums[i])
        }

    }

    return "no dupicate found"

}
// console.log(
duplicate([1, 2, 3, 4, 2])
// )


// ============================================================
// Q 15 :  Given an array of integers, find the number of pairs with a given sum.
// Example: Input: [1, 2, 3, 4, 5], sum = 7, Output: 2 (pairs: (2, 5) and (3, 4))

function findPair(arr, k) {
    let count = 0;
    let seen = new Map();

    for (let i = 0; i < arr.length; i++) {
        let complement = k - arr[i];
        if (seen.has(complement)) {
            count += seen.get(complement);
        }
        seen.set(arr[i], (seen.get(arr[i]) || 0) + 1);
    }

    return count;
}

// console.log(
findPair([1, 2, 3, 4, 5], 7)
// ); // Output: 2 (pairs: (2, 5) and (3, 4))

// ==========================================================

// Q16 . Write a function to find the maximum difference between two elements in an array.
//
// Example: Input: [3, 5, 2, 7, 1], Output: 6 (difference between 7 and 1)

function findMax(nums) {
    if (nums.length < 2) {
        return 0;
    }

    let minElement = nums[0];
    let maxElement = nums[0];

    for (let i = 1; i < nums.length; i++) {

        if (nums[i] < minElement) {
            minElement = nums[i];
        }

        if (nums[i] > maxElement) {
            maxElement = nums[i];
        }
    }
    return maxElement - minElement;
}

// console.log(
"result", findMax([3, 5, 2, 7, 1])
// );
// =====================================================
// 10. Write a function to rotate an array by a given number of positions.

// Example: Input: [1, 2, 3, 4, 5], k = 2, Output: [4, 5, 1, 2, 3]

function rotateByNum(nums, k) {
    k = k % nums.length

    const newArr = nums.splice(nums.length - k)

    return newArr.concat(nums)
}
// console.log(
"rotate arr :", rotateByNum([1, 2, 3, 4, 5], 2)
// )


// ================================================
// 11. Given an array of integers, find the longest consecutive sequence.

// Example: Input: [1, 2, 3, 4, 5, 7, 8, 9], Output: [1, 2, 3, 4, 5]

// function findLogest(nums) {

//     let value = 0;
//     let minIndex = nums[0]

//     for (let i = 1; i < nums.length; i++) {
//         if (minIndex + nums[i] == nums[i + 1]) {
//             value = nums[i + 1]

//             nums.slice(0, value)
//         }

//     }
// }
// console.log(findLogest([1, 2, 3, 4, 5, 7, 8, 9]))