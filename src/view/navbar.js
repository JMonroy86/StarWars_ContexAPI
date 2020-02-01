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
                            <i class="fab fa-tumblr fa-1x px-2"></i>
                            <i className="fab fa-twitter fa-1x px-2"></i>
                            <i className="fab fa-youtube fa-1x px-2"></i>
                        </span>
                    </div>
                    <div className="col-6 text-center">
                        <img src="../img/logo.png" width="200" alt="" />
                    </div>
                    <div className="col-3">
                        <nav className="navbar navbar-light float-right bg-transparent">
                            <form className="form-inline">
                                <input className="form-control border-0 bg-dark mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="container pt-4">
                <ul className="text-white-50 d-flex list-unstyled text-center">
                    <li className="col-md-2 border-first" id="grad1"><img className="pt-3 img-fluid" src="../death_star.png" width="35" alt=""/></li>
                    <li className="col-md-2 border-middle"><img className="pt-3 img-fluid" src="../droid.png" width="35" alt=""/></li>
                    <li className="col-md-2 border-middle"><img className="pt-3 img-fluid" src="../ship.png" width="35" alt=""/></li>
                    <li className="col-md-2 border-middle"><img className="pt-3 img-fluid" src="../starships.png" width="35" alt=""/></li>
                    <li className="col-md-2 border-middle"><img className="pt-3 img-fluid" src="../species.png" width="35" alt=""/></li>
                    
                    <li className="col-md-2 border-last" id="grad2" ><img className="pt-3 img-fluid" src="../jedi.png" width="35" alt=""/></li>
                </ul>
            </div>
        </>
    );
}
export default NavBar;