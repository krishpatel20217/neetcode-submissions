class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr, k) {
        let map = new Map();
        for(let i=0;i<arr.length;i++){
            if(!map.has(arr[i])){
                map.set(arr[i],1)
            }else{
                map.set(arr[i],map.get(arr[i])+1)
            }
        }
        let ans = "";
        for(const [key,value] of map){
            if(value==1){
                ans=key;
                k--;
            }
            if(k==0){
                return ans;
            }
        }
        if(k>0){
            return '';
        }else{
            return ans
        }
    }
}
