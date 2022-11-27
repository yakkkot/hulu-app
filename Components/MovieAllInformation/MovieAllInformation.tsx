import React, {DetailedHTMLProps, HTMLAttributes} from 'react';

import {StarIcon} from "@heroicons/react/24/outline";
import Image from "next/image";
import cn from "classnames"
import {IAllMovieInformation} from "../../Interfaces/AllMovieInformation";
import {imageTMBI} from "../../helpers/helpers";
import styles from "./MovieAllInformation.module.css"
import {IActor} from "../../Interfaces/Actors";
import {Actors} from "../Actors/Actors";

interface IMovieAllInformation extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    movie:IAllMovieInformation,
    actors: IActor[];
}

export const MovieAllInformation = ({movie,actors,className, ...props}: IMovieAllInformation): JSX.Element => {
    return (
        <div className={styles.container}>
            <Image className={cn(styles.image, 'rounded-xl justify-self-center')} height={450} width={300}
                   src={`${imageTMBI}${movie.poster_path || movie.backdrop_path}`}
                   alt={movie.title || movie.original_title}/>
            <div className={cn(styles.text, "flex flex-col gap-[15px]")}>
                <h1 className="sm:text-5xl text-3xl sm:text-start text-center font-bold">{movie.title}</h1>
                <hr/>
                {movie.tagline && <h2 className="text-lg">{movie.tagline}</h2>}
                <div className="flex items-center flex-wrap gap-2  whitespace-nowrap">
                    {movie.genres && movie.genres.map(genre =>
                        <div key={genre.id}
                             className="py-1 px-4 border-2 border-rose-900 bg-[#600F0F] rounded-[30px]">{genre.name}</div>
                    )}
                </div>
                <div className="flex items-start justify-center flex-col">
                    <p className={'mr-4'}>Release date: {movie.release_date}</p>
                    <div className={'font-bold flex items-center space-x-1'}>
                        <p>Rating: {movie.vote_average.toFixed(1)}</p>
                        <StarIcon className={'w-auto h-5 text-yellow-500'}/>
                    </div>
                </div>
                <p className={'text-justify'}>{movie.overview}</p>
                {actors.length !== 0 && <Actors actors={actors}/>}
            </div>
        </div>
    );
};
