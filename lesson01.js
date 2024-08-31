/*Crie um objeto carro com propriedades como marca, modelo,
ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
valores no console. */

const car = {
    marca: "Fiat",
    ano: 2022,
    modelo: "Pulse",
    cor: "Azul Amalfi"
}

for (let p in car) {
    console.log(p, car[p]);
}