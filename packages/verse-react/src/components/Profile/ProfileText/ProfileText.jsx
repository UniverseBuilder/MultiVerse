import React from 'react';

import PropTypes from 'prop-types';

import { getInitials } from '../../../utility/functions/stringParsers';

export const ProfileText = ({
  className,
  radius,
  fullName,
  initials,
  handleProfileClick,
}) => {
  let profileText = initials;
  if (fullName) {
    profileText = getInitials(fullName);
  }
  return (
    <div className="profile-picture">
      <div
        className={`${className} r-${radius}`}
        onClick={handleProfileClick}
        role="button"
      >
        {profileText}
      </div>
    </div>
  );
};

ProfileText.propTypes = {
  className: PropTypes.string,
  fullName: PropTypes.string,
  handleProfileClick: PropTypes.func,
  initials: PropTypes.string,
  radius: PropTypes.number,
};

ProfileText.defaultProps = {
  className: 'primary f-1 fb-600 flex-center c-pointer',
  fullName: '',
  initials: '',
  radius: 52,
};
