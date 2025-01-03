// Find the Highest Altitude

// There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

// You're given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

/**
 * @param {number[]} gain
 * @return {number}
 */

var largestAltitude = function(gain) {
    // set up a counter to track the altitude
        let currentAltitude = 0
        let maxAltitude = 0

    // set up the edge cases, so the left bound and maybe right bound 
        for (let i = 0; i < gain.length; i++) {
            // add gain in altitude to current altitude 
            currentAltitude += gain[i]
            maxAltitude = Math.max(currentAltitude, maxAltitude)  
        }
        
    // return highest value of running altitude
        return maxAltitude 

};
console.log(largestAltitude([-5, 1, 5, 0, -7])) // 1
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2])) // 0

// Time complexity O(n)
// Space complexity O(1)



// Example 1:
// Input: gain = [-5,1,5,0,-7]
// Output: 1
// Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.
// Example 2:

// Input: gain = [-4,-3,-2,-1,4,3,2]
// Output: 0
// Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.

// Constraints:

// n == gain.length
// 1 <= n <= 100
// -100 <= gain[i] <= 100