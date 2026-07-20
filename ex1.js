let alunos = [
    {nome: "Larah", notas:[10, 10, 10]},
    {nome: "Marina", notas:[10, 10, 9]},
    {nome: "Sarah", notas:[10, 10, 5]},
    {nome: "Lisy", notas:[0, 0, 0]}
];

function buscarAluno(nome) {
  for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nome.toLowerCase() === nome.toLowerCase()) {
      return alunos[i];
    }
  }
  return undefined;
}

function calcularMedia(aluno) {
  if (aluno.notas.length === 0) {
    return 0;
  }
  let soma = 0;
  for (let i = 0; i < aluno.notas.length; i++) {
    soma += aluno.notas[i];
  }
  return soma / aluno.notas.length;
}

function situacao(media) {
  if (media >= 6) {
    return "APROVADO";
  } else if (media >= 4) {
    return "RECUPERACAO";
  } else {
    return "REPROVADO";
  }
}

function cadastrarAluno() {
  let nome = prompt("Digite o nome do aluno:");
  if (!nome) return;

  if (buscarAluno(nome)) {
    alert("Aluno já existe!");
    return;
  }

  alunos.push({ nome: nome, notas: [] });
  alert(`Aluno "${nome}" cadastrado com sucesso!`);
}

