import {GetStaticPaths, GetStaticProps, GetStaticPropsContext,} from "next";
import {useRouter} from "next/router";
import {ParsedUrlQuery} from "querystring";

import {withLayout} from "../../layout/layout";
import {moviesServices} from "../../services/movie.services";
import {IAllMovieInformation} from "../../Interfaces/AllMovieInformation";
import {MovieAllInformation} from "../../Components";
import {ICredits} from "../../Interfaces/Actors";


const Movie = ({movie,credits}:TypeProps):JSX.Element => {

    const router = useRouter();
    if (router.isFallback) {
        return <h1>Loading...</h1>;
    }
    return (
            <MovieAllInformation movie={movie} actors={credits.cast} key={movie.id}/>

    );
};

export default withLayout(Movie)


export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths:[],
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {

    if (!params || !params.id) {
        return {
            notFound: true
        };
    }
    try {
        const {data: movie} = await moviesServices.getOneMovie(+params.id);
        const {data: credits} = await moviesServices.getCredits(+params.id)
        if (!movie) {
            return {
                notFound: true
            };
        }
        return {
            props: {
                movie,
                credits,
                revalidate: 10
            }
        };
    }
    catch {
        return {
            notFound: true
        };
    }
};

interface TypeProps extends Record<string, unknown> {
    movie: IAllMovieInformation;
    credits:ICredits
}
