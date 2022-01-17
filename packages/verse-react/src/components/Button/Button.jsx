import React from "react";

import PropTypes from "prop-types";

import { Loading } from "../Loading";

export const Button = ({ onClick, children, className, loading }) => {
  return (
    <button className={className} onClick={onClick}>
      <Loading loading={loading}>{children}</Loading>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  children: null,
  onClick: () => null,
  className: "btn",
  loading: false,
};
