import {IPageMovies} from "./Movie.interface";

export interface MovieSlice {
    genres: OneGenre[];
    movies: IPageMovies | null;
}


type OneGenre = {
    id: number;
    name: string;
};

