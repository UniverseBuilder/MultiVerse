import React from "react";
import PropTypes from "prop-types";

export const Tabs = ({ tabs, activateTab, activeTab }) => {
  const onClick = (idx) => {
    activateTab(idx);
  };
  return (
    <ul className="nav nav-tabs">
      <For each="tab" of={tabs} index="idx">
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
  tabs: PropTypes.arrayOf(PropTypes.shape({})),
  activateTab: PropTypes.func,
  activeTab: PropTypes.number,
};

Tabs.defaultProps = {
  tabs: [],
  activateTab: () => 0,
  activeTab: 0,
};
