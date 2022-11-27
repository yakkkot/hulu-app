import React, {DetailedHTMLProps, HTMLAttributes} from 'react';

import {IActor} from "../../Interfaces/Actors";
import Image from "next/image";

import {imageTMBI} from "../../helpers/helpers";
import styles from "./Actors.module.css"
import cn from "classnames";

interface IActors extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    actors: IActor[];
}

export const Actors = ({actors,className, ...props}: IActors): JSX.Element => {
    return (
        <div className="space-y-2" {...props}>
            <h2 className="text-2xl font-bold">CAST</h2>
            <div className={styles.container}>
                {actors.slice(0, 5).map(actor =>
                    <div key={actor.id} className={cn({
                        ['hidden']: !actor.profile_path
                    })}>
                        {actor.profile_path &&
                            <>
                                <Image className={'rounded-xl'} layout={'responsive'}
                                       height={450} width={300}
                                       src={`${imageTMBI}${actor.profile_path}`} alt={actor.name}/>
                                <p className={'pt-1.5'}>{actor.name}</p>
                            </>}
                    </div>
                )}
            </div>
        </div>
    );
};
