// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.


/**
 * @param {number[]} nums
 * @return {boolean}
 */

var increasingTriplet = function(nums) {

    let first_num = Infinity
    let second_num = Infinity
    let third_num  = Infinity

    for (let i=0; i<=nums.length; i++) {
        if ( nums[i]<= first_num) {
            first_num = nums[i]
        } else if ( nums[i]<=second_num ) {
            second_num = nums[i] 
        } else if ( nums[i] <=third_num) {
            third_num = nums[i]
        }

        if (third_num <Infinity && third_num>second_num && second_num > first_num) return true
    }
    return false
};


console.log(increasingTriplet([2, 1, 5, 0, 4, 6])) // true
console.log(increasingTriplet([5, 4, 3, 2, 1])) // false
console.log(increasingTriplet([1, 2, 3, 4, 5])) // true


// Examples
// nums = [1,2,3,4,5], false
// nums = [5,4,3,2,1], false
// nums = [2, 1, 5, 0, 4, 6], true 

//Time complexity : O(N) where N is the size of nums. We are updating first_num and second_num as we are scanning nums. So, the time complexity is O(N).

//Space complexity : O(1) since we are using only a constant amount of space.