import React from "react";
import PropTypes from "prop-types";

export const KeyTitle = ({ title }) => {
  return (
    <div className="flexbox borderBottom breakWord">
      <div className="gutter2 fontWeight700">{title}</div>
    </div>
  );
};

KeyTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
