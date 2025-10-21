import React, { useState } from 'react';

function ReviewForm({ onSubmit, initialData = { user: '', comment: '', rating: 5 } }) {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ user: '', comment: '', rating: 5 });
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px 0', display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
      <input type="text" name="user" placeholder="Tu nombre" value={formData.user} onChange={handleChange} required />
      <textarea name="comment" placeholder="Tu reseña" value={formData.comment} onChange={handleChange} required />
      <input type="number" name="rating" min="1" max="5" value={formData.rating} onChange={handleChange} required />
      <button type="submit" style={{ padding: '8px', backgroundColor: '#61dafb', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Enviar Reseña
      </button>
    </form>
  );
}

export default ReviewForm;
