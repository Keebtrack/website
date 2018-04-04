import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = (props) => (
    <input
        type="text"
        className="form-control form-control-lg"
        onKeyPress={ props.onChangeHandler }
        placeholder={ props.placeholder }
        onChange={ props.onChangeHandler }
        style={ props.style }
    />
);

SearchBar.propTypes = {
    placeholder: PropTypes.string,
    onChangeHandler: PropTypes.func,
    style: PropTypes.object
};

SearchBar.defaultProps = {
    placeholder: 'search',
    onChangeHandler: () => null,
    style: {}
};

export default SearchBar;