import React from "react";

import PropTypes from "prop-types";

export const DropdownMenu = ({ children, className }) => {
  return <div className={`dropdown-menu ${className}`}>{children}</div>;
};

DropdownMenu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

DropdownMenu.defaultProps = {
  children: null,
  className: null,
};
