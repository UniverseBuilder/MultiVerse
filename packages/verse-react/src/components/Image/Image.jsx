import React from 'react';

import PropTypes from 'prop-types';

export const Image = ({ src, onClick, className, width, height }) => {
  return (
    <img
      className={className}
      height={height}
      onClick={onClick}
      src={src}
      width={width}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  height: PropTypes.number,
  onClick: PropTypes.func,
  type: PropTypes.string,
  width: PropTypes.number,
};

Image.defaultProps = {
  className: 'primary-icon',
  height: 24,
  onClick: () => null,
  type: 'base',
  width: 24,
};
