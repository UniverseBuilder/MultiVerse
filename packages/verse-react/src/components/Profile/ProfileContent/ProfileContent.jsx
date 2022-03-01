import React from 'react';

import PropTypes from 'prop-types';

export const ProfileContent = ({ position, children, showContent }) => {
  if (!showContent) {
    return null;
  }
  return (
    <div className={`profile-content primary-outline ${position}`}>
      {children}
    </div>
  );
};

ProfileContent.propTypes = {
  children: PropTypes.node,
  position: PropTypes.string,
  showContent: PropTypes.any,
};

ProfileContent.defaultProps = {
  position: '',
  showContent: false,
};
