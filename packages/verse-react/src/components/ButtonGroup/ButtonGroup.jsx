import React from 'react';

import PropTypes from 'prop-types';

export const ButtonGroup = ({
  groups,
  onClick,
  activeGroup,
  activeClass,
  inactiveClass,
}) => {
  return (
    <For each="group" index="idx" of={groups}>
      <button
        className={activeGroup.includes(group) ? activeClass : inactiveClass}
        key={`group_${idx}`}
        onClick={() => onClick(group)}
      >
        {group}
      </button>
    </For>
  );
};

ButtonGroup.propTypes = {
  activeClass: PropTypes.string,
  activeGroup: PropTypes.any,
  groups: PropTypes.arrayOf(PropTypes.string),
  inactiveClass: PropTypes.string,
  onClick: PropTypes.func,
};

ButtonGroup.defaultPropTypes = {
  groups: [],
  onClick: () => {},
  activeGroup: [],
};
