class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let greatest = null;
        for(let i=arr.length-1;i>=0;i--){
            const current = arr[i];
            if(i==arr.length-1){
                arr[i]=-1;
                greatest=current;
            }else{
                arr[i]=greatest;
                greatest = Math.max(current,greatest)
            }
        }
        return arr;
    }
}
