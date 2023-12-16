import { filmes } from './filmes.js';

function filtrarApenasNomeLancamento(_filmes) {
  const array = [];
  _filmes.forEach((filme) => {
    const obj = {};
    obj.nome = filme.nome;
    obj.lancamento = filme.lancamento;
    array.push(obj);
  });
  return array;
}

function filtrarApenasNomeLancamento2(_filmes) {
  const array = [];
  _filmes.forEach((filme) => {
    array.push({
      nome: filme.nome,
      lancamento: filme.lancamento,
    });
  });
  return array;
}

function filtrarApenasNomeLancamento3(_filmes) {
  const array = [];
  _filmes.forEach((filme) => {
    const { nome, lancamento } = filme;
    array.push({
      nome,
      lancamento,
    });
  });
  return array;
}

function filtrarApenasNomeLancamento4(_filmes) {
  const array = [];
  _filmes.forEach(({ nome, lancamento }) => {
    array.push({
      nome,
      lancamento,
    });
  });
  return array;
}

// console.log(filtrarApenasNomeLancamento(filmes));

console.log(filtrarApenasNomeLancamento4(filmes));
