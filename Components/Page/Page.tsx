import React, {DetailedHTMLProps, HTMLAttributes, useEffect, useState} from 'react';

import cn from "classnames";

import {Film} from "../Film/Film";
import {IMovie, IPageMovies} from "../../Interfaces/Movie.interface";

interface IPage extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    page: IPageMovies;
    fc?: (page: number) => Promise<any>;
    fcGenre?: (id:number, page:number) => Promise<any>;
    whatRequest?: 'standart' | 'genre';
    idGenre?: number;
}

export const Page = ({
                         page,
                         fc,
                         fcGenre,
                         whatRequest = 'standart',
                         idGenre,
                         className,
                         ...props
                     }: IPage): JSX.Element => {


    const [scrollMovies, setScrollMovies] = useState<IMovie[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(2);
    const [fetching, setFetching] = useState<boolean>(true);

    useEffect(() => {

        const get = async () => {
            try {
                if (whatRequest === 'standart' && fc) {
                    const {data} = await fc(currentPage);
                    setScrollMovies([...scrollMovies, data.results].flatMap(el => el));
                    setCurrentPage(prev => prev + 1);
                }
                if (whatRequest === 'genre'  && fcGenre && idGenre) {
                    const {data} = await fcGenre(idGenre,currentPage);
                    setScrollMovies([...scrollMovies, data.results].flatMap(el => el));
                    setCurrentPage(prev => prev + 1);
                }

            } catch (e) {
                console.log(e)
            } finally {
                setFetching(false);
            }
        };
        if (fetching) {
            get();
        }
    }, [fetching]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => document.removeEventListener('scroll', scrollHandler);
    }, [])

    const scrollHandler = () => {
        if (document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) < 150) {
            setFetching(true)
        }
    };

    return (
        <div className={cn(className, 'grid-container')} {...props}>
            {page.results.map(movie => <Film movie={movie} key={movie.id}/>)}
            {scrollMovies && scrollMovies.map(movie => <Film movie={movie} key={movie.id}/>)}
        </div>

    );
};
