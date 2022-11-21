import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import logo from '../../../logos/logo.png';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    // react firebase hooks implement
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // Create user with react firebase hooks
    const handleLogin = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        console.log(name, email)
        signInWithEmailAndPassword(email, name);
        event.target.reset()
    }

    if (user) {
        navigate('/')
    }

    return (
        <div className="mt-5">
            <h2 className="">Login here</h2>
            <div>
                <form onSubmit={handleLogin} className="w-50 mx-auto border border-2 rounded p-2 mt-2" style={{ color: 'whitesmoke' }} action="">
                    <input className="border-1 border-primary mt-2 rounded w-50 mx-auto py-2" type="text" name="name" id="" placeholder='Full Name' required />
                    <br />
                    <input className="border-1 border-primary mt-2 rounded w-50 mx-auto py-2" type="email" name="email" id="" placeholder='Email' required />
                    <br />
                    <p className="text-danger">{error?.message}</p>
                    <input className='border-0 mt-2 bg-primary rounded text-white py-2 w-50 mx-auto' type="submit" value="Login" />
                    <p className="text-dark">New Here? <Link to="/register">Register</Link>
                    </p>
                    <SocialLogin></SocialLogin>
                </form>
            </div>
        </div>
    );
};

export default Login;