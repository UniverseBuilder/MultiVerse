import React from 'react';

import PropTypes from 'prop-types';

import Title from './Title';

export const Tabs = ({ tabs, activeTab, model, onTabDelete }) => {
  return (
    <div className="tabs flex">
      <For each="tab" index="idx" of={tabs}>
        <Title
          activeTab={activeTab}
          key={idx}
          model={model}
          onTabDelete={onTabDelete}
          tab={tab}
          tabIndex={idx + 1}
        />
      </For>
    </div>
  );
};

Tabs.propTypes = {
  model: PropTypes.string.isRequired,
  activeTab: PropTypes.number,
  children: PropTypes.node,
  onTabDelete: PropTypes.func,
  tabs: PropTypes.array,
};

Tabs.defaultProps = {
  activeTab: 1,
  children: null,
  onTabDelete: () => null,
};

export default Tabs;
