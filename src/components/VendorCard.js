import React from 'react';
import PropTypes from 'prop-types';
import { take } from 'ramda';

import region from '@helpers/region';


const VendorCard = ({ vendor }) => (
  <div className="col-sm-6 col-md-4 col-lg-3">
    <div
        onClick={ () => window.open(`${vendor.url}`, '_blank') }
        className="card vendor-card"
    >
      <img className="card-img-top" src={ vendor.logoUrl } alt={ vendor.name } />
      <div className="card-body">
        <h5 className="card-title">{vendor.name}</h5>
        {region(vendor.region)}
        <p className="card-text">{`${take(80, vendor.description)}..`}.</p>
      </div>
    </div>
  </div>
);

VendorCard.propTypes = {
  vendor: PropTypes.object
};

VendorCard.defaultProps = {
  vendor: {}
};

export default VendorCard;