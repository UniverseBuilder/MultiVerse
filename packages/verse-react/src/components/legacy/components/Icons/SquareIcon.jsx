import React from "react";
import PropTypes from "prop-types";

export const SquareIcon = ({ className, ariaHidden, onClick }) => {
  return (
    <div className="squareIcon">
      <i className={className} aria-hidden={ariaHidden} onClick={onClick} />
    </div>
  );
};

SquareIcon.propTypes = {
  className: PropTypes.string,
  ariaHidden: PropTypes.bool,
  onClick: PropTypes.func,
};

SquareIcon.defaultProps = {
  className: "fa",
  ariaHidden: false,
  onClick: () => {},
};
