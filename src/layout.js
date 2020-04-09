import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
//import 'font-awesome/css/font-awesome.min.css'; // 4.x
import '@fortawesome/fontawesome-free/css/all.css'; // 5.x


// Add js files
import 'jquery';
import 'popper.js';
import 'bootstrap';


import Home from './view/home';

import Notfound from './view/notFound';
import Movies from './view/movies';
import People from './view/people';
import Planets from './view/planets';
import Vehicle from './view/vehicules';
import StarShips from './view/starships.js';
import injectContext from './store/appContext';

const Layout = () => {
    return (
        <BrowserRouter>
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
                        <Link to="/"><img src="../img/logo.png" width="200" alt="" /></Link>
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
                    <li className="col-md-2 border-first" id="grad1">
                        <Link to="/Movies"><img className="pt-3 img-fluid" src="../jedi.png" width="35" alt="" /></Link>
                    </li>
                    <li className="col-md-2 border-middle">
                        <Link to="/People"><img className="pt-3 img-fluid" src="../droid.png" width="35" alt="" /></Link>
                    </li>
                    <li className="col-md-2 border-middle">
                        <Link to="/Vehicle"><img className="pt-3 img-fluid" src="../ship.png" width="35" alt="" /></Link>
                    </li>
                    <li className="col-md-2 border-middle">
                        <Link to="StarShips"><img className="pt-3 img-fluid" src="../starships.png" width="35" alt="" /></Link>
                        </li>
                    <li className="col-md-2 border-middle"><img className="pt-3 img-fluid" src="../species.png" width="35" alt="" /></li>

                    <li className="col-md-2 border-last" id="grad2" ><img className="pt-3 img-fluid" src="../death_star.png" width="35" alt="" /></li>
                </ul>
            </div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Movies" component={Movies} />
                <Route exact path="/People" component={People} />
                <Route exact path="/Planets" component={Planets} />
                <Route exact path="/Vehicle" component={Vehicle} />
                <Route exact path="/StarShips" component={StarShips} />
                <Route component={Notfound} />
            </Switch>
        </BrowserRouter>
    );
}

export default injectContext(Layout);