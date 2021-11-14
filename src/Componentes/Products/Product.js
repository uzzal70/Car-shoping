import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css'

const Product = (props) =>
{
    const { picture, name, description, price, id } = props.product;
    return (
        <div className="row">
            <div className="card shadow text-center p-0 m-0 pb-3 text-white">
                <img src={picture} alt="" className="m-auto img-fluid" style={{ width: '100%', height: '200px', }} />
                <h4 className="text-black text-start ps-2">{name}</h4>
                <h6 className="text-start ps-2"> {description}</h6>
                <h5 style={{ color: 'crimson' }}>Price: $ {price}</h5>
                <Link to={`/purchase/${id}`}>
                    <button
                        className="btn btn-info m-auto w-50 fw-bold">
                        Purches now
                    </button>
                </Link>
                <p>
                    <a href="www.facebook.com"><i className="fab fa-facebook text-primary"></i></a>
                    <a href="www.facebook.com"><i className="fab fa-instagram"></i></a>
                    <a href="www.facebook.com"><i className="fab fa-linkedin"></i></a>
                    <a href="www.facebook.com"><i className="fab fa-whatsapp text-info"></i></a>
                </p>
            </div>

        </div >

    );
};
export default Product;