import React from "react";
import PropTypes from "prop-types";
import { KeyTitle } from "../KeyTitle";
import { KeyMapper } from "../KeyMapper";
import { ValueString } from "../ValueString";
import { ValueNumber } from "../ValueNumber";

export const ObjectMapper = ({
  titleKey,
  keyName,
  value,
  handleValueChange,
}) => {
  return (
    <React.Fragment>
      <For each="item" of={Object.keys(value)}>
        <KeyMapper
          titleKey={keyName}
          keyName={item}
          value={value[item]}
          handleValueChange={handleValueChange}
        />
      </For>
    </React.Fragment>
  );
};

ObjectMapper.propTypes = {
  keyName: PropTypes.string,
  value: PropTypes.shape({}),
};

ObjectMapper.defaultProps = {
  keyName: "",
  value: "",
};
