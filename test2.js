const fs = require('fs');
var input = fs.readFileSync('./oscar_best_pictures.csv').toString();
let lines = input.split("\n");
function cabeca() {
    return lines[0].split(";"); 
}
function info() {
    let data = [];
    for (let i = 1; i < lines.length; i++) { 
        data.push(lines[i].split(";")); 
    }
    return data;
}
console.table(cabeca());
let arr = [
    cabeca(), 
    ...info() 
];
console.table(arr);