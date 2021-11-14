import React, { useState } from 'react';
import './login.css';
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';
import { Alert, Spinner } from 'react-bootstrap';


const Login = () =>
{
    const { user, userLogin, isLoading, signInUsingGoogle } = useAuth();
    // const { userLogin } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home'

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handelGoogleLogin = () =>
    {
        signInUsingGoogle()
            .then(result =>
            {
                history.push(redirect_url)
            })
    }

    // User login email and password 
    const handelUserLogin = e =>
    {
        e.preventDefault();
        userLogin(email, password, location, history)
        // .then(result =>
        // {
        history.push(redirect_url)
        // })
    }
    const userHandelEmailchange = e =>
    {
        setEmail(e.target.value);
    }
    const userHandelPasswordchange = e =>
    {
        setPassword(e.target.value);
    }
    return (
        <div>

            <div className="container mt-5">
                <div className="row row-cols-md-2 row-cols-1 d-flex">
                    <div className="py-5 col m-auto">
                        <img src="https://user-images.githubusercontent.com/32226852/141057323-30c564ce-3998-4687-99d1-bc1e128e6074.png" alt="" className="img-fluid" />
                    </div>

                    <div className="col m-auto p-3 bg-info shadow rounded-3">
                        <form onSubmit={handelUserLogin}>
                            <input onBlur={userHandelEmailchange} className='w-100 p-1 mb-2' type="email" name="" id="" placeholder="Your Email" /><br />
                            <input onBlur={userHandelPasswordchange} className='w-100 p-1 mb-2' type="Password" name="" id="" placeholder="Password" /><br />
                            <input className='w-50 rounded-pill btn-outline-secondary shadow mb-2' type="submit" value="Login" />
                            {
                                isLoading && <Spinner animation="border" />
                            }
                            {
                                user?.email && <Alert variant="success">
                                    <p>
                                        Login Successfully !
                                    </p>
                                </Alert>
                            }
                        </form>
                        <hr />
                        <p><strong>New User</strong> <Link className="text-white" to="/register"> Create an account</Link> </p>
                        <button
                            className="btn-regular rounded-pill w-50 btn-outline-primary shadow"
                            onClick={handelGoogleLogin}>
                            <i className="fab fa-google">&nbsp; Google Sign In</i>
                        </button>
                        <hr />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;