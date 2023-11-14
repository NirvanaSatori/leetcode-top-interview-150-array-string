/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const countEl = nums.reduce((acc,curr)=>{
        return acc[curr] ? ++acc[curr] : acc[curr] = 1,acc
    },{})
    const occurences = Object.values(countEl)
    const majority = occurences.reduce((acc, curr)=>acc>curr?acc:curr)
    return Object.keys(countEl).find(key => countEl[key] === majority)
};