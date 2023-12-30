import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

import { GoFileCode } from "react-icons/go";
import { TfiBrush } from "react-icons/tfi";
import { IoMusicalNotesSharp } from "react-icons/io5";

const Portfolio = () => {
    return (
        <Container className="portfolio-options">
            <Link to="/portfolio/code" >
                <Container className='code'>
                    <GoFileCode/>
                    <p>Code</p>
                </Container>
            </Link>
            <Link to="/portfolio/art" >
                <Container className='art'>
                    <TfiBrush />
                    <p>Art</p>
                </Container>
            </Link>
            <Link to="/portfolio/music">
                <Container className='music'>
                    <IoMusicalNotesSharp />
                    <p>Music</p>
                </Container>
            </Link>
        </Container>
    );
};

export default Portfolio;
