import React from "react";

import PropTypes from "prop-types";

import { InputBar } from "../../../Form/InputBar";
import { FAIcon } from "../../../Icons";
import "./PowerFilter.scss";

export const PowerFilter = ({ applyFilter, onClose }) => {
  return (
    <div className="powerFilter">
      <div className="inputFilter">
        <InputBar
          onChange={(e) => applyFilter(e.target.value)}
          placeholder="Filter"
        />
      </div>
      <FAIcon
        className="fa fa-close fa-1x icon-color close-custom2"
        onClick={onClose}
      />
    </div>
  );
};

PowerFilter.propTypes = {
  applyFilter: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
