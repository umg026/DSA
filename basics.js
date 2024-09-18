// palindrome number
//  an integer is a palindrome number when it reads the same forwrd and backward

// input x = 121 // output : true
// input x = 10 // output : false

// Answer : 
function palindrome(n) {
    return n === +n.toString().split('').reverse().join('');
    
}
console.log("palindrome : ", palindrome(10));
// ==================================================================
// Fibonacci serires  --> 0,1,1,2,3,5,8,13,21,34,55,89,144,233
// recursion
// f(n-1) + f(n-2) for n > 1

// ANSWER : 
 // USING FOR LOOP 

 const fib = function (n) {
    const arr = [0,1]

    for (let i = 2; i <= n; i++) {
    arr.push(arr[i-1] + arr[i-2]);        
    }

    // arr[6] + arr[5] so 8 + 5 = 13
    // arr[6] = arr[5] + arr[4] = 5 + 3 = 8
    // arr[5] = arr[4] + arr[3] = 3 + 2 = 5
    // arr[4] = arr[3] +arr[2] = 2 + 1 = 3
    // arr[3] = arr[2] + arr[1] = 1 + 1 = 2
    // arr[2] = arr[1] + arr[0] = 1 + 0
    
    // if n <=1 return n ;
    console.log("arrr", arr)
    
 }
 fib(7)