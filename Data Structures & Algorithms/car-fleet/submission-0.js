class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const map = new Map()
        for(let i=0;i<position.length;i++){
            map.set(position[i],speed[i]);
        }
        const sortedmap = new Map([...map.entries()].sort((a,b)=>b[0]-a[0]));
        let hr=0;
        let ans =0;
        for(let[key,value] of sortedmap){
            let  currenthr = (target-key)/value;
            if(currenthr>hr){
                ans++;
                hr = currenthr;
            }
        }
        return ans;
    }
}
