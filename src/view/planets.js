import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const Planets = (movies) => {
    const { store } = useContext(Context);
    return (

        <div className="container pt-5">
            <div className="row">
                {
                    store.films.results != null ?
                        (
                            store.films.results.map((movie, i) => {
                                // console.log(movie.episode_id)
                                return <div key={i} className="col-md-3">
                                    <div className="card bg-transparent pt-2">
                                        <img src={"../img/" + movie.episode_id + ".jpg"} className="mycard-img-top img-fluid" alt="..." />
                                        <div className="card-body">
                                            <h1 className="card-title">{movie.title}</h1>
                                            <h2>Episode: {movie.episode_id}</h2>
                                            <h6 className="card-text">{movie.director}</h6>
                                            <h6>{movie.release_date}</h6>
                                        </div>
                                    </div>
                                </div>
                            })
                        )
                        :
                        (
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

            </div>
        </div>
    )
}


export default Planets;