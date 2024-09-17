/**Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico. */

const funcionarios = [
    {name: 'Pablo', cargo: 'Arquiteto', salario: 3000},
    {name: 'Bruna', cargo: 'Enfermeira', salario: 4800},
    {name: 'Livia', cargo: 'Enfermeira', salario: 4000},
    {name: 'Murilo', cargo: 'Dentista', salario: 3500},
    {name: 'Antonio', cargo: 'Vendedor', salario: 1400}
];

const salarioMinimo = 1480;

for (let funcionario of funcionarios) {
    if (funcionario.salario > salarioMinimo) {
        console.log(`Nome: ${funcionario.name}, Cargo: ${funcionario.cargo}, Salario: ${funcionario.salario}`);     
    }
}