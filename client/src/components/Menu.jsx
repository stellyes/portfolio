import React from 'react';
import { Container, Navbar, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../assets/images/home-outline-black.png';

const Menu = () => {
    return (
        <Navbar bg="light" expand="lg" className="menu d-flex">
            <Nav>
                <Link to="/" className="nav-link">
                    <Image src={logo} className="logo" alt="Logo" />
                </Link>
                <Link to="/blog" className="nav-link">Blog</Link>
                <Link to="/portfolio" className="nav-link">Portfolio</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
            </Nav>
        </Navbar>
    );
};

export default Menu;