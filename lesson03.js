/* Dado um objeto produto com várias propriedades, crie uma
função que retorna um novo objeto contendo apenas as propriedades cujo
valor seja maior que um valor específico. Use for in para filtrar as
propriedades. */

const produto = { 
    nome: 'Celular',
    preco: 2500,
    descricao: 'Samsung S23 FE',
    estoque: 120
}

function filtroPropriedades (produto, valorEspecifico) {
    const newObject = {};
        for(let propriedade in produto) {
            if (produto[propriedade] > valorEspecifico) {
                newObject[propriedade] = produto[propriedade];
            }
         }
         return newObject;
}

const valorEspecifico = 2000;
const result = filtroPropriedades(produto, valorEspecifico);

console.log('Filtro', result);




