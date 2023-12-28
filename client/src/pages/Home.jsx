import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    const [shuffledText, setShuffledText] = useState("");
    const [displayText, setDisplayText] = useState("");
    const [iteration, setIteration] = useState(0);

    const shuffleText = (text) => {
        const alphanumeric = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const specialChars = '!@#$%^&*()_-+=[]{}|:;"\'<>,.?/~`';
        let shuffled = "";
        for (let i = 0; i < text.length; i++) {
            if (text[i] === ' ') {
                shuffled += ' ';
            } else {
                if (Math.random() < 0.5) {
                    shuffled += alphanumeric[Math.floor(Math.random() * alphanumeric.length)];
                } else {
                    shuffled += specialChars[Math.floor(Math.random() * specialChars.length)];
                }
            }
        }
        return shuffled;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setShuffledText(shuffleText("Ryan England"));
            setIteration(iteration + 1);
        }, 200);

        setTimeout(() => {
            clearInterval(interval);
            setDisplayText("Ryan England");
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (iteration % 5 === 0) {
            setDisplayText((prevText) => prevText + shuffledText[iteration / 5]);
        }
    }, [iteration, shuffledText]);

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Row>
                <Col>
                    <h1>{displayText}</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
