import React from "react";
import PropTypes from "prop-types";
import { InputBar } from "../../InputBar";

export const ValueNumber = ({ keyName, value, handleValueChange }) => {
  return (
    <div className="flexbox borderBottom breakWord">
      <div className="flex40 gutter2 borderRight fontWeight500">{keyName}</div>
      <div className="flex60 gutter2 breakWord">
        <InputBar id={keyName} value={value} onChange={handleValueChange} />
      </div>
    </div>
  );
};

ValueNumber.propTypes = {
  keyName: PropTypes.string,
  value: PropTypes.number,
};

ValueNumber.defaultProps = {
  keyName: "",
  value: 0,
};
