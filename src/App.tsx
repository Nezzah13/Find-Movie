import {useState} from "react";
import useDebounce from "./Hooks/useDebounce.ts";
import useMovieSearch from "./Hooks/useMovieSearch.ts";
import SearchBar from "./Components/SearchBar.tsx";
import MovieList from "./Components/MovieList.tsx";


function App() {
    const [text, setText] = useState<string>('')
    const debouncedText = useDebounce(text, 500)
    const {movie, loading, error} = useMovieSearch(debouncedText)

    return (
        <div>
            <SearchBar text={text} setText={setText}/>
            <MovieList movie={movie} loading={loading} error={error}/>
        </div>
    )
}

export default App
