import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import FAQ from '@pages/FAQ';
import HomePage from '@pages/HomePage';
import Meetups from '@pages/Meetups';
import Vendors from '@pages/Vendors';
import InterestChecks from '@pages/InterestChecks';
import Sponsor from '@pages/Sponsor';
import Calendar from '@pages/Calendar';

import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

const App = () => (
    <Fragment>
        <div className="container">
            <Navbar />
            <Switch>
                <Route path="/FAQ" component={ FAQ } />
                <Route path="/meetups" component={ Meetups } />
                <Route path="/vendors" component={ Vendors } />
                <Route path="/interestchecks" component={ InterestChecks } />
                <Route path="/sponsor" component={ Sponsor } />
                <Route path="/calendar" component={ Calendar } />
                <Route path="/" component={ HomePage } />
            </Switch>
        </div>
        <Footer />
    </Fragment>
);

export default App;