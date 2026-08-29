class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isMonotonic(nums) {
        let max = nums[0];
        let min = nums[0];
        let con = 'a';
        for(let i=1 ; i<nums.length ; i++){
            if(con != 'a'){
                if(nums[i]>=max && con=='i'){
                    max = nums[i];
                }else if(nums[i]<=min && con=='d'){
                    min = nums[i];
                }else{
                    return false;
                }
            }else{
                if(nums[i]>max){
                    max = nums[i];
                    con = 'i';
                }else if(nums[i]<min){
                    min = nums[i];
                    con = 'd';
                }else{
                    con = 'a';
                }
            }
        }
        return true;
    }
}
