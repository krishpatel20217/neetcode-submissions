class Solution {
    /**
     * @param {string} text
     * @return {number}
     */
    maxNumberOfBalloons(text) {
        const map = new Map();
        for(let i=0;i<text.length;i++){
            if(map.has(text[i])){
                map.set(text[i],map.get(text[i])+1);
            }else{
                map.set(text[i],1);
            }
        }
        let i=0;
        while(i!=-1){
            if(map.get('b')>=1 && map.get('a')>=1 && map.get('l')>=2
            && map.get('o')>=2 && map.get('n')>=1){
                i++;
                map.set('b',map.get('b')-1);
                map.set('a',map.get('a')-1);
                map.set('l',map.get('l')-2);
                map.set('o',map.get('o')-2);
                map.set('n',map.get('n')-1);

            }else{
                return i;
            }
        }
        
    }
}
