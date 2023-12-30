import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import jate from '../../assets/images/jate.png';
import ms from '../../assets/images/ms.png';

const Resume = () => {
    return (
        <Container className='resume-container'>
            <Container className="resume-button">View full resume</Container>
        </Container>
    );
}

const Projects = ({ projects }) => {
    return (
        <Container className="code-container">
            <Container className="project">
                <h2>J.A.T.E Quick Journal</h2>
                <Container className="project-details">
                    <Image src={jate} className="project-image" />
                    <Container className="project-description">
                        <p>
                            "Just Another Text Editor" - An Express.js progressive web application designed to allow for users to save notes for on and offline access.
                        </p>
                    </Container>
                    <Container className="project-links">
                        <a href=""></a>                
                    </Container>
                </Container>
            </Container>
        </Container>
    );
}


const Code = () => {
    return (
        <Container>
            <Resume />
            <Projects />
        </Container>
    );
};

export default Code;
