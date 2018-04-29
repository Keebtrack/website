import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';
import InfiniteScroll from 'react-infinite-scroller';

import ImageCard from '@components/ImageCard';
import Promo from '@components/Promo';
import SecondaryPromo from '@components/SecondaryPromo';
import ButtonFilter from '@components/ButtonFilter';

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
      variables: { first: 10, after },
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
          <div className="row mb-2">
            <SecondaryPromo groupbuy={ data.groupbuys.results[1] } />
            <SecondaryPromo groupbuy={ data.groupbuys.results[2] } />
          </div>
           <h3 className="pb-3 mb-4 font-italic border-bottom">
            Active Group Buys
          </h3>
          <Fragment>
            <ButtonFilter
              categories={ [{ name: 'Keyboards', count: 5 }, { name: 'Artisan', count: 3 }, { name: 'Keycaps', count: 8 }, { name: 'Parts', count: 7 }] }
              tags={ ['60%', 'TKL', 'GMK', 'MITO', 'SA', 'Duck', '66%', 'MaxKey', 'Split', 'Ortho', 'WKL', 'Small', 'numpad', 'Massdrop'] }
            />
          </Fragment>
            {/* <SearchBar style={ { marginBottom: 15 } } /> */}
          <InfiniteScroll loadMore={ this.fetchMore } hasMore={ data.groupbuys.pageInfo.hasNext }>
            { data.groupbuys.results.map((groupbuy, idx) =>
              <ImageCard key={ `${groupbuy.id}-${idx}` } groupbuy={ groupbuy } />)
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
      first: 10,
      after: ''
    }
  },
}))(HomePage);