import React, {FC, ReactNode} from 'react';
import {Header} from "./Header/Header";
import {NavBar} from "./NavBar/NavBar";
import {Footer} from "./Footer/Footer";
import {Up} from "../Components";

interface ILayout{
    children: ReactNode
}


const Layout = ({children}: ILayout): JSX.Element => {
    return (
        <>
            <Header/>
            <NavBar/>
            {children}
            <Footer/>
            <Up/>
        </>
    );
};


export const withLayout = <T extends Record<string, unknown>>(Component: FC<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
                <Layout>
                    <Component {...props} />
                </Layout>
        );
    };
};
