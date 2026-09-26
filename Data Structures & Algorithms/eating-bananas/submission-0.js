class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let init = 1;
        let max = 0;
        for(let i=0;i<piles.length;i++){
            max = Math.max(max,piles[i]);
        }
        let ans = 0;
        while(init<=max){
            let k = Math.floor((init+max)/2);
            let hr = 0;
            for(let i=0;i<piles.length;i++){
               hr += Math.ceil(piles[i]/k); 
            }
            if(hr <= h){
                ans = k;
                max = k-1;
            }else{
                init = k+1;
            }
        }
        return ans;
    }
}
