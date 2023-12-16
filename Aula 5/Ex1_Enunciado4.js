import { filmes } from './filmes.js';

const filtrarFilmesAcaoFiccao = (_filmes) => {
  const filmesAcaoFiccao = [];
  _filmes.forEach((filme) => {
    let acao = false;
    let ficcao = false;
    filme.generos.forEach((genero) => {
      if (genero === 'Ação') {
        acao = true;
      }
      if (genero === 'Ficção Cientifica') {
        ficcao = true;
      }
    });
    if (ficcao && acao) {
      filmesAcaoFiccao.push(filme);
    }
  });
  return filmesAcaoFiccao;
};

console.log(filtrarFilmesAcaoFiccao(filmes));
