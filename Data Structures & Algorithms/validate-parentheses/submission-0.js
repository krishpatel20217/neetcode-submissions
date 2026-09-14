class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const map = new Map([
            [')', '('],
            ['}', '{'],
            [']', '[']
        ]);

        for (let char of s) {

            // Opening bracket
            if (char === '(' || char === '{' || char === '[') {
                stack.push(char);
            }

            // Closing bracket
            else {
                if (stack.length === 0 || stack.pop() !== map.get(char)) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}