import React from "react";

import PropTypes from "prop-types";

export const FAIcon = ({ className, ariaHidden, onClick, title }) => {
  return (
    <i
      aria-hidden={ariaHidden}
      className={className}
      onClick={onClick}
      title={title}
    />
  );
};

FAIcon.propTypes = {
  ariaHidden: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
};

FAIcon.defaultProps = {
  ariaHidden: false,
  className: "fa",
  onClick: () => {},
  title: "",
};
