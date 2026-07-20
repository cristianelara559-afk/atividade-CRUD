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

function listarAlunos() {
  if (alunos.length === 0) {
    alert("Nenhum aluno cadastrado.");
    return;
  }

  let texto = "--- LISTA DE ALUNOS ---\n";
  for (let i = 0; i < alunos.length; i++) {
    texto += `- ${alunos[i].nome}\n`;
  }

  alert(texto);
}

function removerAluno() {
  let nome = prompt("Digite o nome do aluno que deseja remover:");
  let aluno = buscarAluno(nome);

  if (!aluno) {
    alert("Aluno não encontrado!");
    return;
  }

  let posicao = alunos.indexOf(aluno);
  alunos.splice(posicao, 1);
  alert(`Aluno "${aluno.nome}" foi removido com sucesso!`);
}

function lancarNota() {
  let nome = prompt("Digite o nome do aluno para lançar a nota:");
  let aluno = buscarAluno(nome);

  if (!aluno) {
    alert("Aluno não encontrado!");
    return;
  }

  let nota = Number(prompt(`Digite a nota para o aluno ${aluno.nome}:`));

  if (isNaN(nota) || nota < 0 || nota > 10) {
    alert("Nota inválida! A nota deve ser entre 0 e 10.");
    return;
  }

  aluno.notas.push(nota);
  alert(`Nota ${nota} adicionada com sucesso para ${aluno.nome}!`);
}

function verBoletim() {
  let nome = prompt("Digite o nome do aluno para ver o boletim:");
  let aluno = buscarAluno(nome);

  if (!aluno) {
    alert("Aluno não encontrado!");
    return;
  }

  let media = calcularMedia(aluno);
  let status = situacao(media);
  let notasTexto = aluno.notas.length > 0 ? aluno.notas.join(", ") : "Nenhuma nota cadastrada";

  let boletim = `=== ${aluno.nome.toUpperCase()} ===\n` +
                `Notas: [ ${notasTexto} ]\n` +
                `Média: ${media.toFixed(2)}\n` +
                `Situação: ${status}`;

  alert(boletim);
}

function totalDeAlunos() {
  alert(`Total de alunos cadastrados: ${alunos.length}`);
}

function totalDeAlunos() {
  alert(`Total de alunos cadastrados: ${alunos.length}`);
}

function mediaGeralDaTurma() {
  if (alunos.length === 0) {
    alert("Nenhum aluno cadastrado para calcular a média geral.");
    return;
  }

  let somaMedias = 0;
  for (let i = 0; i < alunos.length; i++) {
    somaMedias += calcularMedia(alunos[i]);
  }

  let mediaGeral = somaMedias / alunos.length;
  alert(`A média geral da turma é: ${mediaGeral.toFixed(2)}`);
}

function totalDeAlunos() {
  alert(`Total de alunos cadastrados: ${alunos.length}`);
}

function mediaGeralDaTurma() {
  if (alunos.length === 0) {
    alert("Nenhum aluno cadastrado para calcular a média geral.");
    return;
  }

  let somaMedias = 0;
  for (let i = 0; i < alunos.length; i++) {
    somaMedias += calcularMedia(alunos[i]);
  }

  let mediaGeral = somaMedias / alunos.length;
  alert(`A média geral da turma é: ${mediaGeral.toFixed(2)}`);
}

function listarAprovados() {
  if (alunos.length === 0) {
    alert("Nenhum aluno cadastrado.");
    return;
  }

  let texto = "=== ALUNOS APROVADOS ===\n";
  let encontrou = false;

  for (let i = 0; i < alunos.length; i++) {
    let media = calcularMedia(alunos[i]);
    if (situacao(media) === "APROVADO") {
      texto += `- ${alunos[i].nome} (Média: ${media.toFixed(2)})\n`;
      encontrou = true;
    }
  }

  if (encontrou) {
    alert(texto);
  } else {
    alert("Ainda não há alunos aprovados.");
  }
}

function totalDeAlunos() {
  alert(`Total de alunos cadastrados: ${alunos.length}`);
}

function mediaGeralDaTurma() {
  if (alunos.length === 0) {
    alert("Nenhum aluno cadastrado para calcular a média geral.");
    return;
  }

  let somaMedias = 0;
  for (let i = 0; i < alunos.length; i++) {
    somaMedias += calcularMedia(alunos[i]);
  }

  let mediaGeral = somaMedias / alunos.length;
  alert(`A média geral da turma é: ${mediaGeral.toFixed(2)}`);
}

