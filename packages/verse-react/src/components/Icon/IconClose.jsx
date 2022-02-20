import React from 'react';

import close from '@multiverses/verse-icon/icons/svg/base/close.svg';
import PropTypes from 'prop-types';

import { Image } from '../Image';

const IconClose = ({ className, onClick, size }) => {
  return (
    <Image
      className={className}
      height={size}
      onClick={onClick}
      src={close}
      width={size}
    />
  );
};

export default IconClose;

IconClose.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.number,
};

IconClose.defaultProps = {
  className: 'primary-icon',
  onClick: () => null,
  size: 24,
};
