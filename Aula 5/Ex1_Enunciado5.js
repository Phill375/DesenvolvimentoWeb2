const filmes = Object.freeze([
    {
      nome: 'O Labirinto do Fauno',
      lancamento: 2006,
      diretores: ['Guillermo del Toro'],
      generos: ['Fantasia'],
    },
    {
      nome: 'As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa',
      lancamento: 2005,
      diretores: ['Andrew Adamson'],
      generos: ['Fantasia', 'Aventura'],
    },
    {
      nome: 'Indiana Jones e os Caçadores da Arca Perdida',
      lancamento: 1981,
      diretores: ['Steven Spielberg'],
      generos: ['Aventura'],
    },
    {
      nome: 'Jurassic Park: Parque dos Dinossauros',
      lancamento: 1993,
      diretores: ['Steven Spielberg'],
      generos: ['Aventura'],
    },
    {
      nome: 'Mad Max: Estrada da Fúria',
      lancamento: 2015,
      diretores: ['George Miller'],
      generos: ['Ação'],
    },
    {
      nome: 'Duro de Matar',
      lancamento: 1988,
      diretores: ['John McTiernan'],
      generos: ['Ação'],
    },
    {
      nome: 'Blade Runner: O Caçador de Androides',
      lancamento: 1982,
      diretores: ['Ridley Scott'],
      generos: ['Ficção Científica'],
    },
    {
      nome: 'Interstellar',
      lancamento: 2014,
      diretores: ['Christopher Nolan'],
      generos: ['Ficção Científica'],
    },
    {
      nome: 'O Senhor do Aneis: A Sociedade do Anel',
      lancamento: 2002,
      diretores: ['Peter Jackson'],
      generos: ['Fantasia', 'Aventura'],
    },
    {
      nome: 'Harry Potter e a Pedra Filosofal',
      lancamento: 2001,
      diretores: ['Chris Columbus'],
      generos: ['Fantasia'],
    },
    {
      nome: 'Matrix',
      lancamento: 1999,
      diretores: ['Lana Wachowski', 'Lilly Wachowski'],
      generos: ['Ação', 'Ficção Cientifica'],
    },
  ]);
  
  const root = document.querySelector('#root');
  
  function renderizaTitulo() {
    const h1 = document.createElement('h1');
    h1.textContent = 'Meus Filmes';
    root.appendChild(h1);
  }
  
  function listarFilmes() {
    const ul = document.createElement('ul');
    filmes.forEach(filme => {
      const {lancamento} = filme;
      if(lancamento <= 2000) {
        const li = document.createElement('li');
        const h5 = document.createElement('h5');
        h5.textContent = filme.nome;
        li.appendChild(h5);
        ul.appendChild(li);
        listarGeneros2(filme, li);
      }
    });
    root.appendChild(ul);
  }
  
  function listarGeneros(filme, container) {
    const ul = document.createElement('ul');
    ul.setAttribute('class', 'listagem_horizontal');
    filme.generos.forEach(genero => {
      const li = document.createElement('li');
      li.textContent = genero;
      ul.appendChild(li);
    });
    container.appendChild(ul);
  }
  
  function listarGeneros2(filme, container) {
    const span = document.createElement('span');
    span.textContent = filme.generos.join(', ');
    container.appendChild(span);
  }
  
  renderizaTitulo();
  listarFilmes();