class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let ans = new Array(temperatures.length).fill(0);
        let stack = [];
        for(let i=0;i<temperatures.length;i++){
            while(
                stack.length>0 && 
                temperatures[i]>temperatures[stack[stack.length-1]]
                ){
                let prevIndex = stack.pop();
                ans[prevIndex] = i - prevIndex;
            }
            stack.push(i);
        }
        return ans;
    }
}
