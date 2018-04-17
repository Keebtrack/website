import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

// TODO add span with stats -> <span className="badge badge-pill badge-dark">11</span>

const Navbar = () => (
  <Fragment>
        <header className="blog-header py-3">
            <div className="text-center">
                <Link className="blog-header-logo text-dark" to="/">⌘keebtrack</Link>
            </div>
        </header>
        <div className="nav-scroller">
            <nav className="nav d-flex justify-content-between">
             <Link className="p-2 text-muted" to="/groupbuys">Group buys</Link>
             {/* <Link className="p-2 text-muted" to="/interestchecks">Interest Checks</Link>
             <Link className="p-2 text-muted" to="/meetups">Meetups</Link> */}
             <Link className="p-2 text-muted" to="/vendors">Vendors</Link>
             {
                window.innerWidth < 780 ? null : // fix this
                <Fragment>
                    <Link className="p-2 text-muted" to="/calendar">Calendar</Link>
                    {/* <Link className="p-2 btn btn-sm btn-outline-success"
                         to="/sponsor">Become a Sponsor</Link> */}
                </Fragment>
             }
            <Link className="p-2 text-muted" to="/FAQ">FAQ</Link>
            </nav>
        </div>
    </Fragment>
);

Navbar.propTypes = {
};

Navbar.defaultProps = {
};

export default Navbar;