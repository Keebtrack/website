import React from 'react';
import PropTypes from 'prop-types';

const getColor = category => {
  switch (category) {
    case 'Keycaps':
      return 'btn-primary';
    case 'Keyboards':
      return 'btn-success';
    case 'Parts':
      return 'btn-warning';
    case 'Artisan':
      return 'btn-danger';
    default:
      return 'btn-default';
  }
};

const ButtonFilter = ({ categories, tags }) => (
  <div style={ { marginBottom: 15 } }>
    <div className="row">
        <div className="col-sm-2"><h4>Categories:</h4></div>
        <div className="col-sm-10">
            <div style={ { marginBottom: 15 } } className="d-flex justify-content-around">
                {
                    categories.map(category => (
                            <button type="button" className={ `btn ${getColor(category.name)}` }>
                                {category.name} <span className="badge badge-light">{category.count}</span>
                            </button>
                        ))
                }
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-sm-2"><h4>Tags:</h4></div>
        <div className="col-sm-10">
            <div style={ { marginBottom: 15 } } className="d-flex justify-content-around">
                {
                    tags.map(tag => (<span className="badge badge-dark">{tag}</span>))
                }
            </div>
        </div>
    </div>
    </div>
);


ButtonFilter.propTypes = {
  categories: PropTypes.array,
  tags: PropTypes.array
};

ButtonFilter.defaultProps = {
  categories: [],
  tags: []
};

export default ButtonFilter;