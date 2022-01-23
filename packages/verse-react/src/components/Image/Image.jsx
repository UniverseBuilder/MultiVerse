import React from 'react';

import PropTypes from 'prop-types';

export const Image = ({ alt, className, src }) => {
  return <img alt={alt} className={className} src={src} />;
};

Image.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.string,
};
