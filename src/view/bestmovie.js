import React from 'react';
import { Link } from 'react-router-dom';

import './../App.css'
import './../Animated.css'

const Bestmovies = () => {
    return (
        <>
            <div className="container pt-5">
                <div className="row">
                    <div class="card bg-dark text-white w-100">
                        <img class="card-img" src="../img/mandalorian.jpg" alt="Card image" />
                        <div class="card-img-overlay">
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <img src="../img/mandalorian.png" width="100%" className="img-fluid" alt="" />
                                        <p class="card-text text text-justify pt-5">The Mandalorians were an ancient martial order consisting of members from multiple species all bound by a common culture,
                                         creed and code. They originated on the planet Mandalore in the galaxy's Outer Rim and had a particularly unique role in galactic history
                                         as legendary warriors against the Jedi. From their homeworld, Mandalorians had flourished across Mandalorian Space and the galaxy at large,
                                          colonizing worlds such as Kalevala, Krownest, and Concord Dawn.</p>
                                        <Link href=""><p class="card-text text pt-3 text-right text-decoration-none">Keep reading...</p></Link>
                                    </div>
                                    <div className="col-6">
                                        <div className="typewriter m-auto">
                                            
                                            <h1 className="mandalorian">"Mandalorian isn't a race.. It's a Creed."</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Bestmovies;