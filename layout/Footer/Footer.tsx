import React, {DetailedHTMLProps, HTMLAttributes} from 'react';

import {HeaderItem} from "../../Components";
import {AiFillGithub,AiFillLinkedin} from "react-icons/ai";
import cn from "classnames";

interface IFooter extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Footer = ({className, ...props}: IFooter): JSX.Element => {
    return (
        <footer className={cn(className,'py-[10px] px-[20px] border-t-[1px] border-t-white flex justify-between')} {...props}>
            <div className={'flex items-center space-x-2'}>
                <a href="https://www.linkedin.com/in/yakkkot/">
                    <HeaderItem  Icon={AiFillLinkedin} title={'LinkedIn'}/>
                </a>
                <a href="https://www.linkedin.com/in/yakkkot/">
                    <HeaderItem Icon={AiFillGithub} title={'GitHub'}/>
                </a>
            </div>
            <div className={'pt-4'}>k0tjeee777@gmail.com</div>
        </footer>
    );
};

export {Footer};