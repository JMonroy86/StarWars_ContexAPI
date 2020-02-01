import React from 'react';
import VideoBackground from './video';
import Bestmovies from './bestmovie';
import Character from './cardCharacters';
import Galaxy from './galaxy_edge';

import './../App.css'
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: null
        }
    }
    componentDidMount() {
        this.getMovies('https://swapi.co/api/films/');

    }
    getMovies(url) {
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((movies) => {
                console.log(movies);
                this.setState({ movies: movies })
            })
    }
    render() {
        if (this.state.movies !== null) {
            return (
                <>
                    <VideoBackground />
                    <Bestmovies />
                    <Character />
                    <Galaxy />


                    <div className="container pt-5">
                        <div className="row">
                            {this.state.movies.results.map((movies, i) => {
                                console.log(movies.episode_id)
                                return <div key={i} className="col-md-3">
                                    <div className="card bg-transparent pt-2">
                                        <img src={"../img/" + movies.episode_id + ".jpg"} className="mycard-img-top img-fluid" alt="..." />
                                        <div className="card-body">
                                            <h1 className="card-title">{movies.title}</h1>
                                            <h2>Episode: {movies.episode_id}</h2>
                                            <h6 className="card-text">{movies.director}</h6>
                                            <h6>{movies.release_date}</h6>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-12 text-center w-25">
                            <img src="../resistance.png" width="50" className="animated infinite swing mx-auto" alt="" />
                            <div className="typewriter">
                                <h1 className="text-white mandalorian pt-4">Loading...</h1>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Home;