const alunos = [
    {
      nome: 'Mathias',
      notas: [
        { cadeira: 'DW2', nota: 10 },
        { cadeira: 'BD2', nota: 7 },
      ],
    },
    {
      nome: 'Luiza',
      notas: [
        { cadeira: 'DW2', nota: 8 },
        { cadeira: 'BD2', nota: 8 },
      ],
    },
    {
      nome: 'Pedro',
      notas: [
        { cadeira: 'DW2', nota: 10 },
        { cadeira: 'BD2', nota: 10 },
      ],
    },
  ];
  
  const alunosComMediaGeral = alunos.map((aluno) => {
    const notas = aluno.notas.map((nota) => nota.nota);
    let somaDasNotas = 0;
  
    for (let i = 0; i < notas.length; i++) {
      somaDasNotas += notas[i];
    }
  
    const mediaGeral = somaDasNotas / notas.length;
    return { ...aluno, mediaGeral };
  });
  
  alunosComMediaGeral.map((aluno) => {
    console.log(`${aluno.nome}: Média Geral = ${aluno.mediaGeral}`);
  });