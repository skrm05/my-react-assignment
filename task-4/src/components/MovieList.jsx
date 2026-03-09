import MovieCard from "./MovieCard";

function MovieList() {
  // Using dummy API images for movie posters
  const movies = [
    {
      id: 1,
      title: "Inception",
      director: "Christopher Nolan",
      releaseYear: 2010,
      rating: 8.8,
      genre: ["Sci-Fi", "Action"],
      isPremium: true,
      posterUrl:
        "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    },
    {
      id: 2,
      title: "The Matrix",
      director: "Wachowskis",
      releaseYear: 1999,
      rating: 8.7,
      genre: ["Sci-Fi"],
      isPremium: true,
      posterUrl:
        "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    },
    {
      id: 3,
      title: "Interstellar",
      director: "Christopher Nolan",
      releaseYear: 2014,
      rating: 8.6,
      genre: ["Sci-Fi", "Drama"],
      isPremium: false,
      posterUrl:
        "https://image.tmdb.org/t/p/w500/gEU2QlsUU61nJbL8zXbIeSgZ90h.jpg",
    },
    {
      id: 4,
      title: "Parasite",
      director: "Bong Joon Ho",
      releaseYear: 2019,
      rating: 8.5,
      genre: ["Thriller"],
      isPremium: true,
      posterUrl:
        "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    },
    {
      id: 5,
      title: "Dune",
      director: "Denis Villeneuve",
      releaseYear: 2021,
      rating: 8.0,
      genre: ["Sci-Fi", "Adventure"],
      isPremium: false,
      posterUrl:
        "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    },
  ];

  return (
    <div className="movies-grid">
      {/* Passes each movie's data to MovieCard as props [cite: 83] */}
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          director={movie.director}
          releaseYear={movie.releaseYear}
          rating={movie.rating}
          genre={movie.genre}
          isPremium={movie.isPremium}
          posterUrl={movie.posterUrl}
        />
      ))}
    </div>
  );
}
export default MovieList;
