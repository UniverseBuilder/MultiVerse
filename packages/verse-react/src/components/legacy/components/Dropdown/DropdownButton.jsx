import React from "react";

import PropTypes from "prop-types";

export const DropdownButton = ({ children, className }) => {
  return (
    <div
      aria-expanded="false"
      aria-haspopup="true"
      className={className}
      data-toggle="dropdown"
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
