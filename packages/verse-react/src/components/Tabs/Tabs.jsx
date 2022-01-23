import React from "react";

import PropTypes from "prop-types";

export const Tabs = ({ tabs, activateTab, activeTab }) => {
  const onClick = (idx) => {
    activateTab(idx);
  };
  return (
    <ul className="nav nav-tabs">
      <For each="tab" index="idx" of={tabs}>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === idx ? "active" : "disabled"}`}
            href="#"
            onClick={() => onClick(idx)}
          >
            {tab}
          </a>
        </li>
      </For>
    </ul>
  );
};

Tabs.propTypes = {
  activateTab: PropTypes.func,
  activeTab: PropTypes.number,
  tabs: PropTypes.arrayOf(PropTypes.shape({})),
};

Tabs.defaultProps = {
  activateTab: () => 0,
  activeTab: 0,
  tabs: [],
};
