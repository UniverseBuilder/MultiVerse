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
    <For each="group" of={groups} index="idx">
      <button
        className={activeGroup.includes(group) ? activeClass : inactiveClass}
        onClick={() => onClick(group)}
        key={`group_${idx}`}
      >
        {group}
      </button>
    </For>
  );
};

ButtonGroup.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
  activeGroup: PropTypes.arrayOf(PropTypes.string),
  activeClass: PropTypes.string,
  inactiveClass: PropTypes.string,
};

ButtonGroup.defaultPropTypes = {
  groups: [],
  onClick: () => {},
  activeGroup: [],
};
