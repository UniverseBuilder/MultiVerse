import React, { useEffect } from "react";

import PropTypes from "prop-types";

let alertTimer;

export const Alert = ({
  type,
  message,
  dismissButton,
  onDismiss,
  className,
  autoDismiss,
  dismissTimeOut,
}) => {
  useEffect(() => {
    if (autoDismiss) {
      alertTimer = () => setTimeout(() => onDismiss(), dismissTimeOut);
      alertTimer();
    }
    return () => {
      if (autoDismiss) {
        clearTimeout(alertTimer);
      }
    };
  }, [type]);
  return (
    <React.Fragment>
      {type && (
        <div
          className={`alert ${type} alert-dismissible fade show ${className}`}
          role="alert"
        >
          {message}
          {dismissButton && (
            <button
              aria-label="Close"
              className="close"
              data-dismiss="alert"
              onClick={onDismiss}
              type="button"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

Alert.propTypes = {
  autoDismiss: PropTypes.bool,
  className: PropTypes.string,
  dismissButton: PropTypes.bool,
  dismissTimeOut: PropTypes.number,
  message: PropTypes.node,
  onDismiss: PropTypes.func,
  type: PropTypes.oneOf([
    "",
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]),
};

Alert.defaultProps = {
  autoDismiss: false,
  className: "",
  dismissButton: false,
  dismissTimeOut: 2000,
  message: undefined,
  onDismiss: () => {},
  type: "",
};
