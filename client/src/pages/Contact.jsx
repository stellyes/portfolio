import React from 'react';
import { TfiEmail } from "react-icons/tfi";
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
    const handleEmailClick = () => {
        window.location.href = 'mailto:me@rengland.org';
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Row>
                <Col>
                    <h1 className="text-center">Contact</h1>
                    <TfiEmail onClick={handleEmailClick} className="d-block mx-auto" />
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
