import React from 'react';

function StatsDashboard({ stats }) {
  return (
    <div style={{ margin: '20px 0' }}>
      <h2>Estadísticas Personales</h2>
      <p>Juegos jugados: {stats?.gamesPlayed || 0}</p>
      <p>Promedio de puntuación: {stats?.averageRating || 0}</p>
      <p>Reseñas escritas: {stats?.reviewsWritten || 0}</p>
    </div>
  );
}

export default StatsDashboard;
