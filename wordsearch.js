//collaborated with https://github.com/Squoog

const wordSearch = (letters, word) => { 

    if ((letters[0].length === 0) || (word.length === 0)){
        console.log('log something');
        return undefined;
    }
    
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {return true;}
    } 

    const verticalJoin = letters.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) {return true;}
    } 

    for (let i = 0 ; i < letters.length ; i++){
        let string = '';
        for (let letter of letters) {
            
            string += letter[i];
            if (string.includes(word)) {return true;}

        }
    }

    return false;
    
}

module.exports = wordSearch