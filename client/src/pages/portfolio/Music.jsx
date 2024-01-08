import React, { useState, useEffect, useRef, createRef } from 'react';
import Container from 'react-bootstrap/Container';

import { TfiMenu } from "react-icons/tfi";
import { GrPlay, GrPause } from "react-icons/gr";
import { BsHeadphones } from "react-icons/bs";

import joy from '../../assets/audio/joy.wav';
import mantra from '../../assets/audio/mantra.mp3';
import sweetnothings from '../../assets/audio/sweet-nothings.wav';
import crymyname from '../../assets/audio/crymyname.mp3';
import fivehours from '../../assets/audio/fivehours.mp3';
import cyanide from '../../assets/audio/cyanide.mp3';
import coeo from '../../assets/audio/coeo.mp3';
import losingmyself from '../../assets/audio/losingmyselfclubmix.mp3';
import kittrs from '../../assets/audio/kickittotherightside.mp3';
import dlmd from '../../assets/audio/dontletmedown.mp3';
import reflections from '../../assets/audio/reflections.mp3';
import childsplay from '../../assets/audio/childsplay.mp3';
import restore from '../../assets/audio/restore.mp3';
import r2m from '../../assets/audio/revealedtome.mp3';
import raindrops from '../../assets/audio/raindrops.mp3';

const songs = [ 
    {
        id: 1,
        title: 'joy',
        artist: 'carol hudson ward',
        description: "I recorded this sometime in mid- to late-October of 2022. Something about the way that time of year always manages to pull something out of people. There's this way that people look at you when they're excited about something and they can't wait to tell you. Permanent joy. I really needed joy at the time.",
        src: joy,
    },
    {
        id: 2,
        title: 'mantra',
        artist: 'carol hudson ward',
        description: "November 25th, 2022. Can't say I remember much about this day. I love a good mantra. 'carol hudson ward' is a pseudonym I use to release these improvised pieces. They feel very fleeting, and I don't necessarily want my name attached to them. Yet, here they are!",
        src: mantra,
    },
    {
        id: 3,
        title: 'sweet nothings',
        artist: 'carol hudson ward',
        description: 'August 10th, 2018. My sweet nothings. Rest in peace, Richard.',
        src: sweetnothings,
    },
    {
        id: 4,
        title: 'Cry My Name',
        artist: 'DJ LEFT OVER',
        description: "One of the last tracks I recorded this summer (2023) for this project. This summer was full of music discovery for me. With some handy MIDI sequence work from my TR-06, I threw this one together.",
        src: crymyname
    },
    {
        id: 5,
        title: 'fivehours',
        artist: '18PM',
        src: fivehours,
        description:  "This is one of my favorite songs from this album (18PM Vol. 2). Zach really put a lot of effort into recording these vocals. I remember I was taking a summer class in 2020, and while I was in a Zoom call, he was in the living room getting take after take after take. Turned out pretty good if you ask me."
    },
    {
        id: 6,
        title: 'cyanide',
        artist: '18PM',
        src: cyanide,
        description: "18PM is a project I hold near and dear to my heart. We set out to have fun, and we did. Nothing more than good, honest jams."
    },
    {
        id: 7,
        title: 'coeo',
        artist: 'god of nothing',
        src: coeo,
        description: "One of the earlier demos I ended up publishing for this project. I really like how compressed I made this one feel. I don't mean that sonically, I mean that more in a 'I feel like I'm being crushed' kind of way. I think it's a good thing."
    },
    {
        id: 8,
        title: 'Losing Myself (Club Mix)',
        artist: 'DJ LEFT OVER',
        src: losingmyself,
        description: "Another track that I owe solely to the Roland TR-06. From what I read online, this machine doesn't get nearly enough praise. The grooves you can get out of this thing are unreal, this is one of my favorite songs I've made with it."
    },
    {
        id: 9,
        title: 'KICK IT TO THE RIGHT SIDE',
        artist: 'BADTIME!',
        src: kittrs,
        description: "This is a funny one. It's kind of like, writing a resignation letter before you even put in your two weeks energy. Do with that what you will!"
    },
    {
        id: 10,
        title: 'Don\'t Let Me Down',
        artist: 'DJ LEFT OVER',
        src: dlmd,
        description: "This is one of the first tracks I recorded for this project. This was a combination of live and sequenced drums, drum patterns, and other drum samples collaged together."
    },
    {
        id: 11,
        title: 'reflections',
        artist: 'god of nothing',
        src: reflections,
        description: "This song is supposed to feel like being in the desert sun. Crushing. Unforgiving. But calm."        
    },
    {
        id: 12,
        title: 'child\'s play',
        artist: 'god of nothing',
        src: childsplay,
        description: "Child's play is about throwing judgement to the side and allowing for creative exploration to be pure. I aimed to capture that in sound as well as in the creation process." 
    },
    {
        id: 13,
        title: 'restore',
        artist: 'god of nothing',
        src: restore,
        description: "Breathe. Restore."
    },
    {
        id: 14,
        title: 'revealed to me',
        artist: 'god of nothing',
        src: r2m,
        description: "I like using field recordings in my songs. It makes them feel more alive."        
    },
    {
        id: 15,
        title: 'raindrops on pavement',
        artist: 'god of nothing',
        src: raindrops,
        description: "This one was written during Tropical Storm Hillary in Southern California. What a time to be alive."
    },
];

