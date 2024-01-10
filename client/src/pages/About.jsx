import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profileImg from '../assets/images/profile.jpeg'

const About = () => {
    return (
        <Container>
            <Row className="about">
                <Col className="about-text">
                    <p>
                        My name is Ryan, I'm 24, currently living in California. I've always loved tinkering with computers and was glued to my parents' old desktop rig back in 2007 when the internet was pretty new to me. I have a diverse background that covers everything from art to agriculture, music and more.
                    </p>
                    <p>
                        I'm a full-stack web developer, recently graduated from the UC Berkeley Extension web developer program. I'm comfortable working with Node.js, Express.js, and many different database frameworks. I've also had the pleasure of working with a number of front-end frameworks such as Handlebars, Bootstrap, and React.  
                    </p>
                    <p className='italic'>
                        (Of these, I decided to use React to build this website!)
                    </p>
                    <p>
                        I also have an understanding of Cloud-based computing in the AWS environment, specializing in their API Gateway, Route 53, and EC2 services. I gained this experience while pursuing my education at CSU Channel Islands as well as an internship with GBL Systems for a year starting in May 2021. I'm eager to apply my front-end and back-end skillset to pursue scalable solutions for a variety of problems. 
                    </p>
                </Col>
                <Col>
                    <Image src={profileImg} alt="Profile" className="profile" fluid />
                </Col>
            </Row>
        </Container>
    );
};

export default About;
