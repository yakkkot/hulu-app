import React, {DetailedHTMLProps, HTMLAttributes} from 'react';
import Image from "next/image";
import { StarIcon } from '@heroicons/react/24/outline'

import {IMovie} from "../../Interfaces/Movie.interface";
import {imageTMBI} from "../../helpers/helpers";
import Link from "next/link";

interface IFilm extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    movie:IMovie
}

export const Film = ({movie,className, ...props}: IFilm): JSX.Element => {


    return (
        <div className={'group cursor-pointer hover:scale-105 duration-500'} {...props}>
        <Link href={`/movie/${movie.id}`}>
            <div className={'relative'}>
                {movie.backdrop_path ? <Image className={'rounded-xl'} height={1300} width={1080}
                                              src={`${imageTMBI}${movie.backdrop_path}`}
                                              alt={movie.title || movie.original_title}/> :
                    <div className='relative'>
                        <Image className={'rounded-xl'} height={1300} width={1080}
                               src={`${imageTMBI}/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg`}
                               alt={movie.title || movie.original_title}/>
                        <div className='absolute top-0 bottom-0 left-0 right-0 rounded-xl bg-blue-400 z-10 flex items-center justify-center'>
                            <p className='font-bold text-2xl'>Not Found :(</p>
                        </div>
                    </div>
                }
                <div
                    className={'absolute z-20 flex items-center bottom-0 left-0 h-[15%] w-full shadow-block rounded-b-xl p-2 opacity-0 group-hover:opacity-100'}>
                    <p className={'truncate max-w-md'}>{movie.release_date}  |</p>
                    <StarIcon className={'w-auto h-full text-yellow-500 ml-2 mr-0.5'}/>
                    <p className={'font-bold'}>{movie.vote_average}</p>
                </div>
            </div>
            <p className={'md:text-2xl text-xl font-bold tracking-wider mt-1.5'}>{movie.title}</p>
            <p className={'truncate max-w-md '}>{movie.overview}</p>
        </Link>


        </div>

    );
};
