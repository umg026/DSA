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
console.log(recursiveArr([1, 2, 3, 4]))

