class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[]}
     */
    findMissingAndRepeatedValues(grid) {
        const n = grid.length;
        const ans = [-1, -1];

        // Mark visited numbers
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {

                const value = Math.abs(grid[i][j]);
                const index = value - 1;

                const row = Math.floor(index / n);
                const col = index % n;

                if (grid[row][col] < 0) {
                    ans[0] = value; // repeated
                } else {
                    grid[row][col] = -grid[row][col];
                }
            }
        }

        // Find missing number
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {

                if (grid[i][j] > 0) {
                    ans[1] = i * n + j + 1;
                    return ans;
                }
            }
        }

        return ans;
    }
}