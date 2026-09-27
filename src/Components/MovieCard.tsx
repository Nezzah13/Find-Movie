import type {MovieShort} from "../Hooks/useMovieSearch.ts";

interface MovieCardProps {
    mov: MovieShort;
}

function MovieCard({mov} : MovieCardProps) {
    return (
        <div>
                Название: {mov.Title}
                Год: {mov.Year}
                <img src={mov.Poster} alt={mov.Title}/>
        </div>
    )
}

export default MovieCard
