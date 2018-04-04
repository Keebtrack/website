import React from 'react';
import PropTypes from 'prop-types';
import { take } from 'ramda';

const Promo = ({ groupbuy }) => (
    <div
      style={ {
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        backgroundImage: `linear-gradient( rgba(33, 33, 33, 0.30), rgba(33, 33, 33, 0.30)), url(${groupbuy.imgUrl})`
      } }
      className="jumbotron p-3 p-md-5 text-white rounded bg-dark"
    >
      <div className="col-md-6 px-0">
        <h1 className="display-4 font-italic">{groupbuy.name}</h1>
        { window.innerWidth < 780 ? null : <p className="lead my-3">{ `${take(100, groupbuy.description)}..` }</p> }
        <p className="lead mb-0">
        <a href="#" onClick={ () => window.open(`${groupbuy.url}`, '_blank') } className="p-2 btn btn-primary">Visit now</a>
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