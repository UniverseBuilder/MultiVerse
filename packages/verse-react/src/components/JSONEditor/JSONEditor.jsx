import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { KeyTitle } from "./KeyTitle";
import { KeyMapper } from "./KeyMapper";
import "./JSONEditor.scss";

export const JSONEditor = ({ jsonData }) => {
  const [data, setData] = useState({});
  const jsonKeys = Object.keys(data);
  useEffect(() => {
    setData({
      ...jsonData,
      ...data,
    });
  }, [jsonData]);

  const handleValueChange = (e, jsonKey, type) => {
    setData({
      ...data,
      [jsonKey]: {
        ...data[jsonKey],
        [e.target.id]: type(e.target.value),
      },
    });
  };
  return (
    <If condition={jsonKeys.length > 0}>
      <div className="JSONEditor font12">
        <For each="jsonKey" of={jsonKeys}>
          <KeyTitle title={jsonKey} />
          <For each="item" of={Object.keys(data[jsonKeys])} index="index">
            <React.Fragment key={item}>
              <KeyMapper
                titleKey={jsonKey}
                keyName={item}
                value={data[jsonKeys][item]}
                handleValueChange={handleValueChange}
              />
            </React.Fragment>
          </For>
        </For>
      </div>
    </If>
  );
};

JSONEditor.propTypes = {
  jsonData: PropTypes.shape({}),
};

JSONEditor.defaultProps = {
  jsonData: {},
};
