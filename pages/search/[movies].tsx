import React from 'react';
import {withLayout} from "../../layout/layout";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import {ParsedUrlQuery} from "querystring";
import {moviesServices} from "../../services/movie.services";
import {IPageMovies} from "../../Interfaces/Movie.interface";
import {useRouter} from "next/router";
import {Film} from "../../Components";

const SearchMovie = ({movies}:TypeProps):JSX.Element => {

    const router = useRouter();

    if (router.isFallback) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className={'grid-container'}>
            {movies.results.map(movie => <Film movie={movie} key={movie.id}/>)}
        </div>
    );
};

export default withLayout(SearchMovie)


export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths:[],
        fallback: true,
    };
};


export const getStaticProps: GetStaticProps<TypeProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {

    if (!params || !params.movies) {
        return {
            notFound: true
        };
    }

    try {
        const {data: movies} = await moviesServices.getSearchMovie(params.movies.toString());

        if (movies.results.length === 0) {
            return {
                notFound: true
            };
        }

        return {
            props: {
                movies
            },
            revalidate: 10,
        };
    }
    catch {
        return {
            notFound: true
        };
    }
};

interface TypeProps extends Record<string, unknown> {
    movies:IPageMovies
}
