import React, { useState, useEffect } from 'react';
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
    const [nowPlaying, setNowPlaying] = useState(false); 

    const songs = [ 
        {
            id: 1,
            title: 'joy',
            artist: 'carol hudson ward',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            src: joy,
        },
        {
            id: 2,
            title: 'mantra',
            artist: 'carol hudson ward',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            src: mantra,
        },
        {
            id: 3,
            title: 'sweet nothings',
            artist: 'carol hudson ward',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            src: sweetnothings,
        },
    ];

    const playSong = (id) => {
        setSong(id);
        console.log(`Playing song ${id}`);
        setNowPlaying(true);
    };

    const pauseSong = () => {
        console.log(`Pausing song ${song}`);
        setNowPlaying(false);
        setSong(0);
    };

    return (
        <Container className="song-list">
            {songs.map((song_object) => {
                return (
                    <Container className="song-list-container">
                        <Container className="song-list-item" key={song_object.id}>
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
                                onClick={() => (nowPlaying && song_object.id === song) ? pauseSong() : playSong(song_object.id)}
                            >
                                {nowPlaying && song_object.id === song ? <GrPause /> : <GrPlay />}
                            </Container>
                            <Container className="song-playback">
                                <div className="filterr"></div>
                                <h3 className='song-title'>{song_object.title}</h3>
                                <p className='song-artist'>{song_object.artist}</p>
                            </Container>
                            <Container className='streaming-info'>
                                <BsHeadphones />
                            </Container>
                        </Container>
                        <Container className={`song-info ${info === song_object.id ? 'display-info' : ''}`}>
                            <p>{song_object.description}</p>    
                        </Container>
                    </Container>
                );
            })}
        </Container>
    );
};

export default Music;
