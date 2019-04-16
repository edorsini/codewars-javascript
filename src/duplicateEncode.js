function duplicateEncode(word){
    let result = '';

    for(let i=0; i < word.length; i++) {
        let current_char = word[i];

        if (['(', ')'].includes(current_char)) {
            current_char = '\\' + current_char ;
        }

        let re = new RegExp(current_char,"gi");
        let char_count =  word.match(re).length;

        if(char_count === 1) {
            result = `${result}(`;
        } else if (char_count > 1) {
            result = `${result})`;
        }
    }

    return result;
}

module.exports = {
  duplicateEncode: duplicateEncode
}


console.log("adding...");


