class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        let result = new Array(nums1.length).fill(-1);
        for(let i=0;i<nums1.length;i++){
            const num = nums1[i];
            let gr = null;
            for(let j=0;j<nums2.length;j++){
                
                if(nums2[j]==num){
                    gr=nums2[j];
                }
                if(gr !== null && nums2[j]>gr){
                    result[i]=nums2[j];
                    break;
                }
            }
            
        }
        return result;
    }
}
