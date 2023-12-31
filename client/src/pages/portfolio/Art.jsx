import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import cyguttrbmp from '../../assets/images/cygutt/cyguttrbmp.jpg';
import nwis from '../../assets/images/nwis/nwis.jpg';
import era from '../../assets/images/print/era.jpg';
import ii from '../../assets/images/print/ii.jpg';
import ruin from '../../assets/images/print/ruin.jpg';
import r4ts from '../../assets/images/r4ts/r4ts.jpg';
import ttgbw from '../../assets/images/ttg/ttgbw.jpg';
import wyw from '../../assets/images/wyw/wyw.png';

const Art = () => {

    const art = [
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
            title: 'Era',
            src: era,
        },
        {
            id: 4,
            title: 'Imagine',
            src: ii,
        },
        {
            id: 5,
            title: 'RUIN ME',
            src: ruin,
        },
        {
            id: 6,
            title: 'Reach for the Stars',
            src: r4ts,
        },
        {
            id: 7,
            title: 'Take the Glory',
            src: ttgbw,
        },
        {
            id: 8,
            title: 'Widen your world.',
            src: wyw,
        }
    ];

    const [model, setModel] = useState(false);
    const [imgSrc, setImgSrc] = useState('');

    const shadowBox = (src) => {
        setImgSrc(src);
        setModel(true);
    };

    return (
        <Container>
            <Container className={model ? "model open" : "model"}>
                <Image src={imgSrc} alt="" />
                <Container className="close" onClick={() => setModel(false)}>
                    <i className="fas fa-times"></i>
                </Container>
            </Container>
            <Container className="gallery">
                {art.map((image, index) => {
                    return(
                        <Container className="gallery-item" key={index} onClick={() => shadowBox(image.src)}>
                            <Image src={image.src} alt={image.title} style={{ width: "100%" }}/>
                        </Container>
                    )
                })}
            </Container>
        </Container>
    );
};

export default Art;
