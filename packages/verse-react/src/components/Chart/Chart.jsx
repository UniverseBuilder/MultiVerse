import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

export const Chart = React.memo(({ width, height }) => {
  const chartRef = useRef();

  useEffect(() => {
    if (chartRef.current) {
      let ctx = chartRef.current.getContext("2d");
      ctx.moveTo(0, 0);
      ctx.lineTo(0, height);
      ctx.lineTo(width, height);
      ctx.stroke();
    }
  }, [chartRef]);

  return (
    <canvas
      ref={chartRef}
      id="chart-canvas"
      width={width}
      height={height}
    ></canvas>
  );
});

Chart.propTypes = {
  width: PropTypes.any,
  height: PropTypes.any,
};

Chart.defaultProps = {
  width: 400,
  height: 205,
};
