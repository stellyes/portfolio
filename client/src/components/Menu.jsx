import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../../public/home-outline-black.png';
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';

const Menu = () => {
    return (
        <Navbar bg="light" expand="lg" className="justify-content-center">
            <Navbar.Brand>
                <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/portfolio" className="nav-link">Portfolio</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Menu;
