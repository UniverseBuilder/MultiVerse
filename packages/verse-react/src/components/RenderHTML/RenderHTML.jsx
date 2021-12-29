import React from "react";
import { PropTypes } from "prop-types";

export const RenderHTML = ({ content, showHTML }) => {
  let options = { dangerouslySetInnerHTML: { __html: content } };
  if (showHTML) {
    options = {};
  }
  return <span data-testid="html-content" {...options} />;
};

RenderHTML.propTypes = {
  content: PropTypes.node,
  showHTML: PropTypes.bool,
};

RenderHTML.defaultProps = {
  content: "",
  showHTML: false,
};
