import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Products/Product';
import './Home.css';
import '../Products/Products.css'
import { Link } from 'react-router-dom';
import Review from '../Dashboard/Review/Review';

const Home = () =>
{
    const [products, setProducts] = useState([]);
    useEffect(() =>
    {
        fetch('https://enigmatic-river-03498.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div >
            <div className="banar container-fluid padding-top  m-auto">
                <button className="nav-link rounded-pill px-3 bg-danger shadow m-auto ">
                    <Link className="nav-link rounded-pill px-5 bg-dark shadow text-white" to="/products">See More Products</Link>
                </button>
            </div>
            <div className="p-0 m-0 bg-secondary py-2   ">
                <h2 className="text-uppercase  fw-bold fs-1">Products</h2>
            </div>
            <div className="my-5">
                <div className="container m-auto">
                    <Row className="service-container m-auto py-4">
                        {
                            products.slice(0, 6).map(product =>
                                <Product
                                    key={product.id}
                                    product={product}>
                                </Product>)
                        }
                    </Row>
                </div>
            </div>
            <div className="container bg-secondary py-2">
                <div className="review">
                    <Review></Review>
                </div>
            </div>
            <div className="container-fluid my-5 py-5 bg-car">
                <h2 className="text-color">Why Auto Express</h2>
                <div className="row row-cols-1 row-cols-md-5 ">
                    <div className="col">
                        <img src="https://user-images.githubusercontent.com/32226852/141057858-43eb01a0-c310-4ad3-88ea-22084f85b00c.png" alt="" className="img-fluid" />
                        <h6>Only certified motors</h6>
                    </div>
                    <div className="col">
                        <img src="https://user-images.githubusercontent.com/32226852/141057852-29404ddd-87c7-434c-8c48-0f9b7343a260.png" alt="" className="img-fluid" />
                        <h6>7 Days free trial</h6>
                    </div>
                    <div className="col">
                        <img src="https://user-images.githubusercontent.com/32226852/141057860-cf965eaa-4a05-4691-a163-d17bfe7d3049.png" alt="" className="img-fluid" />
                        <h6>Free delivery</h6>
                    </div>
                    <div className="col">
                        <img src="https://user-images.githubusercontent.com/32226852/141057842-d0c5bd78-a3e5-405e-a759-1a30f9a8c505.png" alt="" className="img-fluid" />
                        <h6>Free Test drives</h6>
                    </div>
                    <div className="col">
                        <img src="https://user-images.githubusercontent.com/32226852/141057847-32ec7074-2236-4ffe-afb3-3b1c1ca6cd6f.png" alt="" className="img-fluid" />
                        <h6>Pre approval</h6>
                    </div>
                </div>
                <br /><br />
            </div>
        </div>
    );
};

export default Home;