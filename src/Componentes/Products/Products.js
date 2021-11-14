import React, { useEffect, useState } from 'react';
import PackageNavbar from '../MyOrders/PackageNavbar';
import Product from './Product';
import './Products.css';

const Products = () =>
{

    const [products, setProducts] = useState([]);
    useEffect(() =>
    {
        fetch('https://enigmatic-river-03498.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div>
            <div className=" py-5 col-sm-12 m-auto">
                <img src="https://user-images.githubusercontent.com/32226852/141057323-30c564ce-3998-4687-99d1-bc1e128e6074.png" alt="" className="img-fluid" />
            </div>

            <div className="bg-black  mt-4 container-fluid d-flex justify-content-center">
                <PackageNavbar></PackageNavbar>
            </div>
            <div className="container m-auto">
                <div className="row m-auto">
                    <div className="service-container m-auto py-4">
                        {
                            products.map(product => <Product
                                key={product._id}
                                product={product}
                            ></Product>)
                        }
                    </div>

                </div >
            </div>
        </div>
    );
};

export default Products;