/**Crie um array de objetos estoque, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidades. */

const estoque = [
    {produto: 'Placa mãe', quantidade: 2, minimo: 5},
    {produto: 'Fonte', quantidade: 10, minimo: 10},
    {produto: 'RAM', quantidade: 32, minimo: 15},
    {produto: 'Placa de video', quantidade: 6, minimo: 8},
    {produto: 'Processador', quantidade: 10, minimo: 5}
];

estoque.forEach(item => {
    if(item.quantidade < item.minimo) {
        item.quantidade *= 2;
    }
});

console.log('Atualização:', estoque);