import {withLayout} from "../../layout/layout";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import {ParsedUrlQuery} from "querystring";
import {moviesServices} from "../../services/movie.services";
import {IPageMovies} from "../../Interfaces/Movie.interface";
import {useRouter} from "next/router";
import {Page} from "../../Components";
import {genres, OneGenre} from "../../helpers/helpers";


const GenreMovies = ({page,needMovies}:TypeProps):JSX.Element => {

    const router = useRouter();
    if (router.isFallback) {
        return <h1>Loading...</h1>;
    }

    return (
           <Page page={page} fcGenre={moviesServices.getMoviesWithGenre} idGenre={needMovies.id} whatRequest={'genre'}/>
    );
};

export default withLayout(GenreMovies)


export const getStaticPaths: GetStaticPaths = async () => {
    let paths: string[] = [];
    paths = genres.map(el => `/genre/${el.name}`);
    return {
        paths,
        fallback: true
    };
};


export const getStaticProps: GetStaticProps<TypeProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true
        };
    }

    try {
        const needMovies = genres.find(el => el.name === params.name);

        if(!needMovies){
            return {
                notFound: true
            };
        }
        const {data: page} = await moviesServices.getMoviesWithGenre(needMovies.id);
        if (page.results.length == 0) {
            return {
                notFound: true
            };
        }
        return {
            props: {
                page,
                needMovies,
                revalidate:10
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
    page:IPageMovies,
    needMovies:OneGenre
}
