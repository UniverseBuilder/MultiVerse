import React from 'react';

import plus from '@multiverses/verse-icon/icons/svg/base/plus.svg';
import PropTypes from 'prop-types';

import { Image } from '../Image';

const IconPlus = ({ className, onClick }) => {
  return <Image className={className} onClick={onClick} src={plus} />;
};

export default IconPlus;

IconPlus.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

IconPlus.defaultProps = {
  className: 'primary-icon',
  onClick: () => null,
};
