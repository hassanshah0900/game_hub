import useData from "./useData";
import { Genre } from "./useGenre";
import { Platform } from "./usePlatforms";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
    search: string;
}

export interface Game {
    background_image: string;
    id: number;
    name: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
    rating_top: number;
}

const useGames = (gameQuery: GameQuery) => useData<Game>('/games',
    {params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.search}},
    [gameQuery])

export default useGames;