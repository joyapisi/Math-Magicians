import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { total, next } = props;
  return <div className="calc-screen">{next || total || 0}</div>;
};
Display.propTypes = {
  next: PropTypes.string,
  total: PropTypes.string,
};
Display.defaultProps = {
  next: null,
  total: null,
};

export default Display;
