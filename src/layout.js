import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
//import 'font-awesome/css/font-awesome.min.css'; // 4.x
import '@fortawesome/fontawesome-free/css/all.css'; // 5.x


// Add js files
import 'jquery';
import 'popper.js';
import 'bootstrap';


import Home from './view/home';
import Service from './view/services';
import Contact from './view/contact';
import Notfound from './view/notFound';
import NavBar from './view/navbar';

const Layout = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Service" component={Service} />
                <Route exact path="/Contact" component={Contact} />
                <Route component={Notfound} />
            </Switch>
        </BrowserRouter>
    );
}

export default Layout;