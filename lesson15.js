/**Crie um array de objetos transacoes, onde cada transação tem
tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
somando as entradas e subtraindo as saídas. */

const trasacoes = [
    {tipo: 'entrada', valor: 500},
    {tipo: 'saida', valor: 250},
    {tipo: 'saida', valor: 600},
    {tipo: 'entrada', valor: 350},
    {tipo: 'entrada', valor: 850}
]

let saldoFinal = 0;

trasacoes.forEach(trasacao => {
    if (trasacao.tipo === 'entrada') {
        saldoFinal += trasacao.valor;
    } else if (trasacao.tipo === 'saida'){
        saldoFinal -= trasacao.valor;
    }
});

console.log(`Saldo final: R$${saldoFinal.toFixed(2)}`);
