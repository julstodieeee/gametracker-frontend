import React, { useState } from 'react';
import GameLibrary from './pages/GameLibrary';
import GameForm from './components/GameForm';
import ReviewList from './components/ReviewList';
import ReviewForm from './components/ReviewForm';
import StatsDashboard from './components/StatsDashboard';

function App() {
  const [games, setGames] = useState([
    { title: 'The Legend of Zelda', genre: 'Aventura', description: 'Explora Hyrule y salva el reino.' },
    { title: 'Mario Kart', genre: 'Carreras', description: 'Compite en carreras divertidas con amigos.' },
    { title: 'Minecraft', genre: 'Sandbox', description: 'Construye tu mundo y sobrevive a criaturas.' }
  ]);

  const [reviews, setReviews] = useState([
    { user: 'Lily', comment: 'Me encanta Zelda!', rating: 5 },
    { user: 'Julieta', comment: 'Minecraft es muy creativo', rating: 4 }
  ]);

  const [stats, setStats] = useState({
    gamesPlayed: 3,
    averageRating: 4.5,
    reviewsWritten: 2
  });

  const addGame = (game) => {
    setGames([...games, game]);
    setStats(prev => ({ ...prev, gamesPlayed: prev.gamesPlayed + 1 }));
  };

  const addReview = (review) => {
    setReviews([...reviews, review]);
    setStats(prev => ({ ...prev, reviewsWritten: prev.reviewsWritten + 1 }));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <h1 className="text-4xl text-pink-500 font-bold mb-4">
        ¡Hola Tailwind está funcionando! 🚀
      </h1>

      <div style={{ padding: '20px' }}>
        <h1 className="text-3xl text-white font-bold mb-4">GameTracker</h1>
        <GameForm onSubmit={addGame} />
        <GameLibrary games={games} />
        <ReviewForm onSubmit={addReview} />
        <ReviewList reviews={reviews} />
        <StatsDashboard stats={stats} />
      </div>
    </div>
  );
}

export default App;
