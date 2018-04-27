import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';

import VendorCard from '@components/VendorCard';

class Vendors extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        {
          !data.loading
          &&
          <Fragment>
            <div className="card-deck">
              <div className="row">
                  { data.vendors.map((vendor, idx) =>
                    <VendorCard key={ `${vendor.id}-${idx}` } vendor={ vendor } />)
                  }
              </div>
            </div>
         </Fragment>
        }
      </div>
    );
  }
}

const VENDORS_QUERY = gql`
  {
     vendors {
          id
          name
          region
          description
          logoUrl
          url
    }
  }
`;

Vendors.propTypes = {
  data: PropTypes.object
};

Vendors.defaultProps = {
  data: { results: [], loading: true }
};

export default compose(graphql(VENDORS_QUERY, {
  options: {},
}))(Vendors);