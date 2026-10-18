import {memo} from "react";
import type {MovieShort} from "../Hooks/useMovieSearch.ts";
import "../Styles/MovieCard.css"

interface MovieCardProps {
    mov: MovieShort;
    setSelectedMovieId: (id: string | null) => void;
    toggleFavorite: (movie: MovieShort) => void;
    toggleViewed: (movie : MovieShort) => void;
    favoriteStatus: boolean;
    viewedStatus: boolean;
}

function MovieCard({mov, setSelectedMovieId, toggleFavorite, toggleViewed, favoriteStatus, viewedStatus} : MovieCardProps) {
    return (
        <div className="movie-card">
            <img src={mov.Poster} alt={mov.Title} className="movie-card-img"/>
            <p className="text-title">{mov.Title}</p>
            <p className="text-year">Год: {mov.Year}</p>
            <button className="movie-button" type={"button"} onClick={() => setSelectedMovieId(mov.imdbID)}>ℹ️</button>
            <button className={favoriteStatus ? "dark-movie-button" : "movie-button"} type={"button"} onClick={() => toggleFavorite(mov)}>⭐</button>
            <button className={viewedStatus ? "dark-movie-button" : "movie-button"} type={"button"} onClick={() => toggleViewed(mov)}>👁️</button>
        </div>
    )
}

export default memo(MovieCard)
