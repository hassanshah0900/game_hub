import { useEffect, useState } from "react"
import apiClient from "../services/api-client";

interface Genre {
    id: number;
    name: string;
}

interface FetchGenreResponse {
    count: number;
    results: Genre[];
}

const useGenre = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient.get<FetchGenreResponse>('/genres', {signal: controller.signal})
        .then(res => {
            setLoading(false)
            setGenres(res.data.results)})
        .catch(err => {
            setLoading(false)
            setError(err.message)})

        return () => controller.abort();
    }, [])

    return {genres, error, isLoading};
}

export default useGenre;