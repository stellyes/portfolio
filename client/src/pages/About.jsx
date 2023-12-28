import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    <p>
                        My name is Ryan, I'm 24, currently living in California. I've always loved tinkering with computers and was pretty glued to my parents' old desktop rig back in 2007 when the internet was pretty new to me. I have a diverse background that covers everything from art to agriculture, music and more.
                    </p>
                    <p>
                        I'm currently a MERN full-stack web developer, recently graduated from the UC Berkeley Extension web developer program. I'm comfortable working with Node.js, Express.js, and many different database frameworks. I have also had the pleasure of working with a number of front-end frameworks such as Handlebars, React, Bootstrap, etc. I also have an understanding of Cloud-based computing in the AWS environment, specializing in their API Gateway, Route 53, and EC2 services.
                    </p>
                </Col>
                <Col xs={12} md={6} className="d-flex justify-content-end">
                    <Image src="../../public/profile.jpeg" alt="Profile" fluid />
                </Col>
            </Row>
        </Container>
    );
};

export default About;
