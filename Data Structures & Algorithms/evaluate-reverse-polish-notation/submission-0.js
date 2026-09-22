class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let arr = [];
        let set = new Set(["+", "-", "*","/"]);
        for(let i=0;i<tokens.length;i++){
            if(!set.has(tokens[i])){
                arr.push(Number(tokens[i]));
            }else{
               let b = arr.pop();
                let a = arr.pop();

                if (tokens[i] === "+") {
                    arr.push(a + b);
                } 
                else if (tokens[i] === "-") {
                    arr.push(a - b);
                } 
                else if (tokens[i] === "*") {
                    arr.push(a * b);
                } 
                else {
                    arr.push(Math.trunc(a / b));
                }
            }
        }
        return arr[0];
    }
}
