/* Accepted */
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

lines.pop();

const allWords = new Map();

const dfs = (word) => {
    const string = String(word);
    allWords.set(string, true);

    for (let i = 0; i < string.length; i++) {
        const without = string.slice(0,i) + string.slice(i+1);
        if(!allWords.has(without) && without != ''){
            dfs(without);
        }
    }
}

for (const line of lines) {
    dfs(line);

    const result = [...allWords.keys()].sort();

    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
    console.log('');

    allWords.clear();
}

