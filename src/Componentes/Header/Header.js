import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import "./Header.css";

const Header = () =>
{
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <NavLink className="Navbar-brand text-decoration-none" to="/"><span className="text-white fw-bold"><h3 className="border border-3 border-white p-1">Auto~Express</h3></span></NavLink>

                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <NavLink className="nav-link text-white" to="/home">Home</NavLink>
                            <NavLink className="nav-link text-white" to="/products">More Products</NavLink>

                            {user.email ?
                                <>
                                    <NavLink className="nav-link text-white" to="/dashboard">Dashboard</NavLink>
                                    <button onClick={logOut} className="bg-danger rounded-pill btn-padding px-3 m-auto">LogOut</button>
                                </>
                                :
                                <NavLink
                                    className="nav-link" to="/Login"><span className="btn-danger rounded-pill px-3 pb-1 ">LogIn</span>
                                </NavLink>}
                            <span style={{ color: 'crimson', fontSize: '20px' }} className="m-auto fw-bold px-2" >{user.displayName}</span>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;


