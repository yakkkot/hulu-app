import React, {DetailedHTMLProps, HTMLAttributes} from 'react';

import {HiOutlineHome, HiOutlineUser} from "react-icons/hi";
import {HiOutlineBolt} from "react-icons/hi2";

import {HeaderItem, Search} from "../../Components";
import styles from './Header.module.css'
import cn from "classnames";
import Link from "next/link";

interface IHeader extends DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement> {}

const Header = ({className, ...props}: IHeader): JSX.Element => {
    return (
        <header className={cn(className, styles.container)} {...props}>
            <div className={styles.icons}>
                <Link href="/home">
                    <HeaderItem Icon={HiOutlineHome} title={'Home'}/>
                </Link>
                <Link href="/trending">
                    <HeaderItem Icon={HiOutlineBolt} title={'Trending'}/>
                </Link>
                <Link href="/top_rated">
                    <HeaderItem Icon={HiOutlineUser} title={'Top Rated'}/>
                </Link>
            </div>
            <Search className={styles.search}/>
            <div className={styles.logo}>MovieHouse</div>
        </header>
    );
};

export {Header};