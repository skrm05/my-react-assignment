import PropTypes from "prop-types";

function MovieCard({
  title,
  director,
  releaseYear,
  rating,
  genre,
  isPremium,
  posterUrl,
}) {
  return (
    <div
      className="movie-card"
      style={{ border: isPremium ? "2px solid #ffd700" : "1px solid #eee" }}
    >
      <img src={posterUrl} alt={`${title} poster`} className="movie-poster" />
      <h3>
        {title} ({releaseYear})
      </h3>
      <p>
        <strong>Director:</strong> {director}
      </p>
      <p>
        <strong>Rating:</strong> {rating}/10
      </p>
      <p>
        <strong>Genres:</strong> {genre.join(", ")}
      </p>
      {isPremium && <span className="premium-badge">⭐ Premium Content</span>}
    </div>
  );
}

// Implement prop validation using PropTypes library [cite: 86, 88]
MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired,
  rating: PropTypes.number,
  genre: PropTypes.arrayOf(PropTypes.string).isRequired,
  isPremium: PropTypes.bool,
  posterUrl: PropTypes.string,
};

// Set default props where appropriate [cite: 90]
MovieCard.defaultProps = {
  rating: 0,
  isPremium: false,
  posterUrl: "https://via.placeholder.com/300x450?text=No+Poster",
};

export default MovieCard;
