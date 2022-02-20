import React from 'react';

import filter from '@multiverses/verse-icon/icons/svg/base/filter.svg';
import PropTypes from 'prop-types';

import { Image } from '../Image';

const IconFilter = ({ className, onClick }) => {
  return <Image className={className} onClick={onClick} src={filter} />;
};

export default IconFilter;

IconFilter.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

IconFilter.defaultProps = {
  className: 'primary-icon',
  onClick: () => null,
};
