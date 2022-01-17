import React from "react";

import PropTypes from "prop-types";

export const DropdownItem = ({ children, className, onClick }) => {
  return (
    <div className={`dropdown-item ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

DropdownItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

DropdownItem.defaultProps = {
  children: null,
  className: null,
  onClick: () => null,
};
