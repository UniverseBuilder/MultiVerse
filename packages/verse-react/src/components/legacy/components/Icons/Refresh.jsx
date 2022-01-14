/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { FAIcon } from "./FAIcon";
import "./Icons.scss";

export const Refresh = ({ onClick, className }) => {
  return (
    <FAIcon
      className="fa fa-refresh fa-1x icon-color reload"
      onClick={onClick}
    />
  );
};

Refresh.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Refresh.defaultProps = {
  onClick: () => {},
  className: "",
};
