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
    rotateArr([1, 2, 3, 4, 5, 6, 7], 2)
// )