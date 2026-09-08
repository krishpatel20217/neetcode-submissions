class Solution {
    /**
     * @param {number[][]} customers
     * @return {number}
     */
    averageWaitingTime(customers) {
        let start =0;
        let end =0;
        let wait =0;
        
        for(let i=0;i<customers.length;i++){
           if(start<=customers[i][0]){
                start = customers[i][0];
            }
            end = start + customers[i][1];
            wait += (end - customers[i][0]);
            start = end;
            
        }
        wait = (wait/customers.length)
        return wait
        
    }
}
