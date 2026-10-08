import type {MovieShort} from "../Hooks/useMovieSearch.ts";
import MovieCard from "./MovieCard.tsx";
import "../Styles/MovieList.css"

export interface MovieListProps {
    movie: MovieShort[];
    loading: boolean;
    error: string | null;
    setSelectedMovieId: (id : string | null) => void;
    toggleFavorite: (movie: MovieShort) => void;
    toggleViewed: (movie : MovieShort) => void;
    favoriteMovies: MovieShort[];
    viewedMovies: MovieShort[];
}

function MovieList({movie, loading, error, setSelectedMovieId, toggleFavorite, toggleViewed, favoriteMovies, viewedMovies} : MovieListProps) {
    const favoriteStatus = (favMovie: MovieShort) => {
       return favoriteMovies.some(mov => mov.imdbID === favMovie.imdbID)
    }
    const viewedStatus = (vieMovie: MovieShort) => {
       return viewedMovies.some(mov => mov.imdbID === vieMovie.imdbID)
    }
    if  (loading) return <p className='text-load'>Загрузка...</p>
    else if (error !== null) return <p className='text-load'>{error}</p>
    else if (!movie.length) return <p className='text-load'>Фильмов не найдено</p>
    return (
        <div className="movie-card-head">
            {movie.map(mov => <MovieCard mov={mov} key={mov.imdbID} setSelectedMovieId={setSelectedMovieId} toggleFavorite={toggleFavorite} toggleViewed={toggleViewed} favoriteStatus={favoriteStatus(mov)} viewedStatus={viewedStatus(mov)}/>)}
        </div>
    )
}

export default MovieList
