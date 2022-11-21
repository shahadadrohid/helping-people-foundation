import React from 'react';
import { Link } from 'react-router-dom';
import './Activity.css'

const Activity = ({ activity }) => {
    console.log(activity)
    const { name, img } = activity;
    console.log(name, img)
    return (
        <div className="relative">
            <Link to="/manage" className='link-style'>
                <img className="w-75" src={img} alt="" />
                <h4 className='absolute'>{name}</h4>
            </Link>
        </div>
    );
};

export default Activity;