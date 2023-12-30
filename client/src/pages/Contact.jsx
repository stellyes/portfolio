import React from 'react';
import Container from 'react-bootstrap/Container';

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
        <Container className="contact">
            <Container>
                <h1 className="contact-header">Get in touch!</h1>
                <Container className="contact-options">
                    <TfiEmail className="email" onClick={handleEmailClick}/>
                    <FaGitAlt className='github' onClick={handleGithubClick}/>
                    <AiOutlineLinkedin className='linkedin' onClick={handleLinkedInClick}/>
                </Container>
            </Container>
        </Container>
    );
};

export default Contact;
