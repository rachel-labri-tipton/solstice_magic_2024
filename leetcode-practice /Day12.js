// Longest Subarray of 1's After Deleting One Element

// Given a binary array nums, you should elete one element from it. 
// Return the size of the longest non-empty subarray containing 

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    // create a sliding window that always has a 0 in it
    //  when you encounter a 0, change the left pointer
    //  create a window and continue to expand until the zero count greater than 1 

    let prevWindow = 0;
    let currWindow = 0;
    let max_length = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            max_length = Math.max(max_length, prevWindow + currWindow);
            prevWindow = currWindow;
            currWindow = 0;
        } else {
            currWindow++;
        }
    }

    if (currWindow === nums.length) {
        return currWindow - 1;
    }

    max_length = Math.max(max_length, prevWindow + currWindow);
    return max_length;
};




// time complexity O(N) 
// each item iterated over twice at max by the window
// space complexity O(1)
