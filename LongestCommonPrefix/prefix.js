const strs = ["flower","flow","flight"]
// const strs = ["dog","racecar","car"]
var longestCommonPrefix = function () {
    //iterate through each character of the first word
    for(let i = 0;i<strs[0].length;i++){
        //iterate over every string
        for(let j= 1 ; j< strs.length; j++){
            //check if each character of every string is similar subsequently
            if(!(strs[0][i]===strs[j][i])){
                //if not, remove the characters and return remaining part of 1st string
                return strs[0].slice(0, i)
            }
        }
    }
    return strs[0]
};
console.log(longestCommonPrefix())