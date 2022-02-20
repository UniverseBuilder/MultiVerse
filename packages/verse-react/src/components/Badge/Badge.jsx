import React from 'react';

import PropTypes from 'prop-types';

export const Badge = ({
  badgeLabel,
  badgeIndex,
  onClose,
  isDraggable,
  children,
  title,
}) => {
  const onDragStart = ev => {
    if (isDraggable) {
      ev.dataTransfer.setData('id', `${badgeLabel}`);
    }
  };

  return (
    <span
      className="badge m-r-4"
      draggable={isDraggable}
      onClick={() => onClose(badgeLabel, badgeIndex)}
      onDragStart={ev => onDragStart(ev, badgeLabel)}
      title={title}
    >
      <span>{children}</span>
    </span>
  );
};

Badge.propTypes = {
  badgeLabel: PropTypes.string.isRequired,
  badgeIndex: PropTypes.number,
  children: PropTypes.node,
  isDraggable: PropTypes.bool,
  onClose: PropTypes.func,
  onDrop: PropTypes.func,
  title: PropTypes.string,
};

Badge.defaultProps = {
  badgeIndex: 0,
  isDraggable: true,
  onClose: () => {},
  title: '',
};
