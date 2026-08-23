class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[]}
     */
    findMissingAndRepeatedValues(grid) {
        const arr = new Map();
        let ans=[-1,-1];
        for(let i=0;i<grid[0].length;i++){
            for(let j=0;j<grid[0].length;j++){
                if(!arr.has(grid[i][j])){
                    arr.set(grid[i][j],1)
                }else if(arr.has(grid[i][j])){
                    ans[0]= grid[i][j];
                }
            }
        }
        for (let i=1;i<=grid[0].length*grid[0].length;i++){
            if(!arr.has(i)){
                ans[1]=i;
                return ans;
            }
        }
    }
}
