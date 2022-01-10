import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export const SideNavigation = ({ contents }) => {
  return (
    <div className="sidenav h-100VH">
      <For each="content" of={contents} index="idx">
        <div key={idx}>
          <NavLink
            to="/"
            className="sidenavlink"
            activeClassName="active-sidenavlink"
          >
            {content}
          </NavLink>
        </div>
      </For>
    </div>
  );
};

SideNavigation.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.string),
};

SideNavigation.defaultProps = {
  contents: [],
};
