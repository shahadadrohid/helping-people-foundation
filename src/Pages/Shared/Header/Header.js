import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../logos/logo.png';
import './Header.css';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const [signOut, loading1, error1] = useSignOut(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div className="d-flex justify-content-between mt-2">
            <div>
                <img className='w-25' src={logo} alt="" />
            </div>
            <div className='me-5'>
                <Link className='link-style' to="/">Home</Link>
                <Link className='link-style' to="/donation">Donation</Link>
                <Link className='link-style' to="/events">Events</Link>
                <Link className='link-style' to="/blog">Blog</Link>
                {
                    user ?
                        <button className="btn btn-primary link-style text-white" onClick={handleSignOut}>Sign Out</button>
                        :
                        <Link className='link-style' to="/login">
                            <button className="btn btn-primary">Login</button>
                        </Link>
                }
                <Link className='link-style' to="/register">
                    <button className="btn btn-primary">Register</button>
                </Link>
                <Link className='link-style' to="/admin">
                    <button className="btn btn-dark">Admin</button>
                </Link>

            </div>
        </div>
    );
};

export default Header;