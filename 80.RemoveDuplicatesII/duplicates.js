/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    let count = 2
for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]){
        count = 2
        i++;
        nums[i] = nums[j];
    }else if(nums[i]===nums[j]){
        count--
        count > 0 ? i++  && (nums[i] = nums[j]) : nums[i] 
    }
}
return i + 1;
};