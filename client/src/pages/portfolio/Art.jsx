import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import { LiaWindowCloseSolid } from "react-icons/lia";

import cyguttrbmp from '../../assets/images/cygutt/cyguttrbmp.jpg';
import nwis from '../../assets/images/nwis/nwis.jpg';
import ii from '../../assets/images/print/ii.jpg';
import r4ts from '../../assets/images/r4ts/r4ts.jpg';
import ttgbw from '../../assets/images/ttg/ttgbw.jpg';
import wyw from '../../assets/images/wyw/wyw.png';
import hfw from '../../assets/images/print/hfw.jpg';
import ttgalt from '../../assets/images/ttg/ttgalt.jpg';
import ott from '../../assets/images/print/123.jpg';

const Art = () => {

    const [art, setArt] = useState([]);
    const [viewport, setViewport] = useState(false);
    const [imgSrc, setImgSrc] = useState('');
    const [imgAlt, setImgAlt] = useState('');

    useEffect(() => {
        const sortedArt = [
            {
                id: 1,
                title: 'Can you get used to this?',
                src: cyguttrbmp,
            },
            {
                id: 2,
                title: 'Not what it seems.',
                src: nwis,
            },
            {
                id: 3,
                title: 'Imagine',
                src: ii,
            },
            {
                id: 4,
                title: 'Reach for the Stars',
                src: r4ts,
            },
            {
                id: 5,
                title: 'Take the Glory',
                src: ttgbw,
            },
            {
                id: 6,
                title: 'Widen your world.',
                src: wyw,
            },
            {
                id: 7,
                title: 'Home from work.',
                src: hfw,
            },
            {
                id: 8,
                title: 'Take the Glory (alt)',
                src: ttgalt,
            },
            {
                id: 9,
                title: 'I want to be...',
                src: ott,
            },
        ];

        sortedArt.sort(() => Math.random() - 0.5);
        setArt(sortedArt);
    }, []);

    return (
        <Container>
            <Container className="gallery-intro"> 
                Enjoy some of my recent pieces! At the moment, the images are static, but I'll be updating the site to have more interactive features soon.
            </Container>
            <Container className="gallery">
                {art.map((image, index) => {
                    return(
                        <Container 
                            className="gallery-item" 
                            key={index} 
                        >
                                <Image 
                                    src={image.src} 
                                    alt={image.title} 
                                    style={{ width: "100%" }}
                                />
                        </Container>
                    )
                })}
            </Container>
        </Container>
    );
};

export default Art;
