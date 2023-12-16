import React from 'react';
import './App.css'

const Personagens = ({ category }) => {
  const todosPersonagens = [
    'Jill Valentine',
    'Claire Redfield',
    'Ada Wong',
    'Chris Redfield',
    'Leon S. Kennedy',
    'Albert Wesker',
  ];

  
  const personagensFiltrados = todosPersonagens.filter(personagem =>
    personagem.toLowerCase().includes(category.toLowerCase())
  );

  return (
    <div className="personagens-container">
      <h3>Personagens de Resident Evil({category})</h3>
      <ul className="personagens-list">
        {personagensFiltrados.map((personagem, index) => (
          <li key={index}>{personagem}</li>
        ))}
      </ul>
    </div>
  );
};

export default Personagens;