import React, { useState } from "react";
import GameCard from "./components/GameCard";

import "./App.css";
import "./components/GameCard.css";

function App() {
  const [games, setGames] = useState([
    {
      name: "Among Us",
      description: "Descubre al impostor y completa tus tareas en la nave.",
      image: "amongus.jpg",
      url: "https://amongusplay.online/",
    },
    {
      name: "Five Nights at Freddy's",
      description: "Sobrevive 5 noches vigilando cámaras y evitando animatrónicos.",
      image: "fnaf.jpg",
      url: "https://fnafunblocked.net/",
    },
    {
      name: "Super Mario Bros",
      description: "Corre, salta y salva el Reino Champiñón.",
      image: "mario.jpg",
      url: "https://supermarioplay.com/",
    },
  ]);

  const [newGame, setNewGame] = useState({
    name: "",
    description: "",
    image: "",
    url: "",
  });

  const [reviews, setReviews] = useState([
    { text: "Increíble selección de juegos retro, pura nostalgia!", author: "GamerLover" },
    { text: "El diseño neón y los clásicos me encantaron 💙", author: "RetroQueen" }
  ]);

  const [newReview, setNewReview] = useState({
    text: "",
    author: ""
  });

  const handleChange = (e) => {
    setNewGame({ ...newGame, [e.target.name]: e.target.value });
  };

  const handleAddGame = (e) => {
    e.preventDefault();

    if (!newGame.name || !newGame.description || !newGame.image || !newGame.url)
      return;

    setGames([...games, newGame]);
    setNewGame({ name: "", description: "", image: "", url: "" });
  };

  const handleReviewChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newReview.text || !newReview.author) return;

    setReviews([...reviews, newReview]);
    setNewReview({ text: "", author: "" });
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1 className="neon-title animate-title">🎮 GameTracker Retro 🎮</h1>
      </header>

      {/* ----- JUEGOS ----- */}
      <section className="game-section">
        <h2 className="neon-subtitle animate-sub">Mis Juegos</h2>

        <div className="game-grid">
          {games.map((game, index) => (
            <GameCard key={index} game={game} />
          ))}
        </div>
      </section>

      {/* ----- AÑADIR JUEGO ----- */}
      <section className="add-game-section">
        <h2 className="neon-subtitle animate-sub">➕ Añadir Nuevo Juego</h2>

        <form className="game-form" onSubmit={handleAddGame}>
          <input
            name="name"
            placeholder="Nombre del juego"
            value={newGame.name}
            onChange={handleChange}
          />
          <input
            name="description"
            placeholder="Descripción"
            value={newGame.description}
            onChange={handleChange}
          />
          <input
            name="image"
            placeholder="Nombre imagen (ej: mario.jpg)"
            value={newGame.image}
            onChange={handleChange}
          />
          <input
            name="url"
            placeholder="URL del juego"
            value={newGame.url}
            onChange={handleChange}
          />

          <button type="submit">Agregar Juego</button>
        </form>
      </section>

      {/* ----- RESEÑAS ----- */}
      <section className="reviews-section">
        <h2 className="neon-subtitle animate-sub">⭐ Reseñas de Jugadores ⭐</h2>

        <form className="reviews-form" onSubmit={handleAddReview}>
          <textarea
            name="text"
            placeholder="Escribe tu reseña..."
            value={newReview.text}
            onChange={handleReviewChange}
          ></textarea>

          <input
            name="author"
            placeholder="Tu nombre"
            value={newReview.author}
            onChange={handleReviewChange}
          />

          <button type="submit">Publicar</button>
        </form>

        <div className="review-list">
          {reviews.map((r, i) => (
            <div className="review" key={i}>
              <p>"{r.text}"</p>
              <span>- {r.author}</span>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>© 2025 GameTracker Retro | Diseñado con 💙 por Juls</p>
      </footer>
    </div>
  );
}

export default App;