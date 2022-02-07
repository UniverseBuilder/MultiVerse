import React from 'react';

import PropTypes from 'prop-types';

import { useModel } from '../../utility/hooks';
import { useForm } from '../../utility/redux/slices/forms/formSlice';

export const Profile = ({ model, onClick, children }) => {
  const showContent = useModel(model);
  const { set } = useForm();

  const handleProfileClick = () => {
    set({ model, value: !showContent });
    if (!showContent) {
      onClick(showContent);
    }
  };

  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        showContent,
        handleProfileClick,
      });
    }
    return child;
  });

  return <div className="profile">{childrenWithProps}</div>;
};

Profile.propTypes = {
  children: PropTypes.node.isRequired,
  model: PropTypes.string,
  onClick: PropTypes.func,
};

Profile.defaultProps = {
  controlled: false,
  model: 'profile',
  onClick: () => null,
};
