import type {MovieShort} from "../Hooks/useMovieSearch.ts";
import "../Styles/MovieCard.css"

interface MovieCardProps {
    mov: MovieShort;
}

function MovieCard({mov} : MovieCardProps) {
    return (
        <div className="movie-card">
                <img src={mov.Poster} alt={mov.Title} className="movie-card-img"/>
                <p>Название: {mov.Title}</p>
                <p>Год: {mov.Year}</p>
        </div>
    )
}

export default MovieCard
