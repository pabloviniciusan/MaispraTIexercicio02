/**Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho. */

const carrinho = {
    itens: [
        {nome: 'Placa mãe', quantidade: 1, precoUnitario: 1250},
        {nome: 'Fonte', quantidade: 1, precoUnitario: 550},
        {nome: 'RAM', quantidade: 4, precoUnitario: 150},
        {nome: 'Placa de video', quantidade: 1, precoUnitario: 2350},
        {nome: 'Processador', quantidade: 1, precoUnitario: 1500}
    ]
};

let valorTotalCarrinho = 0;

carrinho.itens.forEach(item => {
    valorTotalCarrinho += item.quantidade * item.precoUnitario;
});

console.log(`Valor total do carrinho: R$${valorTotalCarrinho.toFixed(2)}`);
