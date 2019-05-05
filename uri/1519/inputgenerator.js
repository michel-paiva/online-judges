const randomInt = (max) => {
    return Number.parseInt(Math.floor(Math.random() * max));
}

const alphabet = 'ab cde fgh ijklmnop qrstuvwxyz ';

for (let j = 0; j < 20; j++) {
    let string = '';
    for (let j = 0; j < 1000; j++) {
        string += alphabet[randomInt(alphabet.length-1)];
    }
    console.log(string);
}
console.log('.')