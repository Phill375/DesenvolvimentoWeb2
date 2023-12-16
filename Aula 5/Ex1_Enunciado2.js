import { filmes } from './filmes.js';

function gerarId(_filmes) {
  let id = 0;
  let array = [];
  _filmes.forEach((filme) => {
    array.push({
      ...filme,
      id,
    });
    id++;
  });
  return array;
}

function gerarId2(_filmes) {
  let array = [];
  _filmes.forEach((filme, id) => {
    array.push({
      ...filme,
      id,
    });
  });
  return array;
}

console.log(gerarId2(filmes));
