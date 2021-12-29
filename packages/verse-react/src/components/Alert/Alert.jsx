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
          className={`alert alert-${type} alert-dismissible fade show ${className}`}
          role="alert"
        >
          {message}
          {dismissButton && (
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
              onClick={onDismiss}
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
  className: PropTypes.string,
  message: PropTypes.node,
  dismissButton: PropTypes.bool,
  onDismiss: PropTypes.func,
  autoDismiss: PropTypes.bool,
  dismissTimeOut: PropTypes.number
};

Alert.defaultProps = {
  type: "",
  className: "",
  message: undefined,
  dismissButton: false,
  onDismiss: () => {},
  autoDismiss: false,
  dismissTimeOut: 2000,
};
