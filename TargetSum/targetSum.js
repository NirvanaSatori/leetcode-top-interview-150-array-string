const nums = [3,2,4]
const sum = 6
// function targetSum(){
//     for(let i = 0; i<nums.length; i++){
//         for(let j = i+1; j<nums.length; j++){
//             if(nums[i]+nums[j] === sum){
//                 return [i,j]
//             }
//         }
//     }   
// }
// targetSum()

function twoSum(nums, target) {
    let hashmap = {}
    for(let x = 0; x < nums.length; x++){
        if(hashmap[target - nums[x]] !== undefined){
            return [hashmap[target - nums[x]], x]
        }else{
            hashmap[nums[x]] = x
        }
    }
};

twoSum()