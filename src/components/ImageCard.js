import React from 'react';
import PropTypes from 'prop-types';
import { take } from 'ramda';
import Observer from 'react-intersection-observer';

import getCategorie from '@helpers/category';
import countDown from '@helpers/dates';
import shortText from '@helpers/shortText';

const cardStyle = inView => {
  if (inView) {
    return 'card-show';
  }
  return 'card-hide';
};

const Card = ({ groupbuy }) => {
  //remove some of the tags (some people have like 50..)
  const tags = take(4, groupbuy.tags)

  return (
    <Observer key={ groupbuy.name } triggerOnce="true">
      {inView => (
        <div
            onClick={ () => window.open(`${groupbuy.url}`, '_blank') }
            className={ `${cardStyle(inView)} card flex-md-row mb-4 box-shadow h-md-250` }
        >
            <img className="card-img-left flex-auto d-md-block" src={ groupbuy.imgUrl } alt={ shortText(25, groupbuy.name)} />
            <div className="card-body d-flex flex-column align-items-start">
                { getCategorie(groupbuy.category) }
                { countDown(groupbuy.closeDate) }
                <h3 className="mb-0">
                    <a className="text-dark" href="s#">{ groupbuy.name }</a>
                </h3>
                <div className="d-flex align-items-start">
                    { tags.map((tag, idx) => <div key={ `${tag}-${groupbuy.id}-${idx}` } className="p-2 tag-container"><span className="badge badge-secondary">{tag}</span></div>) }
                </div>
                <p className="card-text mb-auto">{ shortText(150, groupbuy.description) }</p>
             </div>
        </div>
      )}
    </Observer>
  );
};

Card.propTypes = {
  groupbuy: PropTypes.object
};

Card.defaultProps = {
  groupbuy: {}
};

export default Card;