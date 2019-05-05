/* Accepted */
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

lines.pop();

lines.shift();

const map = lines.map((line) => {
    return line.split('').map((char)=>{
        if(char == '.'){
            return 0;
        }
        return 1;
    });
});

const bfs = (xinital, yinitial) => {
    let quantity = 0;
    const queue = [{
        x: xinital, y: yinitial
    }];
    
    while(queue.length > 0){
        const item = queue.pop();

        if(item.x + 1 < map[0].length && map[item.x + 1][item.y] == 0){
            map[item.x + 1][item.y] = 3;
            queue.push({x: item.x + 1, y: item.y});
        }
        
        if(item.x - 1 >= 0 && map[item.x - 1][item.y] == 0){
            map[item.x - 1][item.y] = 3;
            queue.push({x: item.x - 1, y: item.y});
        }
        
        if(item.y + 1 < map.length && map[item.x][item.y + 1] == 0){
            map[item.x][item.y + 1] = 3;
            queue.push({x: item.x, y: item.y + 1});
        }

        if(item.y - 1 >= 0 && map[item.x][item.y - 1] == 0){
            map[item.x][item.y - 1] = 3;
            queue.push({x: item.x, y: item.y - 1});
        }

        if(item.x + 1 < map[0].length && map[item.x + 1][item.y] == 1){
            map[item.x + 1][item.y] = 2;
            quantity++;
        }
        
        if(item.x - 1 >= 0 && map[item.x - 1][item.y] == 1){
            map[item.x - 1][item.y] = 2;
            quantity++;
        }
        
        if(item.y + 1 < map.length && map[item.x][item.y + 1] == 1){
            map[item.x][item.y + 1] = 2;
            quantity++;
        }

        if(item.y - 1 >= 0 && map[item.x][item.y - 1] == 1){
            map[item.x][item.y - 1] = 2;
            quantity++;
        }
    }

    return quantity;
}

const edges = () => {
    let quantity = 0;
    for (let i = 0; i < map.length; i++) {
        if(map[i][0] == 1){
            map[i][0] = 2;
            quantity++;
        }
    }
    for (let i = 0; i < map.length; i++) {
        if(map[i][map[i].length - 1] == 1){
            map[i][map[i].length - 1] = 2;
            quantity++;
        }
    }
    for (let i = 0; i < map[0].length; i++) {
        if(map[0][i] == 1){
            map[0][i] = 2;
            quantity++;
        }
    }
    for (let i = 0; i < map[0].length; i++) {
        if(map[map[0].length - 1][i] == 1){
            map[map[0].length - 1][i] = 2;
            quantity++;
        }
    }
    return quantity;
}

let result = 0;

for (let x = 0; x < map.length; x++) {
    for (let y = 0; y < map[x].length; y++) {
        if(map[x][y] == 0){
            result += bfs(x,y);
        }
    }
}

result += edges();

console.log(result);