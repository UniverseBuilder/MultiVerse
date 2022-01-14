import React from "react";
import PropTypes from "prop-types";
import { FAIcon } from "../../../Icons";
import { InputBar } from "../../../Form/InputBar";
import "./PowerFilter.scss";

export const PowerFilter = ({ applyFilter, onClose }) => {
  return (
    <div className="powerFilter">
      <div className="inputFilter">
        <InputBar
          placeholder="Filter"
          onChange={(e) => applyFilter(e.target.value)}
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
