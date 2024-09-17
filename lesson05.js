/**Crie um array de objetos alunos, cada um com propriedades
nome, nota1, e nota2. Use for of para calcular a média das notas de cada
aluno e exibir o nome do aluno junto com sua média. */

const students = [
    {name: 'Pablo', nota1: 7.0, nota2: 8.0},
    {name: 'Bruna', nota1: 8.2, nota2: 9.0},
    {name: 'Livia', nota1: 8.5, nota2: 7.1},
    {name: 'Murilo', nota1: 9.0, nota2: 8.3}
];

for (let student of students) {
    const average = (student.nota1 + student.nota2) / 2;
    console.log(`Nome: ${student.name}, Média: ${average.toFixed(2)}`);
    
}