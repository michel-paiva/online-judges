/* Accepted */
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

lines.pop();

let quantity = Number.parseInt(lines[0]);
lines.shift();

const digraphs = new Map();

const calculateDigraphs = (line) => {
    for (let i = 1; i < line.length; i++) {
        if(digraphs.has(line.slice(i-1,i+1))){
            digraphs.set(line.slice(i-1,i+1),digraphs.get(line.slice(i-1,i+1)) + 1);
        }else{
            digraphs.set(line.slice(i-1,i+1), 1);
        }
    }
}

while(quantity != 0)
{
    let i = 0;
    let allLines = '';
    while(i < quantity) {
        allLines += lines[i];
        i++;
    }
    calculateDigraphs(allLines);
    i = 0;
    while(i < quantity){
        lines.shift();
        i++;
    }
    quantity = Number.parseInt(lines[0]);
    lines.shift();

    const sorted = [...digraphs.entries()].sort((d1, d2) => {
        if(d1[1] > d2[1]){
            return -1;
        }
        if(d1[1] < d2[1]){
            return 1;
        }
        if(d1[0] > d2[0]){
            return 1;
        }
        if(d1[0] < d2[0]){
            return -1;
        }
        return 0;
    });

    for (let d = 0; d < 5; d++) {
        console.log(`${sorted[d][0]} ${sorted[d][1]} ${ (sorted[d][1] / Number.parseFloat(allLines.length - 1)).toFixed(6)}`);
    }
    console.log();

    digraphs.clear();
}