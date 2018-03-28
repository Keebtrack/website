import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';

import Card from '@components/Card';
import Promo from '@components/Promo';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    const { data } = this.props;
    return (
      <div>
        { data.loading
          ?
            <div>loading</div>
          :
            <Fragment>
              <Promo groupbuy={ data.groupbuys.results[2] } />
              { data.groupbuys.results.map(groupbuy => <Card groupbuy={ groupbuy } />) }
            </Fragment>
        }
      </div>
    );
  }
}

const GET_CANDIDATES = gql`
    query search($first: Int!, $after: String) {
        groupbuys(first: $first, after: $after) {
           pageInfo {
            hasNext
            after
           }
           results {
            name
            imgUrl
            description
            tags
            openDate
            closeDate
            category
           }
        }
    }
`;

HomePage.propTypes = {
  data: PropTypes.object
};

HomePage.defaultProps = {
  data: { results: [], loading: true }
};

export default compose(graphql(GET_CANDIDATES, {
  options: {
    variables: {
      first: 10,
      after: ''
    }
  },
}))(HomePage);