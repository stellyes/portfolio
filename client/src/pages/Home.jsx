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
                            After saving up a bit, I eventually pursued a Full Stack Developer (MERN) Certification through UC Berkeley Extension. My job as a student is over for the course, but I look forward to finding a dedicated team of developers to work with and continue my learning as a programmer.
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
                            I possess a rich and diverse skill set, making me a dynamic individual with a strong foundation in both artistic and technical domains. As a multidisciplinary artist, my focus on digital art and graphic design showcases my creative prowess, while my proficiency as a multi-instrumentalist, with a primary focus on the piano, highlights my musical talents.                        
                        </p>
                        <p>
                            On the technical front, my expertise in software engineering is extensive, with a particular emphasis on React.js, Node.js, MongoDB, Javascript, Python, Agile Development, and providing scalable, serverless solutions through the AWS Cloud. My proficiency in various tools such as OnRender, AWS Route53, and AWS Amplify underscores my commitment to robust deployment and delivery processes through cloud environments.
                        </p>
                        <p>
                            In the realm of testing, I exhibit a strong grasp of API Testing, Test-Driven Development (TDD), Postman, and Insomnia, showcasing my dedication to ensuring the reliability and functionality of my software projects. 
                        </p>
                        <p>
                            Additionally, my familiarity with Agile/Scrum Methodology, ORM, OOP, and MVC positions me as a developer who values structured and efficient development practices. My proficiency in programming languages like Javascript, Python, and C, as well as my expertise in browser-based technologies such as HTML5, CSS3, Responsive Design, Bootstrap, PWAs, React.js, and IndexedDB, demonstrate a well-rounded skill set crucial for modern web development.                        
                        </p>
                        <p>
                            In the database realm, my experience with MySQL, Sequelize, NoSQL, and MongoDB showcases my versatility in handling different data management systems. Furthermore, my competence in server-side technologies like JWT Authentication, Express.js, and Express Middleware, along with my understanding of API design principles like the Client-Server Model, RESTful Principles, HTTP request methods, and GraphQL, positions me as a developer capable of architecting and implementing robust backend systems.
                        </p>
                        <p>
                            Overall, my combination of artistic creativity and technical proficiency makes me a well-rounded individual with the ability to bring a unique perspective to both the creative and technical aspects of any project.
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
                            Having the privilege to grow up on a farm taught me the importance of nutrition and sustainability. As I grew into my farm boots, I got to thinking about how I could include the community in these benefits as well, leading me to found S.H.I.F.T. Foods at the age of 15. My mission with S.H.I.F.T. (Sustainable, Healthy, Informational, Friendships, and Thrive) was to provide the community with fresh, healthy produce options for those who could otherwise not afford these necessities to live, while educating on the importance and ways to implement agriculture on a small scale so that this model can be replicated across the country. 
                        </p>
                        <p>
                            In the two years I was in charge of running the operation at S.H.I.F.T., we managed to donate over 3000lbs. of produce and donate just under $1500 in direct donations through a pie-a-thon fundraiser. The lasting impact that I wanted to create in Whatcom County was to inspire other community members with gardens to actively participate. Change starts with a single seed, and I wanted to be just that. For more information about our operations, check out <a href="https://youtu.be/kwK7ExuKRxM?si=mL-ArssMY3Oa1FGM" className="home-link">this interview piece we did with KING 5</a>, the largest news organization in Washington State, and  <a href="https://www.youtube.com/watch?v=Cd0IHh_cyBw" className="home-link">this radio interview we did with the Bellingham Herald</a>, the regional newspaper.
                        </p>
                        <p>
                            These days, I'm located in the Bay Area in a space that doesn't allow me to grow my own produce. In the future, I hope to replicate this model in my current community and continue inspiring people to be the change they want to see! 
                        </p>
                    </div>
                </Container>
            </Container>
        </Container>
    );
};

export default Home;
