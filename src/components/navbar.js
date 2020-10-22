import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
   return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 text-white-50">
                        <span>
                            <i className="fab fa-facebook fa-1x px-2"></i>
                            <i className="fab fa-instagram fa-1x px-2"></i>
                            <i className="fab fa-tumblr fa-1x px-2"></i>
                            <i className="fab fa-twitter fa-1x px-2"></i>
                            <i className="fab fa-youtube fa-1x px-2"></i>
                        </span>
                    </div>
                    <div className="col-6 text-center">
                        <Link to="/"><img src={process.env.REACT_APP_STARWARS_BUCKET_URL+"img/logo.png"} width="200" alt="" /></Link>
                    </div>
                    <div className="col-3">
                        <nav className="navbar navbar-light float-right bg-transparent">
                            <form className="form-inline">
                                <input className="form-control border-0 bg-dark mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            </form>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="container pt-4">
                <ul className="text-white-50 d-flex list-unstyled text-center">
                    <li className="col-md-2 border-first" id="grad1">
                        <Link to="/Movies"><img className="pt-3 img-fluid" src={process.env.REACT_APP_STARWARS_BUCKET_URL+"jedi.png"} width="35" alt="" /></Link>
                    </li>
                    <li className="col-md-2 border-middle">
                        <Link to="/People"><img className="pt-3 img-fluid" src={process.env.REACT_APP_STARWARS_BUCKET_URL+"droid.png"} width="35" alt="" /></Link>
                    </li>
                    <li className="col-md-2 border-middle">
                        <Link to="/Vehicle"><img className="pt-3 img-fluid" src={process.env.REACT_APP_STARWARS_BUCKET_URL+"ship.png"} width="35" alt="" /></Link>
                    </li>
                    <li className="col-md-2 border-middle">
                        <Link to="StarShips"><img className="pt-3 img-fluid" src={process.env.REACT_APP_STARWARS_BUCKET_URL+"starships.png"} width="35" alt="" /></Link>
                        </li>
                    <li className="col-md-2 border-middle"><img className="pt-3 img-fluid" src={process.env.REACT_APP_STARWARS_BUCKET_URL+"species.png"} width="35" alt="" /></li>

                    <li className="col-md-2 border-last" id="grad2" ><img className="pt-3 img-fluid" src={process.env.REACT_APP_STARWARS_BUCKET_URL+"death_star.png"} width="35" alt="" /></li>
                </ul>
            </div>
        </>
    );
}
export default NavBar;