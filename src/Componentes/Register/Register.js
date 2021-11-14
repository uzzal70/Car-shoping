import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';

const Register = () =>
{
    const { user, registerUsingEmail, isLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/'

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handelRegistration = e =>
    {
        console.log('registration');
        registerUsingEmail(email, password, name)
        // .then(result =>
        // {
        history.push(redirect_url)
        e.preventDefault();
        // })
    }
    const handelUserchange = e =>
    {
        setName(e.target.value);
    }
    const handelEmailchange = e =>
    {
        setEmail(e.target.value);
    }
    const handelPasswordchange = e =>
    {
        setPassword(e.target.value);
    }
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <div className="bg-dark py-3 mb-5  text-white fw-bold">
                <h1>Please create an account </h1>
            </div>
            <div className="container">
                <div className="row row-cols-md-2 row-cols-1 d-flex">
                    {!isLoading &&
                        <div className="col m-auto p-3 bg-info shadow rounded-3">
                            <form onSubmit={handelRegistration}>
                                <input onBlur={handelUserchange} className='w-100 p-1 mb-2' type="text" name="name" id="standard-basic" placeholder="Your Name" /><br />
                                <input onBlur={handelEmailchange} className='w-100 p-1 mb-2' type="email" name="email" id="standard-basic" placeholder="Your Email" /><br />
                                <input onBlur={handelPasswordchange} className='w-100 p-1 mb-2' type="password" name="password" id="standard-basic" placeholder="Password" /><br />
                                <input className='w-50 rounded-pill btn-outline-secondary shadow mb-2' type="submit" value="Register" />
                            </form>
                            <hr />
                            <p><strong>All redy have an account to </strong> <Link className="text-white" to="/login">LogIn</Link> </p>
                            <button className="btn-regular btn-outline-primary shadow rounded-pill w-50" onClick={signInUsingGoogle}> Google Sign In</button>
                            <hr />
                            {
                                isLoading && <Spinner animation="border" />
                            }
                            {
                                user?.email && <Alert variant="success">
                                    <p>
                                        User Created Successfully !
                                    </p>
                                </Alert>
                            }
                        </div>
                    }
                    <div className="py-5 col m-auto">
                        <img src="https://user-images.githubusercontent.com/32226852/141057323-30c564ce-3998-4687-99d1-bc1e128e6074.png" alt="" className="img-fluid" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;