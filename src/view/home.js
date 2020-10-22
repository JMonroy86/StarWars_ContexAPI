import React from 'react';
import VideoBackground from '../components/video';
import Bestmovies from '../components/bestmovie';
import Character from '../components/cardCharacters';
import './../App.css'

const Home = props => {
    return (
        <>
            <div className="container" >
                <div className="row" >
                    <div className="col" >
                        <VideoBackground />
                        <Bestmovies />
                        <Character />
                    </div>
                </div >
            </div>
        </>
    )
}

export default Home;