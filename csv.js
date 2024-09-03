function quebraLinhas(csv) {
    let linhas = csv.trim().split('\n');
    return linhas;
}

function separaColunas(linha) {
    let colunas = linha.trim().split(';')
    return colunas;
}

function separaConteudo(lines) {
    const conteudo = [];

    for(let i=0; i<lines.length; i++) {
        let linha = lines[i];
        console.log(linha);
        let colunas = separaColunas(linha);
        console.log(colunas);

        conteudo.push(colunas);
    
    }

    return conteudo;
}

function constroiObjeto(headers,linhaTabela) {
    let obj = {};
    for(let j=0; j<headers.length; j++){
        let titulo = headers[j];
        let coluna = linhaTabela[j];

        obj[titulo] = coluna;
    }
        return obj;
}


function parteDificil(headers, conteudo) {
    const result = [];

    for(let i=0; i<conteudo.length; i++) {
       const linhaTabela = conteudo[i];
       const obj = constroiObjeto(headers,linhaTabela)
    
        result.push(obj);
    }

    return result;
}
