import React from 'react';
import PropTypes from 'prop-types';

const Screen = (props) => {
  const { total, next } = props;
  return <div className="calc-screen">{next || total || 0}</div>;
};
Screen.propTypes = {
  next: PropTypes.string,
  total: PropTypes.string,
};
Screen.defaultProps = {
  next: null,
  total: null,
};

export default Screen;
