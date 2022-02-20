import React from 'react';

import close from '@multiverses/verse-icon/icons/svg/base/close.svg';
import PropTypes from 'prop-types';

import { Image } from '../Image';

const IconClose = ({ className, onClick }) => {
  return <Image className={className} onClick={onClick} src={close} />;
};

export default IconClose;

IconClose.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

IconClose.defaultProps = {
  className: 'primary-icon',
  onClick: () => null,
};
