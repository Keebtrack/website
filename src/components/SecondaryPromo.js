import React from 'react';
import PropTypes from 'prop-types';
import { take } from 'ramda';

import getCategorie from '@helpers/category';
import getDates from '@helpers/dates';

const SecondaryPromo = ({ groupbuy }) => (
  <div className="col-md-6">
    <div className="card flex-md-row mb-4 box-shadow h-md-250">
      <div className="card-body d-flex flex-column align-items-start">
        <strong className="d-inline-block mb-2 text-primary">  { getCategorie(groupbuy.category) }</strong>
        <h3 className="mb-0">
          <a className="text-dark" href="#">{groupbuy.name}</a>
        </h3>
        { getDates(groupbuy.openDate, groupbuy.closeDate) }
        <p className="card-text mb-auto">{ `${take(75, groupbuy.description)}..` }</p>
      </div>
      <img className="card-img-right flex-auto d-none d-md-block" src={ groupbuy.imgUrl } alt={ groupbuy.name } />
    </div>
  </div>
);

SecondaryPromo.propTypes = {
  groupbuy: PropTypes.object
};

SecondaryPromo.defaultProps = {
  groupbuy: {}
};

export default SecondaryPromo;