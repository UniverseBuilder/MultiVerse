import React from 'react';

import PropTypes from 'prop-types';

export const ProfileContent = ({ children, showContent }) => {
  if (!showContent) {
    return null;
  }
  return <div className="profile-content primary-outline">{children}</div>;
};

ProfileContent.propTypes = {
  children: PropTypes.node,
  showContent: PropTypes.bool,
};

ProfileContent.defaultProps = {
  showContent: false,
};
