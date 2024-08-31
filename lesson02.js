/*Crie um objeto livro com propriedades titulo, autor,
anoPublicacao e genero. Verifique se a propriedade editora existe no
objeto usando for in. Se não existir, adicione essa propriedade ao objeto. */

const livro = {
    titulo: "Tratado de Enfermagem",
    autor: "Rômulo Passos",
    anoPublicacao: 2021,
    genero: "Educação"
};

if (!livro.editora) {
    livro.editora = "Brasileiro & Passos"
}

console.log(livro);