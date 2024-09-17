/*Crie um array de objetos pessoas, onde cada objeto representa
uma pessoa com nome, idade, e cidade. Use for of para exibir as
informações de cada pessoa no console. */

const people = [
    {name: 'Pablo', age: 34, city: 'Caldas Novas'},
    {name: 'Bruna', age: 33, city: 'Campina Grande'},
    {name: 'Lívia', age: 7, city: 'João Pessoa'},
    {name: 'Murilo', age: 4, city: 'João Pessoa'}
];

for (let person of people) {
    console.log(`Nome: ${person.name}, idade: ${person.age}, cidade: ${person.city}`);
}