import React from "react";

import {withLayout} from "../../layout/layout";
import {GetStaticProps, GetStaticPropsContext} from "next";
import {ParsedUrlQuery} from "querystring";
import {moviesServices} from "../../services/movie.services";
import {IPageMovies} from "../../Interfaces/Movie.interface";
import {Film} from "../../Components";


function Home({page}:TypeProps):JSX.Element {

    return (
            <div className={'grid-container'}>
                {page.results.map(movie => <Film movie={movie} key={movie.id}/>)}
            </div>
    )
}

export default withLayout(Home)


export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {

    try {
        const {data: page} = await moviesServices.getAll();

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
