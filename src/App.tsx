import {useState} from "react";
import useDebounce from "./Hooks/useDebounce.ts";
import useMovieSearch from "./Hooks/useMovieSearch.ts";
import useMovieDetails from "./Hooks/useMovieDetails.ts";
import SearchBar from "./Components/SearchBar.tsx";
import MovieList from "./Components/MovieList.tsx";
import MovieDetails from "./Components/MovieDetails.tsx";
import Sidebar from "./Components/Sidebar.tsx";
import FavoriteList from "./Components/FavoriteList.tsx";
import ViewedList from "./Components/ViewedList.tsx";
import type {MovieShort} from "./Hooks/useMovieSearch.ts";


function App() {
    const [text, setText] = useState<string>('')
    const [selectedMovieId, setSelectedMovieId] = useState<string | null>(null);
    const debouncedText = useDebounce(text, 500)
    const {movie, loading, error} = useMovieSearch(debouncedText)
    const {fullMovie, fullLoading, fullError} = useMovieDetails(selectedMovieId)
    const [activeList, setActiveList] = useState<'Main' | 'Favorite' | 'Viewed'>('Main')
    const [favoriteMovies, setFavoriteMovies] = useState<MovieShort[]>([])
    const [viewedMovies, setViewedMovies] = useState<MovieShort[]>([])

    const toggleFavorite = (newMovie : MovieShort) => {
        setFavoriteMovies(prev => {
            if (prev.some(mov => mov.imdbID === newMovie.imdbID)) {
                return prev.filter(mov => mov.imdbID !== newMovie.imdbID)
            }
            else {
                return [...prev, newMovie]
            }
        })
    }
    const toggleViewed = (newMovie : MovieShort) => {
        setViewedMovies(prev => {
            if (prev.some(mov => mov.imdbID === newMovie.imdbID)) {
                return prev.filter(mov => mov.imdbID !== newMovie.imdbID)
            }
            else {
                return [...prev, newMovie]
            }
        })
    }

    const deleteFavoriteMovie = (newMovie : MovieShort) => {
        setFavoriteMovies(prev => prev.filter(mov => mov.imdbID !== newMovie.imdbID))
    }
    const deleteViewedMovie = (newMovie : MovieShort) => {
        setViewedMovies(prev => prev.filter(mov => mov.imdbID !== newMovie.imdbID))
    }

    return (
        <div>
            <Sidebar setActiveList={setActiveList}/>
            {activeList === 'Main' && <SearchBar text={text} setText={setText}/>}
            {activeList === 'Main' && <MovieList movie={movie} loading={loading} error={error} setSelectedMovieId={setSelectedMovieId} toggleFavorite={toggleFavorite} toggleViewed={toggleViewed} favoriteMovies={favoriteMovies} viewedMovies={viewedMovies}/>}
            {selectedMovieId !== null && <MovieDetails fullMovie={fullMovie} fullLoading={fullLoading} fullError={fullError} setSelectedMovieId={setSelectedMovieId}/>}
            {activeList === 'Favorite' && <FavoriteList favoriteMovies={favoriteMovies} setSelectedMovieId={setSelectedMovieId} deleteFavoriteMovie={deleteFavoriteMovie}/>}
            {activeList === 'Viewed' && <ViewedList viewedMovies={viewedMovies} setSelectedMovieId={setSelectedMovieId} deleteViewedMovie={deleteViewedMovie}/>}
        </div>
    )
}

export default App
