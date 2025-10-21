import React, { useState } from 'react';

function GameForm({ onSubmit, initialData = { title: '', genre: '', description: '' } }) {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: '', genre: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px 0', display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
      <input type="text" name="title" placeholder="Título del juego" value={formData.title} onChange={handleChange} required />
      <input type="text" name="genre" placeholder="Género" value={formData.genre} onChange={handleChange} required />
      <textarea name="description" placeholder="Descripción" value={formData.description} onChange={handleChange} required />
      <button type="submit" style={{ padding: '8px', backgroundColor: '#61dafb', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Guardar Juego
      </button>
    </form>
  );
}

export default GameForm;
