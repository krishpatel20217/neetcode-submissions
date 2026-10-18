class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const rem = new Map();
        for(let i=0;i<nums.length;i++){
            if(rem.has(nums[i])){
                rem.set(nums[i],rem.get(nums[i])+1)
            }else{
                rem.set(nums[i],1)
            }
        }
        const arr=[]
        for(const [key,value] of rem){
            arr.push([key,value]);
        }
        arr.sort(function(a,b){
            return b[1] - a[1]
        })
        const result = [];
        for(let i=0 ; i<k;i++){
            result.push(arr[i][0]);
        }
        return result;
    }
}
