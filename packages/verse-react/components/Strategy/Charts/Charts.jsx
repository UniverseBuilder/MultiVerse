import React from "react";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export const Charts = ({ selectedLeg }) => {
  return (
    <div>
      <LineChart
        width={500}
        height={300}
        data={selectedLeg.chartData || []}
        margin={{
          top: 5,
          right: 40,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="spotPrice" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="callPremium"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="putPremium" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

Charts.propTypes = {
  selectedLeg: PropTypes.shape({}),
};

Charts.defaultProps = {
  selectedLeg: {},
};
