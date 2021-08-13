/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/


const groupAnagrams = (strs) => {
    const map = {};
    
    for (let str of strs) {
        //.join('') maybe unnecessary but it converts the array back into a string, friendlier / more readable
        const key = [...str].sort().join('');
        // console.log(key)

        if (!map[key]) {
            map[key] = [];
        }

        map[key].push(str);
    }
    
    return Object.values(map);
};

const input = ["eat","tea","tan","ate","nat","bat"]

console.log(groupAnagrams(input))

