import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

const Navbar = () => (
  <Fragment>
        <header className="blog-header py-3">
            <div className="text-center">
                <Link className="blog-header-logo text-dark" to="/">⌘keebtrack</Link>
            </div>
        </header>
        <div className="nav-scroller">
            <nav className="nav d-flex justify-content-between">
             <Link className="p-2 text-muted" to="/meetups">Meetups</Link>
             <Link className="p-2 text-muted" to="/vendors">Vendors</Link>
             <Link className="p-2 text-muted" to="/interestchecks">Interest Checks</Link>
             <Link className="p-2 text-muted" to="/calendar">Calendar</Link>
             <Link className="p-2 text-muted" to="/FAQ">FAQ</Link>
             <Link className="p-2 btn btn-sm btn-outline-success" to="/sponsor">Become a Sponsor</Link>
            </nav>
        </div>
    </Fragment>
);

Navbar.propTypes = {
  // onClickHandler: PropTypes.func
};

Navbar.defaultProps = {
  // onClickHandler: () => null
};

export default Navbar;