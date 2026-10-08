import { useEffect, useState } from "react"

export interface MovieFull {
    Poster: string;
    Title: string;
    Year: string;
    Plot: string;
    imdbRating: string;
    Genre: string;
}

const useMovieDetails = (filmId : string | null) => {
    const [fullMovie, setFullMovie] = useState<MovieFull | null>(null)
    const [fullLoading, setFullLoading] = useState<boolean>(false)
    const [fullError, setFullError] = useState<string | null>(null)

    useEffect(() => {
        if (!filmId) return

        const fetchFullMovie = async () => {
            setFullLoading(true)
            setFullError(null)
            try {
                const response = await fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&i=${filmId}`)
                if (!response.ok) {
                    setFullError('Ошибка')
                    setFullLoading(false)
                    return
                }
                const data = await response.json()
                if (data.Response === 'False') {
                    setFullError('Ошибка загрузки информации о фильме')
                    setFullLoading(false)
                    return
                }
                setFullError(null)
                setFullMovie(data)
                setFullLoading(false)
            } catch (err) {
                setFullError(String(err))
            }
        }
       void fetchFullMovie()
    }, [filmId])
    return {
        fullMovie,
        fullLoading,
        fullError
    }
}

export default useMovieDetails;