import Head from 'next/head'
import {withLayout} from "../layout/layout";


function First():JSX.Element {

  return (
    <div>
      <Head>
        <title>Hulu by Yakkkot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default withLayout(First)

