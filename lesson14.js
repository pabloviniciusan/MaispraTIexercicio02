/**Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence. */

const empresa = {
    departamentos: [
        {
            nome: 'Recepção',
            funcionarios: [
                { nome: 'Fernanda', cargo: 'Secretaria' }
            ]
        },
        {
            nome: 'Consultor',
            funcionarios: [
                { nome: 'Pablo', cargo: 'Projetista' }
            ]
        },
        {
            nome: 'Tecnologia',
            funcionarios: [
                { nome: 'Felipe', cargo: 'Suporte TI' }
            ]
        },
        {
            nome: 'Administração',
            funcionarios: [
                { nome: 'Alexandre', cargo: 'Admnistrador' }
            ]
        },
    ]
}

for (let index in empresa.departamentos) {
    const departamento = empresa.departamentos[index];
    console.log(`Departamento: ${departamento.nome}`);

    for (let funcionario of departamento.funcionarios) {
        console.log(`Funcionario: ${funcionario.nome}, Cargo: ${funcionario.cargo}`);  
    }  
}