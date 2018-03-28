import React from 'react';
import PropTypes from 'prop-types';
import { take } from 'ramda';

import getCategorie from '@helpers/category';
import getDates from '@helpers/dates';

const Card = ({ groupbuy }) => (
  <div className="card flex-md-row mb-4 box-shadow h-md-250">
      <img className="card-img-left flex-auto d-none d-md-block" src={ groupbuy.imgUrl } alt={ groupbuy.name } />
      <div className="card-body d-flex flex-column align-items-start">
        { getCategorie(groupbuy.category) }
        { getDates(groupbuy.openDate, groupbuy.closeDate) }
        <h3 className="mb-0">
            <a className="text-dark" href="#">{ groupbuy.name }</a>
        </h3>
        <div className="d-flex align-items-start">
            { groupbuy.tags.map(tag => <div className="p-2 tag-container"><span key={ tag } className="badge badge-secondary">{tag}</span></div>) }
        </div>
        <p className="card-text mb-auto">{ `${take(60, groupbuy.description)}..` }</p>
        <div style={ { width: '100%' } } className="d-flex justify-content-end">
            <a href="#" className="p-2 btn btn-primary">Website</a>
        </div>
        </div>
    </div>
);

Card.propTypes = {
  groupbuy: PropTypes.object
};

Card.defaultProps = {
  groupbuy: {}
};

export default Card;