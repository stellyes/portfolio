import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { FaGitAlt } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { AiOutlineLinkedin } from "react-icons/ai";

const Contact = () => {
    const handleEmailClick = () => {
        window.location.href = 'mailto:me@rengland.org';
    };
    
    const handleGithubClick = () => {
        window.location.href = 'https://github.com/stellyes';
    };

    const handleLinkedInClick = () => {
        window.location.href = 'https://www.linkedin.com/in/ryandengland/';
    };

    return (
        <Container className="text-center">
            <Row className="contact">
                <Col>
                    <h1 className="contact-header">Get in touch!</h1>
                    <Container className="contact-options">
                        <TfiEmail className="email" onClick={handleEmailClick}/>
                        <FaGitAlt className='github' onClick={handleGithubClick}/>
                        <AiOutlineLinkedin className='linkedin' onClick={handleLinkedInClick}/>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
