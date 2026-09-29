import {useState} from "react";
import useDebounce from "./Hooks/useDebounce.ts";
import useMovieSearch from "./Hooks/useMovieSearch.ts";
import useMovieDetails from "./Hooks/useMovieDetails.ts";
import SearchBar from "./Components/SearchBar.tsx";
import MovieList from "./Components/MovieList.tsx";
import MovieDetails from "./Components/MovieDetails.tsx";


function App() {
    const [text, setText] = useState<string>('')
    const [selectedMovieId, setSelectedMovieId] = useState<string | null>(null);
    const debouncedText = useDebounce(text, 500)
    const {movie, loading, error} = useMovieSearch(debouncedText)
    const {fullMovie, fullLoading, fullError} = useMovieDetails(selectedMovieId)


    return (
        <div>
            <SearchBar text={text} setText={setText}/>
            <MovieList movie={movie} loading={loading} error={error} setSelectedMovieId={setSelectedMovieId}/>
            {selectedMovieId !== null && <MovieDetails fullMovie={fullMovie} fullLoading={fullLoading} fullError={fullError} setSelectedMovieId={setSelectedMovieId}/>}
        </div>
    )
}

export default App
