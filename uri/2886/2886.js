/* time limit */
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const quantity = Number.parseInt(lines.shift());

const items = lines.map((item) => {
    return item.split(' ').map((value)=>{
        return Number.parseFloat(value);
    });
}).sort((c1, c2) => {
    const [ xc1, yc1 ] = c1;
    const [ xc2, yc2 ] = c2;
    
    if(xc1 > xc2) return 1;
    if(xc1 < xc2) return -1;
    if(yc1 > yc2) return 1;
    if(yc1 < yc2) return -1;

    return 0;
});

items.pop();

const testInsersection = (circle1, circle2) => {
    const [ xc1, yc1, rc1 ] = circle1;
    const [ xc2, yc2, rc2 ] = circle2;

    const distance = Math.sqrt((xc2 - xc1) * (xc2 - xc1) + (yc2 - yc1) * (yc2 - yc1));

    if(distance + rc1 < rc2 || distance + rc2 < rc1){
        return 0;
    }

    if(distance > rc1 + rc2){
        return 0;
    }

    if(distance < rc1 + rc2){
        return 2;
    }

    if(distance == rc1 + rc2){
        return 1;
    }

    return 0;
}

let intersectsQuantity = 0;

for (let i = 0; i < items.length; i++) {
    for (let j = i+1; j < items.length; j++) {
        intersectsQuantity += testInsersection(items[i], items[j]);
    }
}

console.log(`${intersectsQuantity >= 2 * quantity ? 'greater' : intersectsQuantity}`);
