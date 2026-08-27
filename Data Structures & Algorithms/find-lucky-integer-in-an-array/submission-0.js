class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    findLucky(arr) {
        const map = new Map();
        for(let i=0;i<arr.length;i++){
            map.set(arr[i],(map.get(arr[i])+1 || 1));
        }
        let ans = -1;
        for(const [key,value] of map){
            if(key==value && key>ans){
                ans=key;
            }
        }
        return ans;
    }
}
