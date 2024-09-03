//// Função Principal
const fs = require('fs');
const csv = fs.readFileSync('./oscar_best_pictures.csv').toString();
const linhas = quebraLinhas(csv);
const primeiraLinha = linhas.shift();
const headers = separaColunas(primeiraLinha);
const conteudo = separaConteudo(linhas);
const json = parteDificil(headers, conteudo);

console.log(headers);
console.log(conteudo);
console.table(json, ["Filme", "Ano", "Gênero"]);

/////////////////////////////

