/* 5% WA */
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

lines.pop();
lines.pop();

const isEconomy = (words, currentWord, newWord) => {
    const charactersCurrent = words.reduce((total, word)=>{
        if(currentWord == word){
            return total += word.length - 2;
        }
        return total;
    },0)
    const charactersNew = words.reduce((total, word)=>{
        if(newWord == word){
            return total += word.length - 2;
        }
        return total;
    },0)

    return charactersNew > charactersCurrent;
}

const abreviate = (line) => {
    const abreviations = new Map();

    const words = line.split(' ');

    words.map((word) => {
        return { key: word[0] + '.', word };
    }).forEach(element => {
        if(element.key.length < element.word.length){
            if(!abreviations.has(element.key)){
                return abreviations.set(element.key, element.word);
            }
            if(abreviations.get(element.key) != element.word && isEconomy(words, abreviations.get(element.key), element.word)){
                return abreviations.set(element.key, element.word);
            }
        }
    });

    const solution = new Map([...abreviations.entries()].sort());
    let phrase = line;
    for (const iterator of solution) {
        phrase = phrase.replace(new RegExp("\\b"+iterator[1]+"\\b",'g'), iterator[0]);
    }

    console.log(phrase);
    console.log(solution.size);
    for (const iterator of solution) {
        console.log(iterator[0] + ' = ' + iterator[1]);
    }
}

for (let i = 0; i < lines.length; i++) {
    abreviate(lines[i]);
}