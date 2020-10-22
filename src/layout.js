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
import Vehicle from './view/vehicles';
import StarShips from './view/starships.js';
import injectContext from './store/appContext';
import NavBar from './components/navbar';

const Layout = () => {
    return (
        <BrowserRouter>
            <NavBar />
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