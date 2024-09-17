/** Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente.*/

const pedidos = [
    {cliente: 'Pablo', produto: 'Placa mãe', quantidade: 1},
    {cliente: 'Bruna', produto: 'Fonte', quantidade: 1},
    {cliente: 'Livia', produto: 'RAM', quantidade: 4},
    {cliente: 'Murilo', produto: 'Placa de video', quantidade: 1},
    {cliente: 'Antonio', produto: 'Processador', quantidade: 1}
];

const quantidadeTotalPorCliente = {};

pedidos.forEach (pedido => {
    if (quantidadeTotalPorCliente[pedido.cliente]) {
        quantidadeTotalPorCliente[pedido.cliente] += pedido.quantidade;
    } else {
        quantidadeTotalPorCliente [pedido.cliente] = pedido.quantidade
    }
});

console.log('Quantidade total de pedidos por cliente: ', quantidadeTotalPorCliente);
