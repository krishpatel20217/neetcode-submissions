class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let top=0;
        let bottom=matrix.length-1;
        while(top<=bottom){
            const mid = Math.floor((top+bottom)/2);
            if(target >= matrix[mid][0] &&
               target <= matrix[mid][matrix[mid].length - 1]
               ){
                let low = 0;
                let high = matrix[mid].length - 1;
                while(low<=high){
                    let center = Math.floor((low+high)/2);
                    if(matrix[mid][center]===target){
                        return true;
                    }
                    if(target<matrix[mid][center]){
                        high = center-1;
                    }else{
                        low = center+1;
                    }
                }
                return false;
            }
            if(target<matrix[mid][0]){
                bottom=mid-1;
            }else{
                top=mid+1;
            }
        }
        return false;
    }
}
