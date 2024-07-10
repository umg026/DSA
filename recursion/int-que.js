// Q1 : Print 1 to n without using loops.
// You are given an integer N. Print numbers from 1 to N without the help of loops.

// Examples:

// Input: N = 5
// Output: 1 2 3 4 5
// Explanation: We have to print numbers from 1 to 5.


function printN(n) {
    if (n > 0) {
        printN(n - 1)
        // console.log(n)
    }
    return;
}

printN(5)
// Q2 :=============================================
// Print N to 1 without loop
// You are given an integer N. Print numbers from N to 1 without the help of loops.

// Examples:

// Input: N = 5
// Output: 5 4 3 2 1
// Explanation: We have to print numbers from 5 to 1.

function seq(n) {
    if (n > 0) {
        // console.log(n)
        seq(n - 1)
    }
}

seq(5)

// ======================

// Mean of array using recursion
// To find the mean of the elements of the array.

// Mean = (Sum of elements of the Array) /
//        (Total no of elements in Array)

function meanArr(nums, n) {

    if (n <= 0) {
        return 0
    }

    const sum = nums[n - 1] + meanArr(nums, n - 1)
    if (n === nums.length) {
        return sum / n

    }

    return sum;
}
const arr = [1, 2, 3]
const lenght = arr.length
// console.log(
meanArr(arr, lenght)
// )

// =============================================
// Sum of natural numbers using recursion
// Given a number n, find sum of first n natural numbers. To calculate the sum, we will use a recursive function recur_sum().
// Input : 3
// Output : 6
// Explanation : 1 + 2 + 3 = 6


function sumsOfNatural(nums) {
    if (nums <= 0) {
        return 0
    }
    return nums + sumsOfNatural(nums - 1)
}
console.log(
    sumsOfNatural(5)
)