function recursion(n) {
    // frist we need to difine a base condition 
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * recursion(n - 1)
    }
}
let factorial = recursion(4)

// console.log(
factorial
// )

//  Ex 2 :=========================================>>>

function recursiveArr(nums) {

    if (nums.length === 0) {
        return 1
    }

    return nums[0] * recursiveArr(nums.slice(1))
}
// console.log(
recursiveArr([1, 2, 3, 4])
// )

//  Ex 3 :=========================================>>>
// Decimal to binary number using recursion
// Given a decimal number as input, we need to write a program to convert the given decimal number into an equivalent binary number. 

// Input : 7                                                         
// Output :111

// Input :10
// Output :1010




// ========================================================

