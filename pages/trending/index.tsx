import React from "react";

import {withLayout} from "../../layout/layout";
import {GetStaticProps, GetStaticPropsContext} from "next";
import {ParsedUrlQuery} from "querystring";
import {moviesServices} from "../../services/movie.services";
import {IPageMovies} from "../../Interfaces/Movie.interface";
import {Page} from "../../Components";


function Trending({page}: TypeProps): JSX.Element {


    return (
        <Page page={page} fc={moviesServices.getTrendingMovie}/>
    )
}

export default withLayout(Trending)


export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {

    try {
        const {data: page} = await moviesServices.getTrendingMovie();

        if (page.results.length == 0) {
            return {
                notFound: true
            };
        }
        return {
            props: {
                page,
                revalidate: 10
            },
        };
    }
    catch {
        return {
            notFound: true
        };
    }
};

interface TypeProps extends Record<string, unknown> {
    page:IPageMovies
}
