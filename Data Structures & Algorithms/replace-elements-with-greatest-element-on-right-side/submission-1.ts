class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        let greatest= -1;
        for(let i=arr.length-1;i>=0;i--){
            const num=arr[i];
            if(i==arr.length-1){
                arr[i]=-1;
                greatest=num;
            }else{
                arr[i]=greatest;
                greatest = Math.max(num,greatest);
            }
        }
        return arr;
    }
}
