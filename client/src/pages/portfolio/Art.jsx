import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import cyguttrbmp from '../../assets/images/cygutt/cyguttrbmp.jpg';
import cyguttbw from '../../assets/images/cygutt/cyguttbw.jpg';
import cyguttgbmp from '../../assets/images/cygutt/cyguttgbmp.jpg';
import nwis from '../../assets/images/nwis/nwis.jpg';
import ii from '../../assets/images/print/ii.jpg';
import r4ts from '../../assets/images/r4ts/r4ts.jpg';
import ttgbw from '../../assets/images/ttg/ttgbw.jpg';
import ttgb from '../../assets/images/ttg/ttgb.jpg';
import ttgsunset from '../../assets/images/ttg/ttgsunset.jpg';
import ttgpainted from '../../assets/images/ttg/ttgpainted.jpg';
import wyw from '../../assets/images/wyw/wyw.png';
import hfw from '../../assets/images/print/hfw.jpg';
import ttgalt from '../../assets/images/ttg/ttgalt.jpg';
import ott from '../../assets/images/print/123.jpg';
import one from '../../assets/images/import/one.png';
import two from '../../assets/images/import/2.png';
import three from '../../assets/images/import/3.png';
import four from '../../assets/images/import/4.jpg';
import five from '../../assets/images/import/5.jpg';
import six from '../../assets/images/import/6.jpg';
import atmos from '../../assets/images/import/atmos.jpg';
import brag from '../../assets/images/import/brag.jpg';
import dev2 from '../../assets/images/import/dev2.jpg';
import pensif from '../../assets/images/import/pensif.jpg';

const Art = () => {

    const [art, setArt] = useState([]);
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
            {
                id: 10,
                title: 'Can you get used to this? (alt)',
                src: cyguttgbmp,
            },
            {
                id: 11,
                title: 'Can you get used to this? (bw)',
                src: cyguttbw,
            },
            {
                id: 12,
                title: 'Take the Glory (bw)',
                src: ttgb,
            },
            {
                id: 13,
                title: 'Take the Glory (sunset)',
                src: ttgsunset,
            },
            {
                id: 14,
                title: 'Take the Glory (painted)',
                src: ttgpainted,
            },
            {
                id: 15,
                title: 'One',
                src: one,
            },
            {
                id: 16,
                title: 'Two',
                src: two,
            },
            {
                id: 17,
                title: 'Three',
                src: three,
            },
            {
                id: 18,
                title: 'Four',
                src: four,
            },
            {
                id: 19,
                title: 'Five',
                src: five,
            },
            {
                id: 20,
                title: 'Six',
                src: six,
            },
            {
                id: 21,
                title: 'Atmosphere',
                src: atmos,
            },
            {
                id: 22,
                title: 'Brag',
                src: brag,
            },
            {
                id: 23,
                title: 'Dev',
                src: dev2,
            },
            {
                id: 24,
                title: 'Pensif',
                src: pensif,
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
                    return (
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
