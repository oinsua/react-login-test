import React from 'react';
import { useParams} from "react-router-dom";
import {Link} from './styled';

const Home = () => {

    const {username} = useParams();

    return (
        <div>
            <h1>Welcome to Home {username}</h1>
            <Link to="/">Go to Back Login</Link>
        </div>
    )
}

export default Home
