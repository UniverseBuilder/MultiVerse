import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const AppLinks = ({
  appLink,
  appName,
  isInternalLink,
  className,
  style,
  content,
  params,
}) => {
  const getParams = (params, appLink) => {
    let param = "";
    switch (params) {
      case "currentDate":
        param = Date.now();
        break;

      default:
        param = "";
        break;
    }
    console.log(`params`, params);
    window.open(`${appLink}${param}`, "_blank");
  };
  return (
    <Choose>
      <When condition={isInternalLink}>
        <Link to={appLink} className={className} style={style}>
          {content || appName}
        </Link>
      </When>
      <When condition={params}>
        <button
          className={`${className} primary`}
          onClick={() => getParams(params, appLink)}
          style={style}
        >
          {content || appName}
        </button>
      </When>
      <Otherwise>
        <a href={appLink} target="_blank" className={className} style={style}>
          {content || appName}
        </a>
      </Otherwise>
    </Choose>
  );
};

AppLinks.propTypes = {
  appLink: PropTypes.string,
  appName: PropTypes.string,
  isInternalLink: PropTypes.bool,
  params: PropTypes.string,
};

AppLinks.defaultProps = {
  appLink: "",
  appName: "",
  isInternalLink: false,
  params: "",
};
