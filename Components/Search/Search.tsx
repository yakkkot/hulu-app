import React, {DetailedHTMLProps, HTMLAttributes, useEffect, useState} from 'react';


import styles from "./Search.module.css"
import cn from "classnames";
import {HiOutlineSearch} from "react-icons/hi";
import {useRouter} from "next/router";
import {useDebounce} from "../../hooks/useDebounce";
import {IPageMovies} from "../../Interfaces/Movie.interface";
import {moviesServices} from "../../services/movie.services";
import Link from "next/link";

interface ISearch extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export const Search = ({className, ...props}: ISearch): JSX.Element => {

    const router = useRouter()
    const [value, setValue] = useState<string>('');
    const [show, setShow] = useState<boolean>(false);

    const [searchMovie,setSearchMovie] = useState<IPageMovies | null>(null)

    const debounced = useDebounce(value)
    const submit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        router.push(`/search/${value}`)
    }
    const change = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    const closeUl = (event: any) => {
        if (!event.target.matches('.closeUl')) {
            setShow(false)
        }
    };

    useEffect(() => {
        document.addEventListener('click', closeUl)
        const getMovie = async () => {
            try {
                const {data} = await moviesServices.getSearchMovie(debounced);
                setSearchMovie(data);
                setShow(true)
            } catch (e) {
                console.log(e)
            }
        };

        if (debounced) {
            getMovie();
        } else setSearchMovie(null)
        return () => document.removeEventListener('click', closeUl)
    }, [debounced]);

    return (
        <div className={cn(styles.container, className)}>
            <form onSubmit={submit} className="flex items-center justify-center ">
                <div className="closeUl relative">
                    <input onFocus={()=> setShow(true)} className={cn(styles.input,'closeUl')} type="text" placeholder="Search..." value={value}
                           onChange={change}/>
                    <button className="absolute top-0 right-0 h-full rounded-r-[5px] px-1 bg-blue-700">
                        <HiOutlineSearch className={cn(styles.icon)} size={30}/>
                    </button>
                    {debounced && show &&
                    <ul className='absolute overflow-y-scroll bg-blue-50 shadow-2xl max-h-[150px] text-black left-0 rounded-b-l right-0 top-[34px] z-50'>
                        {searchMovie?.results.map(movie =>
                            <Link href={`/movie/${movie.id}`} key={movie.id}>
                                <li className='p-1 cursor-pointer duration-200 hover:bg-gray-500'>{movie.title}</li>
                            </Link>
                        )}
                    </ul>
                    }
                </div>
            </form>
        </div>
    );
};
