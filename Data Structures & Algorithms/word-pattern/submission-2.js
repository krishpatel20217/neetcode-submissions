class Solution {
    /**
     * @param {string} pattern
     * @param {string} s
     * @return {boolean}
     */
    wordPattern(pattern, s) {
        const arr = s.split(' ');

        if (arr.length !== pattern.length) {
            return false;
        }

        const charToWord = new Map();
        const wordToChar = new Map();

        for (let i = 0; i < pattern.length; i++) {
            const char = pattern[i];
            const word = arr[i];

            if (
                (charToWord.has(char) && charToWord.get(char) !== word) ||
                (wordToChar.has(word) && wordToChar.get(word) !== char)
            ) {
                return false;
            }

            charToWord.set(char, word);
            wordToChar.set(word, char);
        }

        return true;
    }
}