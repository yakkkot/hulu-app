import React, {DetailedHTMLProps, HTMLAttributes, useState} from 'react';


import styles from "./Search.module.css"
import cn from "classnames";
import {HiOutlineSearch} from "react-icons/hi";
import {useRouter} from "next/router";

interface ISearch extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export const Search = ({className, ...props}: ISearch): JSX.Element => {

    const router = useRouter()
    const [value, setValue] = useState<string>('');

    const submit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        router.push(`/search/${value}`)
    }
    const change = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    return (
        <div className={cn(styles.container, className)}>
            <form onSubmit={submit} className="flex items-center justify-center ">
                <div className="relative">
                    <input className={cn(styles.input)} type="text" placeholder="Search..." value={value} onChange={change}/>
                    <button className="absolute top-0 right-0 h-full rounded-r-[5px] px-1 bg-blue-700">
                        <HiOutlineSearch className={cn(styles.icon)} size={30}/>
                    </button>
                </div>
            </form>
        </div>
    );
};
