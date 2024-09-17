/**Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço. */

const produtos = [
    {nome: 'Placa mãe', preco: 1300, desconto: 0.1},
    {nome: 'Fonte', preco: 450, desconto: 0.1},
    {nome: 'RAM', preco: 250, desconto: 0.1},
    {nome: 'Placa de video', preco: 2500, desconto: 0.1},
    {nome: 'Processador', preco: 1450, desconto: 0.1}
];

produtos.forEach (produto => {
    const desconto = produto.preco * 0.1;
    const precoDesconto = produto.preco - desconto;
    console.log(`Produto: ${produto.nome}, Preço sem desconto: R$${produto.preco}, Preço com desconto: R$${precoDesconto.toFixed(2)}`);
    
})