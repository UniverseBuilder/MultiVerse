import React from 'react';

import PropTypes from 'prop-types';

import { useForm } from '../../utility/redux/slices/forms/formSlice';
import IconClose from '../Icon/IconClose';

export const Tabs = ({ tabs, activeTab, tabName, model, onTabDelete }) => {
  const { set } = useForm();
  const handleTabSelect = tabIndex => {
    set({ model, value: tabIndex });
  };
  const handleTabDelete = tabIndex => {
    onTabDelete(tabIndex);
  };
  return (
    <div className="tabs flex">
      <For each="tab" index="idx" of={tabs}>
        <div className="flex-100" key={idx}>
          <div className="tabs-title">
            <div
              className={`flex flex-center p-x-8 ${
                activeTab === idx + 1 ? 'primary' : 'primary-outline'
              }`}
              onClick={() => handleTabSelect(idx + 1)}
            >
              <div className="flex-80">{tab[tabName] || tab}</div>
              <div className="flex-20 text-right">
                <IconClose onClick={() => handleTabDelete(idx + 1)} />
              </div>
            </div>
          </div>
        </div>
      </For>
    </div>
  );
};

Tabs.propTypes = {
  model: PropTypes.string.isRequired,
  activeTab: PropTypes.number,
  children: PropTypes.node,
  onTabDelete: PropTypes.func,
  tabName: PropTypes.string,
  tabs: PropTypes.array,
};

Tabs.defaultProps = {
  activeTab: 1,
  children: null,
  onTabDelete: () => null,
};

export default Tabs;
