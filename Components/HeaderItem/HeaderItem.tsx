import React, {DetailedHTMLProps, HTMLAttributes} from 'react';
import {IconType} from 'react-icons';

interface IHeader extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string;
    Icon: IconType;
}

export const HeaderItem = ({title,Icon,className, ...props}: IHeader): JSX.Element => {
    return (
        <div className={'flex flex-col items-center justify-center group cursor-pointer hover:text-white w-16 sm:w-20'} {...props}>
            <Icon size={30} className={'group-hover:animate-bounce m-1'}/>
            <p className={'opacity-0 uppercase tracking-wider group-hover:opacity-100 duration-100 whitespace-nowrap text-xl'}>{title}</p>
        </div>
    );
};
