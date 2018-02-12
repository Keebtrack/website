import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
  <button onClick={ props.onClickHandler }>click me!</button>
);

Button.propTypes = {
    onClickHandler: PropTypes.func
};

Button.defaultProps = {
    onClickHandler: () => null
};

export default Button;