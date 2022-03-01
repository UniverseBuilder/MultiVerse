import React from 'react';

import PropTypes from 'prop-types';

import { useForm } from '../../utility/redux/slices/forms/formSlice';
import IconClose from '../Icon/IconClose';

const Title = ({ activeTab, tab, tabIndex, onTabDelete, model }) => {
  const { set } = useForm();
  const handleTabSelect = () => {
    set({ model, value: tabIndex });
  };
  const handleTabDelete = () => {
    onTabDelete(tabIndex);
  };
  return (
    <div className="flex-100">
      <div className="tabs-title">
        <div
          className={`flex flex-center p-x-8 ${
            activeTab === tabIndex ? 'primary' : 'primary-outline'
          }`}
          onClick={handleTabSelect}
        >
          <div className="flex-80">{tab}</div>
          <div className="flex-20 text-right">
            <IconClose onCLick={handleTabDelete} />
          </div>
        </div>
      </div>
    </div>
  );
};

Title.propTypes = {
  onTabDelete: PropTypes.func.isRequired,
  activeTab: PropTypes.string,
  children: PropTypes.node,
  model: PropTypes.string,
  tab: PropTypes.any,
  tabIndex: PropTypes.any,
};

Title.defaultProps = {
  children: null,
  tabIndex: 1,
};

export default Title;