// Function to shuffle an array using the Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(songs);

const Music = () => {

    const [song, setSong] = useState(0); // song index
    const [info, setInfo] = useState(0); // song info [dropdown
    const [nowPlaying, setNowPlaying] = useState(false); // is song playing

    // create a separate audioRef for each song
    const audioRefs = useRef(songs.map(() => createRef())); 

    const playSong = (id) => {
        // if user clicks the same song that is already playing, pause it
        if (nowPlaying && id - 1 === song) {
            pauseSong();
        } else {
            // stop current song entirely
            setNowPlaying(false);
            audioRefs.current[song].current.pause();
            audioRefs.current[song].current.currentTime = 0;

            setSong(id - 1);
            audioRefs.current[id - 1].current.play();
            setNowPlaying(true);
        }
    };


    const pauseSong = () => {
        setNowPlaying(false);
        setSong(prevSong => {
            audioRefs.current[prevSong].current.pause(); // Pause the current playing song
            return 0; // Set song to 0
        });
    };

    useEffect(() => {
        if (nowPlaying) {
            audioRefs.current[song].current.play();
        } else {
            audioRefs.current[song].current.pause();
        }
    }, [nowPlaying, song, audioRefs]);

    return (
        <Container className="song-list">
            {songs.map((song_object, index) => {
                return (
                    <Container className="song-list-container" key={index} >
                        <Container className="song-list-item" >
                            <Container 
                                className={`song-info-dropdown ${info === song_object.id ? 'info-select' : ''}`}
                                onClick={() => {
                                    if (info === song_object.id) {
                                        setInfo(0);
                                    } else {
                                        setInfo(song_object.id);
                                    }
                                }}
                            >
                                <TfiMenu />
                            </Container>
                            <Container 
                                className="song-control-button" 
                                onClick={() => (nowPlaying && song_object.id - 1 === song) ? pauseSong() : playSong(song_object.id)}
                            >
                                {nowPlaying && song_object.id - 1 === song ? <GrPause /> : <GrPlay />}
                            </Container>
                            <Container className="song-playback">
                                <audio src={song_object.src} ref={audioRefs.current[index]} />
                                <h3 className='song-title'>{song_object.title}</h3>
                                <p className='song-artist'>{song_object.artist}</p>
                            </Container>
                            <Container className='streaming-info'>
                                <BsHeadphones />
                            </Container>
                        </Container>
                        <Container className={`song-info ${info === song_object.id ? 'display-info' : ''}`}>
                            <p className="song-description">{song_object.description}</p>    
                        </Container>
                    </Container>
                );
            })}
        </Container>
    );
};

export default Music;
