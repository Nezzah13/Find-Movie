import type {MovieShort} from "../Hooks/useMovieSearch.ts";

interface FavoriteListProps {
    favoriteMovies: MovieShort[];
    setSelectedMovieId: (id : string | null) => void;
    deleteFavoriteMovie: (movie: MovieShort) => void;
}

function FavoriteList({favoriteMovies, setSelectedMovieId, deleteFavoriteMovie}: FavoriteListProps) {
    if (favoriteMovies.length === 0) return <p className='text-load'> Нет избранных фильмов</p>
    return (
        <div className="movie-card-head">
            {favoriteMovies.map(mov => {
          return  <div className="movie-card" key={mov.imdbID}>
              <img src={mov.Poster} alt={mov.Title} className="movie-card-img"/>
              <p className="text-title">Название: {mov.Title}</p>
              <p className="text-year">Год: {mov.Year}</p>
              <button className="movie-button" type={"button"} onClick={() => setSelectedMovieId(mov.imdbID)}>ℹ️</button>
              <button type="button" className="movie-button" onClick={() => deleteFavoriteMovie(mov)}>🗑</button>
          </div>
        })}
        </div>
    )
}

export default FavoriteList
