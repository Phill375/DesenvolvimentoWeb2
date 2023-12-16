// import express from 'express'

import { filmes } from './filmes.js';

// arrow function
const filtrarFIlmesFantasia = (_filmes) => {
  const arrayFilmesFantasia = [];
  _filmes.forEach((filme) => {
    const { generos } = filme;
    let ehFantasia = false;
    generos.forEach((genero) => {
      if (genero === 'Fantasia') {
        ehFantasia = true;
      }
    });
    if (ehFantasia) {
      arrayFilmesFantasia.push(filme);
    }
  });
  return arrayFilmesFantasia;
};

const filtrarFIlmesFantasia2 = (_filmes) => {
  return _filmes.filter((filme) => {
    const { generos } = filme;
    let ehFantasia = false;
    generos.forEach((genero) => {
      if (genero === 'Fantasia') {
        ehFantasia = true;
      }
    });
    return ehFantasia;
  });
};

const filtrarFIlmesFantasia3 = (_filmes) => {
  return _filmes.filter((filme) => {
    const { generos } = filme;
    return generos.some((genero) => genero === 'Fantasia');
  });
};

const filtrarFIlmesFantasia4 = (_filmes) =>
  _filmes.filter(({ generos }) =>
    generos.some((genero) => genero === 'Fantasia')
  );

console.log(filtrarFIlmesFantasia3(filmes));

// function filtrarFilmesFantasia() {

// }
