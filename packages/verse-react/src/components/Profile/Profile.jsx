import React from 'react';

import PropTypes from 'prop-types';

import { getInitials } from '../../utility/functions/stringParsers';

export const Profile = ({ className, radius, initials, fullName }) => {
  let profileText = initials;
  if (fullName) {
    profileText = getInitials(fullName);
  }
  return (
    <div className="profile">
      <div className="profile-pricture">
        <div className={`${className} r-${radius}`}>{profileText}</div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
  fullName: PropTypes.string,
  initials: PropTypes.string,
  radius: PropTypes.number,
};

Profile.defaultProps = {
  className: 'primary f-1 fb-600 flex-center',
  fullName: 'Balasundaram   Shankar',
  initials: '',
  radius: 52,
};
