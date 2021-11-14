import React, { useState } from 'react';
import { Alert, FloatingLabel, Form } from 'react-bootstrap';

const MakeAdmin = () =>
{
    const [email, setEmail] = useState('');
    const [adminSuccess, setAdminSuccess] = useState(false);
    const handleOnBlur = e =>
    {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e =>
    {
        const user = { email };
        fetch('https://enigmatic-river-03498.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data =>
            {
                if (data.modifiedCount) {
                    console.log(data);
                    setEmail('');
                    setAdminSuccess(true);
                }
                console.log(data)
            })
        e.preventDefault();
    }

    return (
        <div>
            <h1 className="bg-success">Make an Admin</h1>
            <form className="w-25 m-auto mt-5 shadow  py-3 px-2" onSubmit={handleAdminSubmit}>
                <>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                        onBlur={handleOnBlur}
                    >
                        <Form.Control type="email" className="shadow" placeholder="Email" />
                    </FloatingLabel>
                    <button className="btn btn-info px-5 rounded-pill fw-bold mt-4" type="submit">
                        Submit
                    </button>
                </>
            </form>
            <div className="w-25 m-auto mt-5 shadow">
                {adminSuccess && <Alert
                    severity="success" >Make Admin Successfully
                </Alert>}
            </div>
        </div>
    );
};

export default MakeAdmin;