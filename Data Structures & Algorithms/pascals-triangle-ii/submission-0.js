class Solution {
    /**
     * @param {number} rowIndex
     * @return {number[]}
     */
    getRow(rowIndex) {
        const arr = [];

        for (let i = 0; i <= rowIndex; i++) {
            arr.push(Array(i + 1).fill(1));
        }

        for (let i = 2; i <= rowIndex; i++) {
            for (let j = 1; j < i; j++) {
                arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
            }
        }

        return arr[rowIndex];
    }
}
