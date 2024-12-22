// Max Number of K-Sum Pairs
// You are given an integer array nums and an integer k.

// In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

// Return the maximum number of operations you can perform on the array.

var maxOperations = function (nums, k) {

  // create two pointers 
  // sort the array to organize the numbers
  // create an incrementer that increases when there's a set of numbers
  // that = k

  let left = 0
  let right = nums.length - 1
  let counter = 0 

  nums.sort((a, b) => a - b)

  while (left < right) {
    let sum = nums[left] + nums[right]

    if (sum > k) {
      right --
    }
    else if (sum < k) {
      left++
    }
    else {
      counter++
      left++
      right--
    }
  }

  return counter

}

console.log(maxOperations([1, 2, 3, 4], 5))// 2
console.log(maxOperations([3, 1, 3, 4, 3], 6)) // 1

// Time complexity: O(n)
// Space complexity: O(1)

// Example 1:

// Input: nums = [1,2,3,4], k = 5
// Output: 2
// Explanation: Starting with nums = [1,2,3,4]:
// - Remove numbers 1 and 4, then nums = [2,3]
// - Remove numbers 2 and 3, then nums = []
// There are no more pairs that sum up to 5, hence a total of 2 operations.
// Example 2:

// Input: nums = [3,1,3,4,3], k = 6
// Output: 1
// Explanation: Starting with nums = [3,1,3,4,3]:
// - Remove the first two 3's, then nums = [1,4,3]
// There are no more pairs that sum up to 6, hence a total of 1 operation.
 

// Constraints:

// 1 <= nums.length <= 105
// 1 <= nums[i] <= 109
// 1 <= k <= 109