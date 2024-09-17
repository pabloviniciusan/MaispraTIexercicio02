/** Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos.*/

const clientes = [
    {name: 'Pablo', age: 34, city: 'Caldas Novas'},
    {name: 'Bruna', age: 33, city: 'Campina Grande'},
    {name: 'Lívia', age: 7, city: 'João Pessoa'},
    {name: 'Murilo', age: 4, city: 'João Pessoa'}
];

let clientesMais30 = 0;

clientes.forEach(cliente => {
    if (cliente.age > 30) {
        clientesMais30++;
    }
});

console.log(`Total de clientes acima de 30 anos: ${clientesMais30}`);
