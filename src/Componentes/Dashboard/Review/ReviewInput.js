
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const ReviewInput = () =>
{

    // const { name } = props.product;
    const { reset } = useForm();
    const { user } = useAuth();
    // const [purchaseSuccess, setPurchaseSuccess] = useState(false);

    const initailinfo = { displayName: user.displayName, description: '' };
    const [reviewInfo, setReviewInfo] = useState(initailinfo);
    const handleOnBlur = e =>
    {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...reviewInfo };
        newInfo[field] = value;
        setReviewInfo(newInfo);
    }
    const handleReviewSubmit = e =>
    {
        // alert('sucess');
        //collect data 
        const review = {
            ...reviewInfo
        }
        // console.log('collect data', purchase);
        //send data to the server
        fetch('https://enigmatic-river-03498.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data =>
            {
                if (data.insertedId) {
                    alert('Review submit !');
                    reset();
                }
            })

        e.preventDefault();
    }
    return (

        <div className="container m-auto">
            <h1 className="py-4 bg-dark text-info">Customer Products Review </h1>

            <div className="col-xs-12 col-sm-7 m-auto pt-2 mt-4 pb-2 h-50 bg-secondary form-border rounded shadow">
                <form onSubmit={handleReviewSubmit}>
                    <h3>Customer Comment Box</h3>
                    <input className="w-100 my-1 p-2 rounded"
                        onBlur={handleOnBlur}
                        placeholder="Name"
                        name='displayName'
                        defaultValue={user.displayName}
                    />


                    <input className="w-100 p-2 mb-2 rounded"
                        onBlur={handleOnBlur}
                        name='description'
                        placeholder="Comment"
                    />
                    <input className="btn btn-outline-warning my-2 fw-bold rounded-pill px-5" type="submit" value="Send"
                    />

                </form>

            </div>
        </div>

    );
};

export default ReviewInput;
