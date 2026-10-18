import type {MovieShort} from "../Hooks/useMovieSearch.ts";

interface ViewedListProps {
    viewedMovies: MovieShort[];
    setSelectedMovieId: (id : string | null) => void;
    deleteViewedMovie: (movie: MovieShort) => void;
}
function ViewedList({viewedMovies, setSelectedMovieId, deleteViewedMovie}: ViewedListProps) {
    if (viewedMovies.length === 0) return <p className='text-load'> Нет просмотренных фильмов</p>
    return (
        <div className="movie-card-head">
            {viewedMovies.map(mov => {
                return  <div className="movie-card" key={mov.imdbID}>
                    <img src={mov.Poster} alt={mov.Title} className="movie-card-img"/>
                    <p className="text-title">{mov.Title}</p>
                    <p className="text-year">Год: {mov.Year}</p>
                    <button className="movie-button" type={"button"} onClick={() => setSelectedMovieId(mov.imdbID)}>ℹ️</button>
                    <button type="button" className="movie-button" onClick={() => deleteViewedMovie(mov)}>🗑</button>
                </div>
            })}
        </div>
    )
}

export default ViewedList
