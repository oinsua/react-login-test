import React from 'react';
import { useParams} from "react-router-dom";

const Home = () => {

    const {username} = useParams();

    return (
        <div>
            <h1>`User name is ${username}`</h1>
        </div>
    )
}

export default Home
