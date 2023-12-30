import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import { FaGitAlt, FaYoutube } from "react-icons/fa6";
import { SlGlobe } from "react-icons/sl";


import jate from '../../assets/images/jate.png';
import ms from '../../assets/images/ms.png';
import wb from '../../assets/images/wb.png'
import ml from '../../assets/images/ml.png'
import rscssg from '../../assets/images/rscssg.png'
import saa from '../../assets/images/saa.png'

const Resume = () => {
    return (
        <Container className='resume-container'>
            <Container className="resume-button">View full resume</Container>
        </Container>
    );
}

const Projects = () => {
    const [expandState, setExpandState] = useState(0);

    const handleGithubClick = (project) => {
        window.location.href = `https://github.com/stellyes/${project}}`;
    };

    const handleRedirect = (url) => {
        window.location.href = url;
    };

    return (
        <Container className="code-container">
            <Container className="project" onClick={() => {
                    if (expandState == 1) {
                        setExpandState(0);
                    } else {
                        setExpandState(1);
                    }
                }}>
                <h2>J.A.T.E Quick Journal</h2>
                <Container className="project-details" style={expandState == 1 ? { height: '100%' } : { height: "0" }}>
                    <Image className="project-image" src={jate} alt="J.A.T.E Quick Journal" fluid />
                    <Container className="project-links">
                        <FaGitAlt className='github' onClick={() => handleGithubClick("JATE-QuickJournal")}/>      
                        <SlGlobe className='website' onClick={() => handleRedirect("https://jate-tydj.onrender.com/")}/>        
                    </Container>
                    <Container className="project-description">
                        <p>
                            "Just Another Text Editor" - An Express.js progressive web application designed to allow for users to save notes for on and offline access.
                        </p>
                    </Container>
                </Container>
            </Container>
            <Container className="project" onClick={() => {
                    if (expandState == 2) {
                        setExpandState(0);
                    } else {
                        setExpandState(2);
                    }
                }}>
                <h2>MarketServer</h2>
                <Container className="project-details" style={expandState == 2 ? { height: '100%' } : { height: "0" }}>
                    <Image className="project-image" src={ms} alt="MarketServer" fluid />
                    <Container className="project-links">
                        <FaGitAlt className='github' onClick={() => handleGithubClick("MarketServer")}/>      
                        <FaYoutube className='youtube' onClick={() => handleRedirect('https://www.youtube.com/watch?v=BhcnfLFVnj8')}/>        
                    </Container>
                    <Container className="project-description">
                        <p>
                            "A database management system optimized for business" - MarketServer is a Node/Express.js application designed to handle and manage the backend of an example e-commerce website.
                        </p>
                    </Container>
                </Container>
            </Container>
            <Container className="project" onClick={() => {
                    if (expandState == 3) {
                        setExpandState(0);
                    } else {
                        setExpandState(3);
                    }
                }}>
                <h2>Wealth-Builder</h2>
                <Container className="project-details" style={expandState == 3 ? { height: '100%' } : { height: "0" }}>
                    <Image className="project-image" src={wb} alt="MarketServer" fluid />
                    <Container className="project-links">
                        <FaGitAlt className='github' onClick={() => handleGithubClick("Wealth-Builder")}/>      
                        <SlGlobe className='website' onClick={() => handleRedirect('https://wealth-builder-d2d82a6766d2.herokuapp.com/')}/>        
                    </Container>
                    <Container className="project-description">
                        <p>
                            "A full-stack web application designed to help you save money!" - Wealth Builder creates a safe online accounting form to keep track of a user's money coming in and money going out during the course of a month.
                        </p>
                    </Container>
                </Container>
            </Container>
            <Container className="project" onClick={() => {
                    if (expandState == 4) {
                        setExpandState(0);
                    } else {
                        setExpandState(4);
                    }
                }}>
                <h2>ModLisp</h2>
                <Container className="project-details" style={expandState == 4 ? { height: '100%' } : { height: "0" }}>
                    <Image className="project-image" src={ml} alt="ModLisp" fluid />
                    <Container className="project-links">
                        <FaGitAlt className='github' onClick={() => handleGithubClick("ModLisp")}/>      
                    </Container>
                    <Container className="project-description">
                        <p>
                            "A modfied version of the Lisp programming language with Bison/Flex compiler." - An in-depth look at compiler principles through the construction of this Lisp-hybrid!
                        </p>
                    </Container>
                </Container>
            </Container>
            <Container className="project" onClick={() => {
                    if (expandState == 5) {
                        setExpandState(0);
                    } else {
                        setExpandState(5);
                    }
                }}>
                <h2>reset-css-generator</h2>
                <Container className="project-details" style={expandState == 5 ? { height: '100%' } : { height: "0" }}>
                    <Image className="project-image" src={rscssg} alt="reset-css-generator" fluid />
                    <Container className="project-links">
                        <FaGitAlt className='github' onClick={() => handleGithubClick("reset-css-generator")}/>      
                    </Container>
                    <Container className="project-description">
                        <p>
                            A python script to automatically generate the most concise reset.css necessary for your webpage. Prior renderings of your reset.css file can be referenced in the output folder with the date and time the file was generated.
                        </p>
                    </Container>
                </Container>
            </Container>
            <Container className="project" onClick={() => {
                    if (expandState == 6) {
                        setExpandState(0);
                    } else {
                        setExpandState(6);
                    }
                }}>
                <h2>shopping-addicts-anonymous</h2>
                <Container className="project-details" style={expandState == 6 ? { height: '100%' } : { height: "0" }}>
                    <Image className="project-image" src={saa} alt="shopping-addicts-anonymous" fluid />
                    <Container className="project-links">
                        <FaGitAlt className='github' onClick={() => handleGithubClick("shopping-addicts-anonymous")}/>      
                    </Container>
                    <Container className="project-description">
                        <p className='italic'>
                            A shopping experience like you've never seen it
                        </p>
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
