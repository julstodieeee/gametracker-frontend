import React from 'react';

function GameCard({ title, genre, description }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '16px',
      width: '220px',
      boxShadow: '2px 2px 12px rgba(0,0,0,0.1)',
      backgroundColor: '#f9f9f9'
    }}>
      <h2>{title}</h2>
      <p><strong>Género:</strong> {genre}</p>
      <p>{description}</p>
    </div>
  );
}

export default GameCard;
