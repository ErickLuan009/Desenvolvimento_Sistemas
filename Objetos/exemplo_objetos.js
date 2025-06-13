const aluno = {
    nome: "Erick",
    idade: 16,
    curso: "Desenvolvimento de Sistemas"
};

console.log(aluno.nome);
console.log(aluno["Idade"]);

aluno.matricula = "2025A";
aluno.idade = 16;
console.log(aluno);

delete aluno.curso;
