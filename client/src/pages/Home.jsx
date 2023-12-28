import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const name = "Ryan England"; // For comparison

const Home = () => {
    const [displayText, setDisplayText] = useState("");

    const shuffleText = () => {
        const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*_-+=';

        // Scramble letters for 2 seconds
        const scrambleInterval = setInterval(() => {
            let input = "";
            for (let i = 0; i < name.length; i++) {
                // Skip whitespace
                if (name[i] === " ") {
                    input += " ";
                    continue;
                }

                input += characters[Math.floor(Math.random() * characters.length)];
            }

            setDisplayText(input);
        }, 50);

        // Stop scrambling after 2 seconds
        setTimeout(() => {
            clearInterval(scrambleInterval);

            let iteration = 0;
            const revealInterval = setInterval(() => {
                let input = "";
                for (let i = 0; i < name.length; i++) {
                    // Skip whitespace
                    if (name[i] === " ") {
                        input += " ";
                        continue;
                    }

                    input += characters[Math.floor(Math.random() * characters.length)];
                }

                // Every five iterations, display a new letter of actual name
                input = name.substring(0, Math.floor(iteration/5)) + 
                        input.substring(Math.floor(iteration/5));

                setDisplayText(input);
                iteration++;
            }
            , 50);

            // Stop scrambling after 2 seconds
            setTimeout(() => {
                clearInterval(revealInterval);
            }, 6000);
        }, 2000);
    }

    // run shuffleText() on page load
    useEffect(() => {
        shuffleText();
    }, []);

    return (
        <Container className="d-flex justify-content-center align-items-center">
            <Row>
                <Col>
                    <h1 className="pftitle">{displayText}</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
