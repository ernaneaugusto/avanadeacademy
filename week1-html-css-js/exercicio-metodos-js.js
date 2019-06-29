var alunos = [
   { nome: 'Felipe M.', sexo: 'M', idade: 13 },
   { nome: 'Luíza A.', sexo: 'F', idade: 14 },
   { nome: 'Marcos T.', sexo: 'M', idade: 14 },
   { nome: 'Bianca B.', sexo: 'F', idade: 13 },
   { nome: 'Rogério R.', sexo: 'M', idade: 15 },
];

// listar na tela todos os nomes
console.log("Listagem de nomes")
alunos.forEach(function(item) {
   console.log(item.nome)
})

// dobrem a idade
console.log("\n### Listagem de idades dobradas")
var idadeDobrada = alunos.map(function(item){
   return item.idade * 2;
});
console.log(idadeDobrada);

// filtrar somente para o sexo F
console.log("\n### Listagem pessoas sexo feminino")
var alunosSexoFeminino = alunos.filter(function(item){
   return item.sexo === "F";
});
console.log(alunosSexoFeminino);

// encontrar um registro (Bianca B.)
console.log("\n### Encontrar um nome qualquer");
var buscaAluno = alunos.find(function(item){
   return item.nome == "Bianca B.";
});
console.log(buscaAluno)

// verificar se TODOS atendem critério (idade > 14)
console.log("\n### Verifica se todos tem mais de 14 anos:");
var todosMaioresQue14 = alunos.every(function(item){
   return item.idade > 14;
});
console.log(todosMaioresQue14)

// verificar se alguma atende critério de ter maior de 18 anos ( idade > 18)
console.log("\n### Verifica se todos tem mais de 18 anos:");
var todosMaioresQue18 = alunos.some(function(item){
   return item.idade > 18;
});
console.log(todosMaioresQue18)
