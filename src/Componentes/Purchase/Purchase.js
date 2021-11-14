// import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Product from '../Products/Product';
// import Products from '../Products/Products';

const Purchase = () =>
{

    // const { name } = props.product;
    const { reset } = useForm();
    const { user } = useAuth();
    const [products, setProducts] = useState([]);
    // const [purchaseSuccess, setPurchaseSuccess] = useState(false);
    useEffect(() =>
    {
        fetch('https://enigmatic-river-03498.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [])

    const initailinfo = { displayName: user.displayName, email: user.email, phone: '', location: '' };
    const [purchaseInfo, setPurchaseInfo] = useState(initailinfo);
    const handleOnBlur = e =>
    {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...purchaseInfo };
        newInfo[field] = value;
        setPurchaseInfo(newInfo);
    }
    const handlePurchaseSubmit = e =>
    {
        // alert('sucess');
        //collect data 
        const purchase = {
            ...purchaseInfo
        }
        // console.log('collect data', purchase);
        //send data to the server
        fetch('https://enigmatic-river-03498.herokuapp.com/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data =>
            {
                if (data.insertedId) {
                    alert('Purchase successfully !');
                    reset();
                }
                else {
                    alert('Errors');
                }
            })

        e.preventDefault();
    }

    const { productId } = useParams();
    return (

        <div className="container">
            <h1 className="py-4 bg-dark text-info">Products Number : <span className="text-danger fw-bold">{productId}</span></h1>
            {/* <h1 className="py-4 bg-dark text-info">Products Details : {name}</h1> */}
            <div className="row my-5">
                <div className="col m-auto">
                    <div className="service-container m-auto text-white">
                        {
                            products.filter(productdetail =>
                                productdetail.id == productId).map(product => <Product
                                    key={product._id}
                                    product={product}

                                ></Product>)
                        }

                    </div>
                </div>

                <div className="col-xs-12 col-sm-7 pt-5 pb-2 h-50 bg-secondary form-border rounded shadow">
                    <form onSubmit={handlePurchaseSubmit}>
                        <input className="w-100 my-1 p-2 rounded"
                            onBlur={handleOnBlur}
                            // {...register("name", { required: true, maxLength: 20 })} 
                            placeholder="Name"
                            name='displayName'
                            defaultValue={user.displayName}
                        />
                        <input className="w-100 my-1 p-2 rounded"
                            onBlur={handleOnBlur}
                            // {...register("email", { required: true, maxLength: 20 })}
                            placeholder="Email"
                            name="email"
                            defaultValue={user.email}

                        />
                        <input className="w-100 my-1 p-2 rounded"
                            onBlur={handleOnBlur}
                            // {...register("number", { required: true, maxLength: 20 })}
                            placeholder="Phone Number"
                            name="phone"
                            defaultValue="+880 "
                        />
                        <input className="w-100 p-2 mb-2 rounded"
                            onBlur={handleOnBlur}
                            // {...register("location")} 
                            name='location'
                            placeholder="Delivery Location"
                        // defaultValue="location "
                        />
                        <input className="btn btn-outline-warning my-2 fw-bold rounded-pill px-5" type="submit" value="Confirm Purchase"
                        />

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Purchase;
