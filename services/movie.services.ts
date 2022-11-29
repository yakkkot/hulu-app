import {axiosServices} from "./axios.services";
import {urls} from "../configs/urls";
import {IPageMovies} from "../Interfaces/Movie.interface";

const moviesServices = {
    getAll: (page:number = 1) => axiosServices.get(urls.movies, {params: {page}}),
    getOneMovie: (id:number ) => axiosServices.get(`${urls.movie}/${id}`),
    getTrendingMovie: (page:number = 1) => axiosServices.get(urls.trending,{params: {page}}),
    getTopRatedMovie: (page:number = 1) => axiosServices.get(urls.top_rated,{params: {page}}),
    getSimilarMovie: (id:number) => axiosServices.get(`${urls.movie}/${id}/similar`),
    getSearchMovie: (query:string, page:number=1) => axiosServices.get<IPageMovies>(urls.search, {params: {query, page}}),
    getMoviesWithGenre: (id:number, page:number = 1) => axiosServices.get<IPageMovies>(urls.movies + `?with_genres=${id}`, {params: {page}}),
    getCredits: (id:number) => axiosServices.get(`${urls.movie}/${id}/credits`),
    getTrailerVideo: (id:number) => axiosServices.get(`${urls.movie}/${id}/videos`)
};

export {
    moviesServices
};