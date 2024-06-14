// function findIndex(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         if (i === 3) return nums[i]
//     }
// }
// function findIndex(nums) {
//     return nums[3]
// }
// console.time("start")
// console.log(findIndex([1, 2, 3, 4, 5, 6]));
// console.timeEnd("start")



// ================================

function someoperation(n) {
    return (n * (n + 2) / 2)
}

// console.log(
    someoperation(5)
// )

// when  " n " chnage but this function has 3 operation only thats whys its called
// O(1) complexicity

function goingDown(n) {
    console.log("starteing")
    for (var i = 0; i < n; i++) {
        console.log(i)
    }
    console.log("this is middle")
    for (var j = n - 1; j >= 0; j--) {
       console.log(j)

    }
 console.log("at the end")
}

console.log(goingDown(2))

// in  this code when n chnages that means operations are changes 
// it means this function is O(n) complexcity