import Head from 'next/head'
import {withLayout} from "../layout/layout";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import {ParsedUrlQuery} from "querystring";
import {moviesServices} from "../services/movie.services";
import {IPageMovies} from "../Interfaces/Movie.interface";
import {Film} from "../Components";
import React from "react";


function First():JSX.Element {

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default withLayout(First)

// export const getStaticPaths: GetStaticPaths = async () => {
//
//     return {
//         paths: ['/'],
//         fallback: true
//     };
// };

// export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
//
//     try {
//         //
//         // const {data: page} = await moviesServices.getAll();
//         //
//         // if (page.results.length == 0) {
//         //     return {
//         //         notFound: true
//         //     };
//         // }
//         return {
//             redirect: {
//                 permanent: false,
//                 destination: '/home',
//             },
//         };
//     }
//     catch {
//         return {
//             notFound: true
//         };
//     }
// };

