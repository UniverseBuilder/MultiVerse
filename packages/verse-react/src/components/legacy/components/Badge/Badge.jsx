import React from "react";
import PropTypes from "prop-types";
import "./Badge.scss";

export const Badge = ({
  badgeLabel,
  badgeIndex,
  onClose,
  isDraggable,
}) => {

  const onDragStart = (ev, id) => {
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
        className={`fa fa-times close-icon`}
        aria-hidden="true"
        onClick={() => onClose(badgeLabel, badgeIndex)}
      />
    </span>
  );
};

Badge.propTypes = {
  badgeLabel: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  isDraggable: PropTypes.bool,
  onDrop: PropTypes.func,
  badgeIndex: PropTypes.number,
};

Badge.defaultProps = {
  onClose: () => {},
  isDraggable: true,
  badgeIndex: 0,
};
