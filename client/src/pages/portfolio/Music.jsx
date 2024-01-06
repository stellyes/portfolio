import React, { useState, useEffect, useRef, createRef } from 'react';
import Container from 'react-bootstrap/Container';

import { TfiMenu } from "react-icons/tfi";
import { GrPlay, GrPause } from "react-icons/gr";
import { BsHeadphones } from "react-icons/bs";

import joy from '../../assets/audio/joy.wav';
import mantra from '../../assets/audio/mantra.wav';
import sweetnothings from '../../assets/audio/sweet-nothings.wav';

const Music = () => {

    const [song, setSong] = useState(0); // song index
    const [info, setInfo] = useState(0); // song info [dropdown
    const [nowPlaying, setNowPlaying] = useState(false); // is song playing

    const songs = [ 
        {
            id: 1,
            title: 'joy',
            artist: 'carol hudson ward',
            description: "I wrote this sometime in mid- to late-October of 2022. Something about the way that time of year always manages to pull something out of people. There's this way that people look at you when they're excited about something and they can't wait to tell you. Permanent joy. I really needed joy at the time.",
            src: joy,
        },
        {
            id: 2,
            title: 'mantra',
            artist: 'carol hudson ward',
            description: "November 25th, 2022. Can't say I remember much about this day. I love a good mantra.'carol hudson ward' is a pseudonym I use to release these improvised pieces. They feel very fleeting, and I don't necessarily want my name attached to them.Yet, here they are!",
            src: mantra,
        },
        {
            id: 3,
            title: 'sweet nothings',
            artist: 'carol hudson ward',
            description: 'August 10th, 2018. My sweet nothings. Rest in peace, Richard.',
            src: sweetnothings,
        },
    ];

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
            console.log(`Playing song ${id}`);
            setNowPlaying(true);
        }
    };


    const pauseSong = () => {
        console.log(`Pausing song ${song + 1}`);
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
