import {withLayout} from "../layout/layout";
import Error from "next/error";

export function Error500(): JSX.Element {

    return (
        <Error statusCode={500}/>
    );
}

export default withLayout(Error500);
