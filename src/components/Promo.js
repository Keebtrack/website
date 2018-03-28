import React from 'react';
import PropTypes from 'prop-types';

const Promo = ({ groupbuy }) => (
    <div
      style={ { backgroundSize: '100%', backgroundImage: `linear-gradient( rgba(33, 33, 33, 0.35), rgba(33, 33, 33, 0.35)), url(${groupbuy.imgUrl})` } }
      className="jumbotron p-3 p-md-5 text-white rounded bg-dark"
    >
      <div className="col-md-6 px-0">
        <h1 className="display-4 font-italic">{groupbuy.name}</h1>
        <p className="lead my-3">{groupbuy.description}</p>
        <p className="lead mb-0">
        <a href="#" className="p-2 btn btn-primary">Goto Website</a>
        </p>
      </div>
    </div>
);

Promo.propTypes = {
  groupbuy: PropTypes.object
};

Promo.defaultProps = {
  groupbuy: {}
};

export default Promo;