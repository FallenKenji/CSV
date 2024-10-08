//// Função Principal
const fs = require('fs');
const csv = fs.readFileSync('./oscar_best_pictures.csv').toString();
const {
    quebraLinhas, separaColunas, separaConteudo, constroiObjeto, constroiListaDeObjetos
} = require('csv')
const linhas = quebraLinhas(csv);
const primeiraLinha = linhas.shift();
const headers = separaColunas(primeiraLinha);
const conteudo = separaConteudo(linhas);

console.log(headers);
console.log(conteudo);
const json = constroiListaDeObjetos(headers, conteudo);

console.table(json, ["Filme", "Ano", "Gênero"]);

/////////////////////////////