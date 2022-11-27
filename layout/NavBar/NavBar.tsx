import React, {DetailedHTMLProps, HTMLAttributes} from 'react';
import {genres} from "../../helpers/helpers";
import Link from "next/link";

interface INavBar extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const NavBar = ({className, ...props}: INavBar): JSX.Element => {


    return (
        <nav {...props} className={'relative'}>
            <div className={'w-screen text-2xl flex px-12 py-2 overflow-x-scroll scrollbar-hide whitespace-nowrap space-x-10 sm:space-x-20'}>
                {genres.map(g => (
                    <Link href={`/genre/${g.name}`} key={g.id} className='last:pr-8 last:sm:pr-20'>
                        <div
                            className={'cursor-pointer transition duration-300 hover:scale-125 hover:text-blue-600 active:text-blue-600'}>
                            {g.name}
                        </div>
                    </Link>
                ))}
            </div>
            <div className={'absolute top-0 right-0 h-[50px] w-1/12 bg-gradient-to-l from-[#030027]'}/>
        </nav>
    );
};

export {NavBar};