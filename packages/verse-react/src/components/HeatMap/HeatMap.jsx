import React from "react";
import PropTypes from "prop-types";
import { Loading } from "components/Loading";

const flex = {
  5: "19A",
  6: "10",
  10: "10A",
};
export const HeatMap = ({ data, loading, length, columns, cellRenderer }) => {
  return (
    <Loading loading={loading}>
      <div
        className="flex-container"
        style={{ height: `calc((100vh - 100px)` }}
      >
        <For each="item" of={data} index="idx">
          {cellRenderer(item, idx, idx, columns, flex, length)}
        </For>
      </div>
    </Loading>
  );
};

HeatMap.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
  loading: PropTypes.bool,
  length: PropTypes.number,
  column: PropTypes.number,
};

HeatMap.defaultProps = {
  data: [],
  loading: false,
  length: 0,
  column: 0,
};
