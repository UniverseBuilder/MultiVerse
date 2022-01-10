import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export const SideNavigation = ({ contents }) => {
  return (
    <div className="sidenav h-100VH">
      <div>
        <For each="content" of={contents} index="idx">
          <div key={idx}>
            <NavLink to={content} className="btn-block secondary">
              {content}
            </NavLink>
          </div>
        </For>
      </div>
    </div>
  );
};

SideNavigation.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.string),
};

SideNavigation.defaultProps = {
  contents: [],
};
