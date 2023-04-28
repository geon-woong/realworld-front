import { useRouteError } from "react-router-dom";

const ErrorPage = ()=>{
    const error = useRouteError();
    console.error(error);

    return(
        <div>
            <h1>oh no !</h1>
            <p>sorry, an unexpected error has occurred</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export { ErrorPage }