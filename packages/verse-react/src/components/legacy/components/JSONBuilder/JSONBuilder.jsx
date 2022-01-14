import React from "react";
import PropTypes from "prop-types";
import { Badge } from "../Badge";
import "./JSONBuilder.scss";

export const JSONBuilder = ({ jsonData, onDrop, onClone, onChild }) => {
  const onDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="JSONBuilder">
      <div className="droppable" onDrop={onDrop} onDragOver={onDragOver}>
        <div className="ground">
          <b>&#123;</b>
          <div className="level1">
            <For each="keyName" of={jsonData} index="index">
              <div key={index}>
                <Badge badgeLabel={keyName} badgeIndex={index} />
                <i
                  class="fa fa-cubes icon-plus"
                  aria-hidden="true"
                  onClick={() => onChild(keyName, index)}
                ></i>
                <i
                  class="fa fa-clone icon-clone"
                  aria-hidden="true"
                  onClick={() => onClone(keyName, index)}
                ></i>
              </div>
            </For>
          </div>
          <b>&#125;</b>
        </div>
      </div>
    </div>
  );
};

JSONBuilder.propTypes = {
  jsonData: PropTypes.arrayOf(PropTypes.any),
  onDrop: PropTypes.func,
  onClone: PropTypes.func,
  onChild: PropTypes.func,
};

JSONBuilder.defaultProps = {
  jsonData: [],
  onDrop: () => {},
  onChild: () => {},
  onClone: () => {},
};
