import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
const name = "Ryan England"; // For comparison

import { RiArrowDropDownLine } from "react-icons/ri";

const Home = () => {
    const [displayText, setDisplayText] = useState("");
    const [displaySub, setDisplaySub] = useState(0);
    const [displayStudent, setDisplayStudent] = useState(0);
    const [displayHuman, setDisplayHuman] = useState(0);
    const [displayPlant, setDisplayPlant] = useState(0);
    const [info, setInfo] = useState(0); // song info [dropdown]

    const subStyle = {
        opacity: displaySub,
        transition: "opacity 1s ease",
    }

    const studentStyle = {
        opacity: displayStudent,
        transition: "opacity 1s ease",
    }

    const humanStyle = {
        opacity: displayHuman,
        transition: "opacity 1s ease",
    }

    const plantStyle = {
        opacity: displayPlant,
        transition: "opacity 1s ease",
    }

    const displayContents = () => {
        setDisplaySub(1);
        setTimeout(() => {
            setDisplayStudent(1);
            setTimeout(() => {
                setDisplayHuman(1);
                setTimeout(() => {
                    setDisplayPlant(1);
                }, 1000);
            }, 1000);
        }, 1000);

    };

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
                displayContents();
            }, 3100);

        }, 2000);
    }



    // run shuffleText() on page load
    useEffect(() => {
        shuffleText();
    }, []);

    return (
        <Container className="home">
            <h1 className="pftitle">{displayText}</h1>
            <h2 className="pfsubtitle" style={subStyle}>Full Stack Developer</h2>
            <Container className='pfdescription'>
                <Container id='student' style={studentStyle}>
                    <Container 
                        className='pfentry'
                        onClick={() => {
                            if (info === 1) {
                                setInfo(0);
                            } else {
                                setInfo(1);
                            }
                        }}
                    >
                        <p className='drop-title'>🧑‍🎓 "Former Student"</p>
                        <RiArrowDropDownLine className={`home-drop ${info == 1 ? 'home-info-select': ''}`}/>
                    </Container>
                    <div className={`fpdescription ${info == 1 ? 'show-fpdescription': ''}`}>
                        <p>
                            I spent three years at CSU Channel Islands pursuing a Bachelor's in Computer Science, but had to sadly stop attending before completing my degree due to financial difficulties brought upon by COVID-19.
                        </p>
                        <p>
                            That didn't stop me from finishing what I started. After spending a year interning as a Software Engineer, I wanted to round out my skillset. My university education was one of the best I could have asked for, but my time interning really showed me that I didn't know how to apply the things I was learning in relevant ways. "Being a part of a team working on complex problems while trying to factor in scalability in a cloud environment," was not only a mouthful to explain to my friends and family, but was a lot to take on after only programming in a classroom setting. 
                        </p>
                        <p>
                            After saving up a bit, I eventually pursued a Full Stack Developer (MERN) Certification through UC Berkeley Extension. 
                        </p>
                    </div>
                </Container>
                <Container id='human' style={humanStyle}>
                    <Container 
                        className='pfentry'
                        onClick={() => {
                            if (info === 2) {
                                setInfo(0);
                            } else {
                                setInfo(2);
                            }
                        }}
                    >
                        <p className='drop-title'>🗣️ "Current Human"</p>
                        <RiArrowDropDownLine className={`home-drop ${info == 2 ? 'home-info-select': ''}`}/>
                    </Container>
                    <div className={`fpdescription ${info == 2 ? 'show-fpdescription': ''}`}>
                        <p>
                            Something not a lot of people know about me is that I'm quite passionate about Agriculture!   
                        </p>
                        <p>
                            Having the privilege to grow up on a farm taught me the importance of nutrition and sustainability. As I grew into my farm boots, I got to thinking about how I could include the community in these benefits as well, leading me to found S.H.I.F.T. Foods at the age of 15.
                        </p>
                    </div>
                </Container>
                <Container id='plant' style={plantStyle}>
                    <Container 
                        className='pfentry'
                        onClick={() => {
                            if (info === 3) {
                                setInfo(0);
                            } else {
                                setInfo(3);
                            }
                        }}
                    > 
                        <p className='drop-title'>🌿 "Future Plant"</p>
                        <RiArrowDropDownLine 
                            className={`home-drop ${info == 3 ? 'home-info-select': ''}`} 
                        />
                    </Container>
                    <div className={`fpdescription ${info == 3 ? 'show-fpdescription': ''}`}>
                        <p>
                            Something not a lot of people know about me is that I'm quite passionate about Agriculture!   
                        </p>
                        <p>
                            Having the privilege to grow up on a farm taught me the importance of nutrition and sustainability. As I grew into my farm boots, I got to thinking about how I could include the community in these benefits as well, leading me to found S.H.I.F.T. Foods at the age of 15.
                        </p>
                    </div>
                </Container>
            </Container>
        </Container>
    );
};

export default Home;
