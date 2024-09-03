const fs = require('fs');
const csv = fs.readFileSync("./oscar_best_pictures.csv").toString();
console.log(csv);
console.log(typeof csv);

const json = parteDificil(csv) 

console.table(json);

/////////////////////////////

function parteDificil(csv) {

}