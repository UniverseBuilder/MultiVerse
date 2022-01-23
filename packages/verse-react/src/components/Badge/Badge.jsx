import React from "react";

import PropTypes from "prop-types";

export const Badge = ({
  badgeLabel,
  badgeIndex,
  onClose,
  isDraggable,
}) => {

  const onDragStart = (ev) => {
    if (isDraggable) {
      ev.dataTransfer.setData("id", `${badgeLabel}`);
    }
  };

  return (
    <span
      className="badge"
      draggable={isDraggable}
      onDragStart={(ev) => onDragStart(ev, badgeLabel)}
    >
      {badgeLabel}
      <i
        aria-hidden="true"
        className={`fa fa-times close-icon`}
        onClick={() => onClose(badgeLabel, badgeIndex)}
      />
    </span>
  );
};

Badge.propTypes = {
  badgeLabel: PropTypes.string.isRequired,
  badgeIndex: PropTypes.number,
  isDraggable: PropTypes.bool,
  onClose: PropTypes.func,
  onDrop: PropTypes.func,
};

Badge.defaultProps = {
  badgeIndex: 0,
  isDraggable: true,
  onClose: () => {},
};
