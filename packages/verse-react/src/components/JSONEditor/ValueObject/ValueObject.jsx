import React from "react";
import PropTypes from "prop-types";
import { KeyTitle } from "../KeyTitle";
import { ObjectMapper } from "../ObjectMapper";

export const ValueObject = ({ keyName, value, handleValueChange }) => {
  return (
    <div className="breakWord">
      <KeyTitle title={keyName} />
      <For each="item" of={Object.keys(value)}>
        <ObjectMapper
          titleKey={keyName}
          keyName={item}
          value={value[item]}
          handleValueChange={handleValueChange}
        />
      </For>
    </div>
  );
};

ValueObject.propTypes = {
  keyName: PropTypes.string,
  value: PropTypes.shape({}),
};

ValueObject.defaultProps = {
  keyName: "",
  value: "",
};
