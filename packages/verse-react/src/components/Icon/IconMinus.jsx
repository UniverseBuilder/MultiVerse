import React from 'react';

import minus from '@multiverses/verse-icon/icons/svg/base/minus.svg';
import PropTypes from 'prop-types';

import { Image } from '../Image';

const IconPlus = ({ className, onClick }) => {
  return <Image className={className} onClick={onClick} src={minus} />;
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
