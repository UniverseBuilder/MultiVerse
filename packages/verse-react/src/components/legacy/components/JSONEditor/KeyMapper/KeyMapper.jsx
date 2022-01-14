import React from "react";
import { ValueString } from "../ValueString";
import { ValueNumber } from "../ValueNumber";
import { ValueObject } from "../ValueObject";
import PropTypes from "prop-types";

export const KeyMapper = ({ titleKey, keyName, value, handleValueChange }) => {
  return (
    <div>
      <Choose>
        <When condition={typeof value === "string"}>
          <ValueString
            keyName={keyName}
            value={value}
            handleValueChange={(e) => handleValueChange(e, titleKey, String)}
          />
        </When>
        <When condition={typeof value === "number"}>
          <ValueNumber
            keyName={keyName}
            value={value}
            handleValueChange={(e) => handleValueChange(e, titleKey, Number)}
          />
        </When>
        <When condition={typeof value === "object"}>
          <ValueObject
            keyName={keyName}
            value={value}
            handleValueChange={(e) => handleValueChange(e, titleKey, Object)}
          />
        </When>
        <Otherwise>
          <div className="gutter2">
            Key Not Found : <b>{keyName}</b> - <b>{typeof value}</b>
          </div>
        </Otherwise>
      </Choose>
    </div>
  );
};

KeyMapper.propTypes = {
  item: PropTypes.any,
};
