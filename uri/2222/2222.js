/* time limit */
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const instances = lines[0];

lines.shift();
lines.pop();

for (let i = 0; i < instances; i++) {
    const sets = [];
    const setsQuantity = lines[0];
    
    lines.shift();

    for (let j = 0; j < setsQuantity; j++) {
        const newSet = lines[j].split(' ');
        newSet.shift();
        sets.push(new Array(61).fill(0));
        newSet.forEach((v) => {
            sets[j][v] = 1;
        });
    }

    for (let j = 0; j < setsQuantity; j++) {
        lines.shift();
    }

    const instructionsQuantity = lines[0];

    lines.shift();
    
    for (let j = 0; j < instructionsQuantity; j++) {
        const [operation,set1, set2] = lines[j].split(' ');
        if(operation == 1){
            let result = 0;
            for (let k = 0; k < 61; k++) {
                if(sets[set1-1][k] && sets[set2-1][k]){
                    result++;
                }
            }
            console.log(result);
        }else{
            let result = 0;
            for (let k = 0; k < 61; k++) {
                if(sets[set1-1][k] || sets[set2-1][k]){
                    result++;
                }
            }
            console.log(result);
        }
    }

    for (let j = 0; j < instructionsQuantity; j++) {
        lines.shift();
    }
}