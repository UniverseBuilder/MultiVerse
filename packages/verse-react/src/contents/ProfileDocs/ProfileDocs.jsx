import React from 'react';

import { Profile } from 'components/Profile';

export const ProfileDocs = () => {
  return (
    <Profile>
      <Profile.Text fullName="B Shankar Krishna" />
      <Profile.Content>ABCDEFGHIJKMNOPQRS</Profile.Content>
    </Profile>
  );
};
