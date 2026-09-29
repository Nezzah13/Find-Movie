import type {MovieFull} from '../Hooks/useMovieDetails'
import "../Styles/MovieDetails.css"

interface MovieDetailsProps {
    fullMovie: MovieFull | null;
    fullLoading: boolean;
    fullError: string | null;
    setSelectedMovieId: (id: string | null) => void;
}

function MovieDetails({fullMovie, fullLoading, fullError, setSelectedMovieId}: MovieDetailsProps) {
    if (fullLoading) return <p>Загрузка...</p>
    else if (fullError !== null) return <p>{fullError}</p>
    else if (fullMovie === null) return <p>Нет информации о фильме</p>
    return (
        <div className="movie-details-background">
            <div className="movie-details">
                <button className="x-button" type={"button"} onClick={() => setSelectedMovieId(null)}>X</button>
                <h2 className="header-name">{fullMovie.Title}</h2>
                <div className="details-content">
                    <img className="img-poster" src={fullMovie.Poster} alt={fullMovie.Title}/>
                    <div>
                        <h4>Год</h4>
                        <p>{fullMovie.Year}</p>
                    </div>
                    <div>
                        <h4>Жанр</h4>
                        <p>{fullMovie.Genre}</p>
                    </div>
                    <div>
                        <h4>Рейтинг</h4>
                        <p>{fullMovie.imdbRating}</p>
                    </div>
                    <div>
                        <h4>Описание</h4>
                        <p>{fullMovie.Plot}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails
