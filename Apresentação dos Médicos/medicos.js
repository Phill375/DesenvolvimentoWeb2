const medicos = [
    {
      nome: 'Laura',
      sobrenome: 'Silva',
      genero: 'feminino',
      imagemPerfil: 'https://png.pngtree.com/background/20230614/original/pngtree-in-the-style-of-picture-image_3513033.jpg'
    },
    {
      nome: 'Roger',
      sobrenome: 'Soares',
      genero: 'masculino',
      imagemPerfil: 'https://placar.com.br/wp-content/uploads/2021/09/rogermachado_bahia.png'
    },
    {
      nome: 'Claudia',
      sobrenome: 'Raia',
      genero: 'nao-binario',
      imagemPerfil: 'https://png.pngtree.com/background/20230610/original/pngtree-gorilla-face-with-orange-and-blue-lights-picture-image_3110936.jpg'
    },
  ];

  
  
const htmlList = document.querySelector('#medicos');

for (let medico of medicos) {
    const medicoDiv = document.createElement('div');
    medicoDiv.className = 'medico';

    const p = document.createElement('p');
    htmlList.appendChild(p);

    const img = document.createElement('img');
    img.src = medico.imagemPerfil;
    htmlList.appendChild(img);

    let apresentacao = '';

    switch (medico.genero) {
        case 'nao-binario':
            apresentacao = `Dr(e) ${medico.nome} ${medico.sobrenome}`;
            break;
        case 'masculino':
            apresentacao = `Dr. ${medico.nome} ${medico.sobrenome}`;
            break;
        case 'feminino':
            apresentacao = `Dra. ${medico.nome} ${medico.sobrenome}`;
            break;
        default:
            apresentacao = `Médico não informou o gênero`;
    }

    const pApresentacao = document.createElement('p');
    pApresentacao.textContent = apresentacao;
    medicoDiv.appendChild(pApresentacao);

    htmlList.appendChild(medicoDiv);
}