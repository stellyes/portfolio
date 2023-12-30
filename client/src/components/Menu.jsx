import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

import logo from '../assets/images/home-outline-black.png';

const Menu = () => {
    return (
        <Navbar className="menu">
            <Nav>
                <Container>
                    <Link to="/" className="logo-container">
                        <Image src={logo} className="logo" alt="Logo" />
                    </Link>
                </Container>
                <Link to="/blog">Blog</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </Nav>
        </Navbar>
    );
};

export default Menu;