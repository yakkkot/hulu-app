const baseURL:string = 'https://api.themoviedb.org/3/';

const urls={
    movies: 'discover/movie',
    genres: 'genre/movie/list',
    trending: 'trending/movie/week',
    movie: 'movie',
    search: 'search/movie',
    top_rated: '/movie/top_rated',
    account: 'account',
}

export {
    baseURL,
    urls
};