function listarAprovados() {
  if (alunos.length === 0) {
    alert("Nenhum aluno cadastrado.");
    return;
  }

  let texto = "=== ALUNOS APROVADOS ===\n";
  let encontrou = false;

  for (let i = 0; i < alunos.length; i++) {
    let media = calcularMedia(alunos[i]);
    if (situacao(media) === "APROVADO") {
      texto += `- ${alunos[i].nome} (Média: ${media.toFixed(2)})\n`;
      encontrou = true;
    }
  }

  if (encontrou) {
    alert(texto);
  } else {
    alert("Ainda não há alunos aprovados.");
  }
}

function submenuCadastro() {
  let opcao;
  do {
    opcao = Number(
      prompt(
        "-----\n" +
        "1 - Cadastrar aluno\n" +
        "2 - Listar alunos\n" +
        "3 - Remover aluno\n" +
        "0 - Voltar"
      )
    );

    switch (opcao) {
      case 1: cadastrarAluno(); break;
      case 2: listarAlunos(); break;
      case 3: removerAluno(); break;
      case 0: break;
      default: alert("Opção inválida!");
    }
  } while (opcao !== 0);
}

function totalDeAlunos() {
  alert(`Total de alunos cadastrados: ${alunos.length}`);
}

function mediaGeralDaTurma() {
  if (alunos.length === 0) {
    alert("Nenhum aluno cadastrado para calcular a média geral.");
    return;
  }

  let somaMedias = 0;
  for (let i = 0; i < alunos.length; i++) {
    somaMedias += calcularMedia(alunos[i]);
  }

  let mediaGeral = somaMedias / alunos.length;
  alert(`A média geral da turma é: ${mediaGeral.toFixed(2)}`);
}

function listarAprovados() {
  if (alunos.length === 0) {
    alert("Nenhum aluno cadastrado.");
    return;
  }

  let texto = "=== ALUNOS APROVADOS ===\n";
  let encontrou = false;

  for (let i = 0; i < alunos.length; i++) {
    let media = calcularMedia(alunos[i]);
    if (situacao(media) === "APROVADO") {
      texto += `- ${alunos[i].nome} (Média: ${media.toFixed(2)})\n`;
      encontrou = true;
    }
  }

  if (encontrou) {
    alert(texto);
  } else {
    alert("Ainda não há alunos aprovados.");
  }
}

function submenuCadastro() {
  let opcao;
  do {
    opcao = Number(
      prompt(
        "-----\n" +
        "1 - Cadastrar aluno\n" +
        "2 - Listar alunos\n" +
        "3 - Remover aluno\n" +
        "0 - Voltar"
      )
    );

    switch (opcao) {
      case 1: cadastrarAluno(); break;
      case 2: listarAlunos(); break;
      case 3: removerAluno(); break;
      case 0: break;
      default: alert("Opção inválida!");
    }
  } while (opcao !== 0);
}

function submenuNotas() {
  let opcao;
  do {
    opcao = Number(
      prompt(
        "------\n" +
        "1 - Lançar nota\n" +
        "2 - Ver boletim do aluno\n" +
        "0 - Voltar"
      )
    );

    switch (opcao) {
      case 1: lancarNota(); break;
      case 2: verBoletim(); break;
      case 0: break;
      default: alert("Opção inválida!");
    }
  } while (opcao !== 0);
}

function totalDeAlunos() {
  alert(`Total de alunos cadastrados: ${alunos.length}`);
}

function mediaGeralDaTurma() {
  if (alunos.length === 0) {
    alert("Nenhum aluno cadastrado para calcular a média geral.");
    return;
  }

  let somaMedias = 0;
  for (let i = 0; i < alunos.length; i++) {
    somaMedias += calcularMedia(alunos[i]);
  }

  let mediaGeral = somaMedias / alunos.length;
  alert(`A média geral da turma é: ${mediaGeral.toFixed(2)}`);
}

function listarAprovados() {
  if (alunos.length === 0) {
    alert("Nenhum aluno cadastrado.");
    return;
  }

  let texto = "=== ALUNOS APROVADOS ===\n";
  let encontrou = false;

  for (let i = 0; i < alunos.length; i++) {
    let media = calcularMedia(alunos[i]);
    if (situacao(media) === "APROVADO") {
      texto += `- ${alunos[i].nome} (Média: ${media.toFixed(2)})\n`;
      encontrou = true;
    }
  }

  if (encontrou) {
    alert(texto);
  } else {
    alert("Ainda não há alunos aprovados.");
  }
}

