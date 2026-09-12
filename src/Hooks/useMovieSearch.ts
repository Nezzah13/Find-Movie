import {useState, useEffect} from 'react'

interface MovieShort {
    Poster: string;
    Title: string;
    Year: string;
    imdbID: string
}

const useMovieSearch = (query :string) => {
    const [movie, setMovie] = useState<MovieShort[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const loadMovies = async () => {
            setLoading(true)
            try{
                const response = await fetch(`https://www.omdbapi.com/?apikey=5d1ce4fe&s=${query}`)
                if (!response.ok) {
                    setError('Ошибка запроса')
                    setLoading(false)
                    return
                }
                const data = await response.json()
                if (data.Response === 'False') {
                    setError('Ошибка запроса фильмов')
                    setLoading(false)
                    return
                }
                setMovie(data.Search)
            } catch (err) {
                setError(String(err))
            }
            setLoading(false)
        }
        void loadMovies()

    }, [query])

    return {
        movie,
        loading,
        error
    }
}

export default useMovieSearch