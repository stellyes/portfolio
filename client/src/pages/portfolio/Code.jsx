import React from 'react';
import { Container, Card } from 'react-bootstrap';

import jate from '../../assets/images/jate.png';
import ms from '../../assets/images/ms.png';

const Code = () => {
    return (
        <Container className='code-container'>
            <Container className="resume-container">
                <Container className="resume-button">View full resume</Container>
            </Container>
            <Container className='card-container'>
                <Card className="code-display">
                    <Card.Img variant="top" src={jate} />
                    <Card.Body className="code-info">
                        <Card.Title>J.A.T.E Quick Journal</Card.Title>
                        <Card.Text>
                            "Just Another Text Editor" - An Express.js progressive web application designed to allow for users to save notes for on and offline access.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="code-display" >
                    <Card.Img variant="top" src={ms} />
                    <Card.Body className="code-info">
                        <Card.Title>MarketServer</Card.Title>
                        <Card.Text>
                            "A database management system for business" - MarketServer is a Node / Express.js application designed to handle and manage the backend of an example e-commerce website.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </Container>
        
    );
};

export default Code;
