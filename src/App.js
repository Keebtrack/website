import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import FAQPage from '@pages/FAQPage';
import HomePage from '@pages/HomePage';

import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

const App = () => (
    <Fragment>
        <div className="container">
            <Navbar />
            <Switch>
                <Route path="/FAQ" component={ FAQPage } />
                <Route path="/" component={ HomePage } />
            </Switch>
        </div>
        <Footer />
    </Fragment>
);

export default App;