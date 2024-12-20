// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 /**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    
    let len = flowerbed.length

    for (let i=0; i<=len; i++) {
        // set a variable that checks if the right and left indexes are empty
        let left = (i===0) || (flowerbed[i-1]===0)
        let right = (i===len-1) || (flowerbed[i+1]===0)
        let bothSidesEmpty = (left && right)
        // if the current index is empty and there are spots to both sides, decrease n
        if (flowerbed[i]===0 && bothSidesEmpty){
        // set flowerbed[i] equal to 1 and decrease n
                flowerbed[i] = 1
                n--
            } 


}
    return n<=0
}

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)) // true
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)) // false

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true


// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false
 

