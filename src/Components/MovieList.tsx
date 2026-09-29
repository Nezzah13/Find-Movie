import type {MovieShort} from "../Hooks/useMovieSearch.ts";
import MovieCard from "./MovieCard.tsx";
import "../Styles/MovieList.css"

interface MovieListProps {
    movie: MovieShort[];
    loading: boolean;
    error: string | null;
    setSelectedMovieId: (id : string | null) => void;
}

function MovieList({movie, loading, error, setSelectedMovieId} : MovieListProps) {

    if  (loading) return <p>Загрузка...</p>
    else if (error !== null) return <p>{error}</p>
    else if (!movie.length) return <p>Фильмов не найдено</p>
    return (
        <div className="movie-card-head">
            {movie.map(mov => <MovieCard mov={mov} key={mov.imdbID} setSelectedMovieId={setSelectedMovieId}/>)}
        </div>
    )
}

export default MovieList
