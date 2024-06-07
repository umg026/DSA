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