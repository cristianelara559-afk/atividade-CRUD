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

function lancarNota() {
  let nome = prompt("Digite o nome do aluno para lançar a nota:");
  let aluno = buscarAluno(nome);

  if (!aluno) {
    alert("Aluno não encontrado!");
    return;
  }
  let nota = parseFloat(prompt(`Digite a nota para ${aluno.nome}:`));
  if (isNaN(nota) || nota < 0 || nota > 10) {
    alert("Nota inválida! Digite um valor entre 0 e 10.");
    return;
  }
  aluno.notas.push(nota);
  alert(`Nota ${nota} adicionada para ${aluno.nome}!`);
}

function exibirRelatorio() {
  if (alunos.length === 0) {
    alert("Nenhum aluno cadastrado.");
    return;
  }

  let relatorio = "a turma se comporta muito bem";

  for (let i = 0; i < alunos.length; i++) {
    let aluno = alunos[i];
    let media = calcularMedia(aluno.notas);
    let status = media >= 7 ? "Aprovado" : "Reprovado";
    let notasTexto = aluno.notas.length > 0 ? aluno.notas.join(", ") : "Sem notas";

    relatorio += `Aluno: ${aluno.nome}\n`;
    relatorio += `Notas: [${notasTexto}]\n`;
    relatorio += `Média: ${media.toFixed(1)} | Status: ${status}\n`;
    relatorio += "---------------------------\n";
  }

  alert(relatorio);
  console.log(relatorio);
}

function menu() {
  let opcao = "";

  while (opcao !== "4") {
    opcao = prompt(
      "------\n" +
      "1. Cadastrar Aluno\n" +
      "2. Lançar Nota\n" +
      "3. Gerar Relatório\n" +
      "4. Sair\n\n" +
      "Escolha uma opção:"
    );

    switch (opcao) {
      case "1":
        cadastrarAluno();
        break;
      case "2":
        lancarNota();
        break;
      case "3":
        exibirRelatorio();
        break;
      case "4":
        alert("Saindo do sistema...");
        break;
      default:
        if (opcao !== null) alert("Opção inválida! Tente novamente.");
    }
  }
}