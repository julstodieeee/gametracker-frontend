import React from 'react';
import GameCard from '../components/GameCard';

function GameLibrary({ games }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Biblioteca de Juegos</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {games && games.map((game, index) => (
          <GameCard 
            key={index}
            title={game.title}
            genre={game.genre}
            description={game.description}
          />
        ))}
      </div>
    </div>
  );
}

export default GameLibrary;
