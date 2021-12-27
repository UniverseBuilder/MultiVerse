import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

export const Portal = ({ container, children }) => {
  const portalRoot = document.getElementById(container);
  return ReactDOM.createPortal(children, portalRoot);
};

Portal.propTypes = {
  container: PropTypes.string,
  children: PropTypes.node,
};

Portal.defaultProps = {
  children: "",
};
