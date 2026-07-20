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

function calcularMedia(notas) {
  if (notas.length === 0) return 0;
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  return soma / notas.length;
}

function cadastrarAluno() {
  let nome = prompt("Digite o nome do aluno:");
  if (!nome) return;

  if (buscarAluno(nome)) {
    alert("Aluno já cadastrado!");
    return;
  }

  alunos.push({ nome: nome, notas: [] });
  alert(`Aluno "${nome}" cadastrado com sucesso!`);
}