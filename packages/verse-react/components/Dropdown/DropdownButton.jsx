import React from "react";
import PropTypes from "prop-types";

export const DropdownButton = ({ children, className }) => {
  return (
    <div
      className={className}
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      {children}
    </div>
  );
};

DropdownButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

DropdownButton.defaultProps = {
  children: null,
  className: null,
};