function submenuCadastro() {
  let opcao;
  do {
    opcao = Number(
      prompt(
        "-----\n" +
        "1 - Cadastrar aluno\n" +
        "2 - Listar alunos\n" +
        "3 - Remover aluno\n" +
        "0 - Voltar"
      )
    );

    switch (opcao) {
      case 1: cadastrarAluno(); break;
      case 2: listarAlunos(); break;
      case 3: removerAluno(); break;
      case 0: break;
      default: alert("Opção inválida!");
    }
  } while (opcao !== 0);
}

function submenuNotas() {
  let opcao;
  do {
    opcao = Number(
      prompt(
        "------\n" +
        "1 - Lançar nota\n" +
        "2 - Ver boletim do aluno\n" +
        "0 - Voltar"
      )
    );

    switch (opcao) {
      case 1: lancarNota(); break;
      case 2: verBoletim(); break;
      case 0: break;
      default: alert("Opção inválida!");
    }
  } while (opcao !== 0);
}

function submenuRelatorios() {
  let opcao;
  do {
    opcao = Number(
      prompt(
        "------\n" +
        "1 - Total de alunos\n" +
        "2 - Média geral da turma\n" +
        "3 - Listar aprovados\n" +
        "0 - Voltar"
      )
    );

    switch (opcao) {
      case 1: totalDeAlunos(); break;
      case 2: mediaGeralDaTurma(); break;
      case 3: listarAprovados(); break;
      case 0: break;
      default: alert("Opção inválida!");
    }
  } while (opcao !== 0);
}

function totalDeAlunos() {
  alert(`Total de alunos cadastrados: ${alunos.length}`);
}

function mediaGeralDaTurma() {
  if (alunos.length === 0) {
    alert("Nenhum aluno cadastrado para calcular a média geral.");
    return;
  }

  let somaMedias = 0;
  for (let i = 0; i < alunos.length; i++) {
    somaMedias += calcularMedia(alunos[i]);
  }

  let mediaGeral = somaMedias / alunos.length;
  alert(`A média geral da turma é: ${mediaGeral.toFixed(2)}`);
}

function listarAprovados() {
  if (alunos.length === 0) {
    alert("Nenhum aluno cadastrado.");
    return;
  }

  let texto = "=== ALUNOS APROVADOS ===\n";
  let encontrou = false;

  for (let i = 0; i < alunos.length; i++) {
    let media = calcularMedia(alunos[i]);
    if (situacao(media) === "APROVADO") {
      texto += `- ${alunos[i].nome} (Média: ${media.toFixed(2)})\n`;
      encontrou = true;
    }
  }

  if (encontrou) {
    alert(texto);
  } else {
    alert("Ainda não há alunos aprovados.");
  }
}

function submenuCadastro() {
  let opcao;
  do {
    opcao = Number(
      prompt(
        "-----\n" +
        "1 - Cadastrar aluno\n" +
        "2 - Listar alunos\n" +
        "3 - Remover aluno\n" +
        "0 - Voltar"
      )
    );

    switch (opcao) {
      case 1: cadastrarAluno(); break;
      case 2: listarAlunos(); break;
      case 3: removerAluno(); break;
      case 0: break;
      default: alert("Opção inválida!");
    }
  } while (opcao !== 0);
}

function submenuNotas() {
  let opcao;
  do {
    opcao = Number(
      prompt(
        "------\n" +
        "1 - Lançar nota\n" +
        "2 - Ver boletim do aluno\n" +
        "0 - Voltar"
      )
    );

    switch (opcao) {
      case 1: lancarNota(); break;
      case 2: verBoletim(); break;
      case 0: break;
      default: alert("Opção inválida!");
    }
  } while (opcao !== 0);
}

function submenuRelatorios() {
  let opcao;
  do {
    opcao = Number(
      prompt(
        "------\n" +
        "1 - Total de alunos\n" +
        "2 - Média geral da turma\n" +
        "3 - Listar aprovados\n" +
        "0 - Voltar"
      )
    );

    switch (opcao) {
      case 1: totalDeAlunos(); break;
      case 2: mediaGeralDaTurma(); break;
      case 3: listarAprovados(); break;
      case 0: break;
      default: alert("Opção inválida!");
    }
  } while (opcao !== 0);
}

function menuPrincipal() {
  let opcao;
  do {
    opcao = Number(
      prompt(
        "=== MENU PRINCIPAL ===\n" +
        "1 - Cadastro\n" +
        "2 - Notas\n" +
        "3 - Relatórios\n" +
        "0 - Sair"
      )
    );

    switch (opcao) {
      case 1: submenuCadastro(); break;
      case 2: submenuNotas(); break;
      case 3: submenuRelatorios(); break;
      case 0: alert("Saindo do sistema... Até logo!"); break;
      default: alert("Opção inválida!");
    }
  } while (opcao !== 0);
}

menuPrincipal();

