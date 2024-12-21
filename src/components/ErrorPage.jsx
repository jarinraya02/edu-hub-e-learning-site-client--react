import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className='mt-48'>
            <h1>Error Occured !!!</h1>
            {
                error && (
                    <div>
                        <p>{error.statusText || error.message}</p>
                        <p>{error.status}</p>
                    </div>
                )
            }
            <button className="btn btn-wide btn-primary mt-5 mb-5"><Link to = '/'>Back to home page</Link></button>
        </div>
    );
};

export default ErrorPage;