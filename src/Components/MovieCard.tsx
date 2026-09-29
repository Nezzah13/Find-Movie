import type {MovieShort} from "../Hooks/useMovieSearch.ts";
import "../Styles/MovieCard.css"

interface MovieCardProps {
    mov: MovieShort;
    setSelectedMovieId: (id: string | null) => void;
}

function MovieCard({mov, setSelectedMovieId} : MovieCardProps) {
    return (
        <div className="movie-card">
            <img src={mov.Poster} alt={mov.Title} className="movie-card-img"/>
            <p className="text-title">Название: {mov.Title}</p>
            <p className="text-year">Год: {mov.Year}</p>
            <button className="i-button" type={"button"} onClick={() => setSelectedMovieId(mov.imdbID)}>i</button>
        </div>
    )
}

export default MovieCard
