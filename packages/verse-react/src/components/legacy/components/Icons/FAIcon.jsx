import React from "react";

import PropTypes from "prop-types";

export const FAIcon = ({ className, ariaHidden, onClick, title }) => {
  return (
    <i
      className={className}
      aria-hidden={ariaHidden}
      onClick={onClick}
      title={title}
    />
  );
};

FAIcon.propTypes = {
  className: PropTypes.string,
  ariaHidden: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string,
};

FAIcon.defaultProps = {
  className: "fa",
  ariaHidden: false,
  onClick: () => {},
  title: "",
};
