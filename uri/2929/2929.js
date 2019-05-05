/* Accepted */
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

lines.shift();
lines.pop();

const stack = [];
const support = [];
for (let i = 0; i < lines.length; i++) {
    const operation = lines[i].split(' ');
    if(operation[0] == 'PUSH'){
        const number = Number.parseInt(operation[1]);
        if(support.length == 0 || support[support.length - 1] >= number){
            support.push(number);
        }
        stack.push(number);
    }
    if(operation[0] == 'POP'){
        if(stack.length == 0){
            console.log('EMPTY');
        }else{
            if(stack[stack.length - 1] == support[support.length-1]){
                support.pop();
            }
            stack.pop();
        }
    }
    if(operation[0] == 'MIN'){
        if(stack.length == 0){
            console.log('EMPTY');
        }else{
            console.log(support[support.length-1]);
        }
    }
}