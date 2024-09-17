/**Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes. */

const filmes = [
    {titulo: 'À Espera de um Milagre', diretor: 'Frank Darabont', anoLancamento: 2000},
    {titulo: 'Gladiador', diretor: 'Ridley Scott', anoLancamento: 2000},
    {titulo: 'Coração Valente', diretor: 'Mel Gibson', anoLancamento: 1995},
];

const titulosFilmes = [];

filmes.forEach(filme => {
    titulosFilmes.push(filme.titulo);
});

console.log('Títulos dos filmes:', titulosFilmes);