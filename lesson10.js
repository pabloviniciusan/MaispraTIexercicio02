/**Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos. */

const vendas = [
    {produto: 'Placa mãe', quantidade: 20, valor: 1250},
    {produto: 'Fonte', quantidade: 10, valor: 520},
    {produto: 'RAM', quantidade: 32, valor: 250},
    {produto: 'Placa de video', quantidade: 15, valor: 3100},
    {produto: 'Processador', quantidade: 10, valor: 1600}
];

let valorTotalVendas = 0;

vendas.forEach(venda => {
    valorTotalVendas += venda.quantidade * venda.valor;
});

console.log(`Valor total de vendas de todos os produtos: R$${valorTotalVendas.toFixed(2)}`);
