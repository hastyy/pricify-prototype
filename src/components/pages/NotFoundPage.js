import React from 'react';
import { Link } from 'react-router-dom';


const NotFoundPage = () => (
    <div className="container">
        <h1>[404] Oops!</h1>
        <p>
            We could not find what you were looking for...<br />
            <Link to="/">Go back</Link>
        </p>
    </div>
);


export default NotFoundPage;