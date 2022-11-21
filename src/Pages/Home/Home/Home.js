import React from 'react';
import Activities from '../Activities/Activities';

const Home = () => {

    return (
        <div>
            <div className="d-flex justify-content-center">
                <input type="text" />
                <button>Search</button>
            </div>
            <Activities></Activities>
        </div>
    );
};

export default Home;