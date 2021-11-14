import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () =>
{
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>
    {
        console.log(data);
        axios.post('https://enigmatic-river-03498.herokuapp.com/products', data)
            .then(res =>
            {
                if (res.data) {
                    alert('added successfully');
                    reset();
                }
            })
    };
    return (
        <div className="container m-auto">
            <div className="col-xs-12 m-auto col-sm-7 p-5 rounded shadow  form-border">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="w-100 my-1 p-2 rounded" {...register("picture")} placeholder="Image url" />
                    <input className="w-100 my-1 p-2 rounded" {...register("name", { required: true, })} placeholder="Product Name" />

                    <textarea className="w-100 p-2 rounded" {...register("description")} placeholder="Description" />

                    <input className="w-100 my-1 p-2 rounded" {...register("price", { required: true, })} placeholder="Price"
                    />

                    <input className="btn btn-outline-warning border border-2 border-warning my-2 fw-bold rounded-pill px-5" type="submit" value="Submit" />

                </form>
            </div>
        </div>
    );
};

export default AddProduct;