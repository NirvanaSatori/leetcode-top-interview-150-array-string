const nums = [3,2,4]
const sum = 6
function targetSum(){
    for(let i = 0; i<nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            if(nums[i]+nums[j] === sum){
                return [i,j]
            }
        }
    }   
}
targetSum()