// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */

var findDifference = function(nums1, nums2) {
    // create a set from the arrays nums1 and nums2
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)

    // create the array to store the different values
    let answer = [[],[]]

    // loop through each set and check if the other set has the number
  // if not, push it into the appropriate answer array
  // TODO: refactor and find what is common between the two sets using the difference method

    for (let number of set1) {
        if (!set2.has(number)) {
            answer[0].push(number)
        }
    }

    for (let number of set2) {
        if (!set1.has(number)) {
            answer[1].push(number)
        }
    }
    return answer
};

console.log(findDifference([1,2,3], [2,4,6])) // [[1,3],[4,6]]
// Example 1:

// Input: nums1 = [1,2,3], nums2 = [2,4,6]
// Output: [[1,3],[4,6]]
// Explanation:
// For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
// For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].
// Example 2:

// Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
// Output: [[3],[]]
// Explanation:
// For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
// Every integer in nums2 is present in nums1. Therefore, answer[1] = [].
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// -1000 <= nums1[i], nums2[i] <= 1000