import React from 'react';

function ReviewList({ reviews }) {
  return (
    <div>
      <h2>Reseñas</h2>
      {reviews && reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '5px 0', borderRadius: '5px' }}>
            <p><strong>{review.user}:</strong> {review.comment}</p>
            <p>Puntuación: {review.rating}/5</p>
          </div>
        ))
      ) : (
        <p>No hay reseñas aún.</p>
      )}
    </div>
  );
}

export default ReviewList;
