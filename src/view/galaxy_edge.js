import React from 'react';
import { Link } from 'react-router-dom';


const Galaxy = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <img src="../galaxy_edge.png" className="w-100 img-fluid" alt="" />
                </div>
                <div className="col-6 p-0">
                    <div class="card bg-transparent text-white w-100  zoom">
                        <img class="card-img" src="../img/phanton.jpg" alt="Card image" />
                        <div class="card-img-overlay">
                            <p class="card-text text text-justify pt-5">The Mandalorians were an ancient martial order consisting of members from multiple species all bound by a common culture,
                                             creed and code. They originated on the planet Mandalore in the galaxy's Outer Rim and had a particularly unique role in galactic history
                                             as legendary warriors against the Jedi. From their homeworld, Mandalorians had flourished across Mandalorian Space and the galaxy at large,
                                          colonizing worlds such as Kalevala, Krownest, and Concord Dawn.</p>
                            <Link href=""><p class="card-text text pt-3 text-right text-decoration-none">Keep reading...</p></Link>
                        </div>
                    </div>
                </div>
                <div className="col-6 p-0">
                    <div className="bg-img">
                    <img class="zoom" src="../img/phanton.jpg" width="100" alt="Card image" />
                    <div class="card bg-transparent text-white w-100 zoom">
                        
                        {/* <div class="card-img-overlay">
                            <p class="card-text text text-justify">
                                The Mandalorians were an ancient martial order consisting of members from multiple species all bound by a common culture,
                                creed and code. They originated on the planet Mandalore in the galaxy's Outer Rim and had a particularly unique role in galactic history
                                as legendary warriors against the Jedi. From their homeworld, Mandalorians had flourished across Mandalorian Space and the galaxy at large,
                                colonizing worlds such as Kalevala, Krownest, and Concord Dawn.
                            </p>
                        </div> */}
                    </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Galaxy;