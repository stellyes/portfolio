import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import { FaGitAlt, FaYoutube } from "react-icons/fa6";
import { SlGlobe } from "react-icons/sl";

import resume from '../../assets/documents/resume.pdf';

import jate from '../../assets/images/projects/jate.png';
import ms from '../../assets/images/projects/ms.png';
import wb from '../../assets/images/projects/wb.png'
import ml from '../../assets/images/projects/ml.png'
import rscssg from '../../assets/images/projects/rscssg.png'
import saa from '../../assets/images/projects/saa.png'
import rp from '../../assets/images/projects/rp.png'
import ttcli from '../../assets/images/projects/ttcli.png'
import ca from '../../assets/images/projects/ca.png'
import rr from '../../assets/images/projects/rr.png'
import svg from '../../assets/images/projects/svg.png'
import wh from '../../assets/images/projects/wh.png'
import gwr from '../../assets/images/projects/gwr.png'

const projectData = [
    {
        id: 1,
        title: 'J.A.T.E Quick Journal',
        src: jate,
        github: 'JATE-QuickJournal',
        website: 'https://jate-tydj.onrender.com/',
        description: 'Just Another Text Editor - An Express.js progressive web application designed to allow for users to save notes for on and offline access.',
    },
    {
        id: 2,
        title: 'MarketServer',
        src: ms,
        github: 'MarketServer',
        youtube: 'https://www.youtube.com/watch?v=BhcnfLFVnj8',
        description: 'A database management system optimized for business - MarketServer is a Node/Express.js application designed to handle and manage the backend of an example e-commerce website.',
    },
    {
        id: 3,
        title: 'Wealth-Builder',
        src: wb,
        github: 'Wealth-Builder',
        website: 'https://wealth-builder-d2d82a6766d2.herokuapp.com/',
        description: 'A full-stack web application designed to help you save money! - Wealth Builder creates a safe online accounting form to keep track of a user\'s money coming in and money going out during the course of a month.',
    },
    {
        id: 4,
        title: 'ModLisp',
        src: ml,
        github: 'ModLisp',
        description: 'A modfied version of the Lisp programming language with Bison/Flex compiler. - An in-depth look at compiler principles through the construction of this Lisp-hybrid!',
    },
    {
        id: 5,
        title: 'reset-css-generator',
        src: rscssg,
        github: 'reset-css-generator',
        description: 'A python script to automatically generate the most concise reset.css necessary for your webpage. Prior renderings of your reset.css file can be referenced in the output folder with the date and time the file was generated.',
    },
    {
        id: 6,
        title: 'shopping-addicts-anonymous',
        src: saa,
        github: 'shopping-addicts-anonymous',
        website: 'https://shopping-addicts-anonymous.onrender.com/',
        description: 'A shopping experience like you\'ve never seen it',
    },
    {
        id: 7,
        title: 'react-portfolio',
        src: rp,
        github: 'portfolio',
        website: 'https://ryanengland.onrender.com',
        description: 'Look familiar? This is the repository for this website!',
    },
    {
        id: 8,
        title: 'TeamTrackCLI',
        src: ttcli,
        github: 'TeamTrackCLI',
        youtube: 'https://youtu.be/9j2LFPISIG0',
        description: 'TeamTrack is a Node.js application designed to help manage and display the different tables of a company\'s employee database.'
    },
    {
        id: 9,
        title: 'Content-AId',
        src: ca,
        github: 'Content-AId',
        website: 'https://stellyes.github.io/content-AId/',
        description: 'In a world increasingly inundated with ChatGPT and other AI chatbots, it is becoming harder and harder to identify human vs AI-generated content. That\'s why we created this web app: to help people discern computer-generated content from human-written. The core functionality of this app is deprecated, and the API used is no longer available. The github deployment serves as a proof of concept leftover from the time of development.'
    },
    {
        id: 10,
        title: 'rectify-readme',
        src: rr,
        github: 'rectify-readme',
        description: "\"Rectify README\" is a simple Node.js application that will automatically generate and format a README file given the provided user input from the application."
    },
    {
        id: 11,
        title: 'SVGenerator',
        src: svg,
        github: 'svgenerator',
        youtube: 'https://youtu.be/a8OK5oGvVSc',
        description: 'SVGenerator is a Node.js application that takes in an acronym of three characters, text color, shape, and shape color to generate a simple SVG logo.'
    },
    {
        id: 12,
        title: 'weather-hub',
        src: wh,
        github: 'weather-hub',
        website: 'https://stellyes.github.io/weather-hub/',
        description: 'WeatherHub provides current weather conditions for any valid city provided by the OpenWeather API. Once a city is located, the current conditions and five day forecast average are presented to the user.'
    },
    {
        id: 13,
        title: 'go-web-routes',
        src: gwr,
        github: 'go-web-routes',
        description: 'A demo on how to set HTTP routes with Go\'s build in HTTP handler.'
    },
];

// Function to shuffle an array using the Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(projectData);

const Resume = () => {
    return (
        <Container className='resume-container'>
            <a
                className='resume-link'
                href={resume}
                download="ryanengland_resume.pdf"
                target="_blank"
                rel="noopener noreferrer">
                <Container className="resume-button">View full resume</Container>
            </a>
        </Container>
    );
}

const Projects = () => {
    const [expandState, setExpandState] = useState(0);

    const handleGithubClick = (project) => {
        window.location.href = `https://github.com/stellyes/${project}`;
    };

    const handleRedirect = (url) => {
        window.location.href = url;
    };

    return (
        <Container className="code-container">
            {projectData.map((project, index) => {
                return (
                    <Container className="project" key={index} onClick={() => {
                        if (expandState == project.id) {
                            setExpandState(0);
                        } else {
                            setExpandState(project.id);
                        }
                    }}>
                        <h2>{project.title}</h2>
                        <Container className="project-details" style={expandState == project.id ? { height: '100%' } : { height: "0" }}>
                            <Image className="project-image" src={project.src} alt={project.title} fluid />
                            <Container className="project-links">
                                {project.github && <FaGitAlt className='github' onClick={() => handleGithubClick(project.github)} />}
                                {project.website && <SlGlobe className='website' onClick={() => handleRedirect(project.website)} />}
                                {project.youtube && <FaYoutube className='youtube' onClick={() => handleRedirect(project.youtube)} />}
                            </Container>
                            <Container className="project-description">
                                <p>
                                    {project.description}
                                </p>
                            </Container>
                        </Container>
                    </Container>
                )
            })}
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
