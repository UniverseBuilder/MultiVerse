import React from "react";

import PropTypes from "prop-types";

import { FAIcon } from "components/legacy/components/Icons";
import { Portal } from "components/Portal";

export const Overlay = ({ isActive, children, title, onClose }) => {
  if (!isActive) {
    return null;
  }
  return (
    <Portal container="overlay-root" isActive={true}>
      <div className="overlay">
        <div className="overlay-wrapper">
          <div className="overlay-content">
            <Choose>
              <When condition={title}>
                <div className="flex-center-space-btw bg-light p-2">
                  <h3>{title}</h3>
                  <FAIcon
                    className="fa fa-close f-right fa-2x c-pointer"
                    onClick={onClose}
                  />
                </div>
                <hr />
              </When>
              <Otherwise>
                <FAIcon
                  className="fa fa-close f-right fa-2x c-pointer"
                  onClick={onClose}
                />
              </Otherwise>
            </Choose>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

Overlay.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
};

Overlay.defaultProps = {
  isActive: false,
  onClose: () => {},
  title: "",
};
