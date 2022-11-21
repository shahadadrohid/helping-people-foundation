import React from 'react';
import logo from '../../../logos/logo.png';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    // Create user with react firebase hooks
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const description = event.target.description.value;
        createUserWithEmailAndPassword(email, name, description)
        console.log(email, name, description)
        event.target.reset()
    }
    // react firebase hooks implement
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (user) {
        navigate('/')
    }

    return (
        <div className="mt-5">
            <img className="w-25 mx-auto" src={logo} alt="" />
            <div className="" >
                <form onSubmit={handleRegister} className="w-50 mx-auto border border-2 rounded p-2 mt-2" style={{ color: 'whitesmoke' }} action="">
                    <input className="border-1 border-primary mt-2 rounded w-50 mx-auto py-2" type="text" name="name" id="" placeholder='Full Name' required />
                    <br />
                    <input className="border-1 border-primary mt-2 rounded w-50 mx-auto py-2" type="email" name="email" id="" placeholder='Email' required />
                    <br />
                    <input className="border-1 border-primary mt-2 rounded w-50 mx-auto py-2" type="text" name="description" id="" placeholder='Why you want to join?' required />
                    <br />
                    <input className='border-0 mt-2 bg-primary rounded text-white py-2 w-50 mx-auto' type="submit" value="Registration  " />
                    <p className="text-dark">New here? <Link to="/login">Login here</Link>
                    </p>
                    <p className="text-danger">{error?.message}</p>
                    <SocialLogin></SocialLogin>
                </form>
            </div>
        </div>
    );
};

export default Register;