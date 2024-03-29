import React from "react";
import {useRouteError} from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{"Error 404"}</i>
            </p>
        </div>
    )
}

export default ErrorPage;