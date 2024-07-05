// Q1 : gives an integer  arrya  nums , find the subarray with the largets sum and retun its sum,
// input : [-2,1,-3,4,-1,2,1,-5,4]   ---------->> output :6  [4,-1,2,1]

function maxSubArray(nums) {
    let maxSum = 0;
    let startIdx = 0
    let endIdx = 0


    for (let i = 0; i < nums.length; i++) { // n
        let current = 0
        for (let j = i; j < nums.length; j++) { // n
            current += nums[j]

            if (current > maxSum) {
                maxSum = current;
                startIdx = i;
                endIdx = j

            }
        }

    }
    return {
        sum: maxSum,
        subArr: nums.slice(startIdx, endIdx + 1)
    };
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

// this whole code is O(n^n) time complexcity ---> it means O(n^2) complexcity