import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import VideoBackground from '../components/video';
import Bestmovies from '../components/bestmovie';
import Character from '../components/cardCharacters';
import Movies from '../view/movies';
import './../App.css'

const Home = props => {
    const { store, actions } = useContext(Context);
    console.log(store.films.results)
    return (
        <>
            <div className="container" >
                <div className="row" >
                    <div className="col" >
                        <VideoBackground />
                        <Bestmovies />
                        <Character />
                        {/* {
                            store.films.results != null ?
                                (<>
                                </>
                                ) :
                                (<div className="container pt-5" >
                                    <div className="row" >
                                        <div className="col-12 text-center w-25" >
                                            <img src="../resistance.png" width="50" className="animated infinite swing mx-auto" alt="" />
                                            <div className="typewriter" >
                                                <h1 className="text-white mandalorian pt-4" > Loading... </h1>
                                            </div >
                                        </div>
                                    </div >
                                </div>
                            )
                        } */}
                    </div>
                </div >
            </div>
        </>
    )
}

export default Home;