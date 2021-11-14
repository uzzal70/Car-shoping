import React from 'react';
import './Footer.css';
const Footer = () =>
{
    return (
        <div className="bg-footer mt-5">
            <footer>
                <div className="container-fluid mt-5 py-5 bg-dark">
                    <h2 className="text-color text-warning">Come visit us !</h2>
                    <br />
                    <h5 className="text-uppercase">And drive away with your own car</h5>
                    <br />
                    <br />
                    <div className="container m-auto">
                        <div className="row row-cols-1 row-cols-md-3 m-auto">
                            <div className="col m-auto text-center d-flex ">
                                <i className="far fa-envelope fs-1 px-3 mt-1 "></i>
                                <span>
                                    <h6>auto.express@mysite.com</h6>
                                    <h6>auto.express@mysite.com</h6>
                                </span>
                            </div>
                            <div className="col m-auto d-flex">
                                <i className="fas fa-map-marker-alt fs-1 px-3 mt-1 "></i>
                                <span>
                                    <h6 className="text-start">Road 02, shaymoli</h6>
                                    <h6>ser e bangla ngor Dhaka</h6>
                                </span>
                            </div>
                            <div className="col m-auto d-flex">
                                <i className="fas fa-phone fs-1 px-3 mt-1 "></i>
                                <span>
                                    <h6>Tel:+8806969690000</h6>
                                    <h6>phone:+8801700000</h6>
                                </span>
                            </div>
                        </div>
                    </div>
                    <br /><br />
                </div>
            </footer >
        </div >
    );
};

export default Footer;