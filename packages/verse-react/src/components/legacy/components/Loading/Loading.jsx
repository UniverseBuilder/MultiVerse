/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { FAIcon } from "../Icons";
import "./Loading.scss";

export const Loading = ({
  children,
  loading,
  message,
  resetLoading,
  reload,
}) => {
  if (!loading && !message) {
    return <React.Fragment>{children}</React.Fragment>;
  }
  return (
    <div className="loading-container">
      <div className="loading">{children}</div>
      <div className="spinner">
        <Choose>
          <When condition={message}>
            <div className="message">
              {message}
              <FAIcon
                className="fa fa-close fa-1x close-icon icon-color"
                onClick={resetLoading}
              />
            </div>
          </When>
          <When condition={loading}>
            <FAIcon className="fa fa-cog fa-spin fa-2x spinner-icon icon-color" />
          </When>
        </Choose>
      </div>
    </div>
  );
};

Loading.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool,
  message: PropTypes.string,
  resetLoading: PropTypes.func,
  reload: PropTypes.func,
};

Loading.defaultProps = {
  children: null,
  loading: true,
  message: "",
  resetLoading: () => {},
  reload: null,
};
