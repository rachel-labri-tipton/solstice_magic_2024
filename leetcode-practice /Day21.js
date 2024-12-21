// [Merge Strings Alternately](https://leetcode.com/problems/merge-strings-alternately/) 


// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.


// Return the merged string.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {

    // get the length of each word
    let m = word1.length
    let n = word2.length
    
    // set up two pointers that will point at the index of letters to add to the results array/string
    let i = 0
    let j = 0

    // set up an array to store the alternating values
    let result = []

    // while loop with the if conditions to push letters into the results array and increase the counters
    while (i < m || j < n) {

        if (i < m) {
            result.push(word1[i])
            i++
        }
        
        if (j < n) {
            result.push(word2[j])
            j++
        }

    }
    // return the results array as a string
    return result.join('')
}


console.log(mergeAlternately("abc", "pqr")) // "apbqcr"
console.log(mergeAlternately("ab", "pqrs")) // "apbqrs"

// Time complexity: O(n)
// Space complexity: O(n)

// Constraints:

// 1 <= word1.length, word2.length <= 100
// word1 and word2 consist of lowercase English letters.

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s
// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q 
// merged: a p b q c   d
 