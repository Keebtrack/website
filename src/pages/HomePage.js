import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';
import InfiniteScroll from 'react-infinite-scroller';

import Card from '@components/Card';
import Promo from '@components/Promo';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.fetchMore = this.fetchMore.bind(this);
    this.state = {

    };
  }

  fetchMore() {
    const { after } = this.props.data.groupbuys.pageInfo;
    this.props.data.fetchMore({
      variables: { first: 3, after },
      updateQuery: ({ groupbuys }, { fetchMoreResult: { groupbuys: newGroupbuys } }) => ({
        groupbuys: {
          __typename: groupbuys.__typename,
          pageInfo: newGroupbuys.pageInfo,
          results: [...groupbuys.results, ...newGroupbuys.results],
        }
      })
    });
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        {
          !data.loading
          &&
          <Fragment>
          <Promo groupbuy={ data.groupbuys.results[0] } />
          <InfiniteScroll loadMore={ this.fetchMore } hasMore={ data.groupbuys.pageInfo.hasNext }>
            { data.groupbuys.results.map((groupbuy, idx) =>
              <Card key={ `${groupbuy.id}-${idx}` } groupbuy={ groupbuy } />)
            }
          </InfiniteScroll>
         </Fragment>
        }
      </div>
    );
  }
}

const GROUPBUYS_QUERY = gql`
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
            url
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

export default compose(graphql(GROUPBUYS_QUERY, {
  options: {
    variables: {
      first: 3,
      after: ''
    }
  },
}))(HomePage);