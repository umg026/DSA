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
const Arr = [1, 2, 3, 4, 5]
const N = Arr.length;

const Mean = function (A, N) {

    if (N == 1) {
        return A[N - 1];
    }
    else {
        return (Mean(A, N - 1) * (N - 1) + A[N - 1]) / N;
    }

}
//  console.log("Mean Arr : ", Mean(Arr,N))

// ========================================================
// Sum of natural numbers using recursion
// Input : 3
// Output : 6
// Explanation : 1 + 2 + 3 = 6

function sumNutral(n) {
    if (n <= 1) {
        return n
    }
    return n + sumNutral(n - 1)
    //     5 + sumNutral(4) = 10 + 5 = 15
    //     4 + sumNutral(3) = 6 + 4 = 10
    //     3 + sumNutral(2)= 3 + 3 = 6
    //     2 + sumNutral(1) = 2 + 1 = 3
    //     5 + sumNutral(4)
    // 1,2,3,4,5 = 15
}
sumNutral(5)

// ===============================
// Print reverse of a string using recursion

function reverseStr(str,len) {
    if (len == str.length) {
        return
    }
    reverseStr(str, len +1)

    // console.log(str[len])
}
reverseStr("umang prajapati",0)

// ========================================
// Program for factorial of a number
// Input: 5
// Output: 120
// Explanation: 5! = 5 * 4 * 3 * 2 * 1 = 120

function factoria(n) {
    if (n <= 1) return n ;

    return n * factoria(n - 1);
}
console.log(factoria(5))