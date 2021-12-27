import React from "react";
import PropTypes from "prop-types";
import { Input } from "../../../Components/Form/Input";

export const Scenarios = ({ setChartData, payoffForm }) => {
  const handleFormValuesChange = (e) => {
    setChartData(e);
  };

  const { impliedVolatility } = payoffForm;

  return (
    <div className="row">
      {/* <div className="col-6">
        <Input
          id={"expiryDate"}
          labelName={"Expiry"}
          type={"date"}
          value={expiryDate}
          placeholder={"Enter Expiry"}
          onChange={handleFormValuesChange}
        />
      </div> */}
      <div className="col-2"></div>
      <div className="col-6">
        <Input
          id={"impliedVolatility"}
          labelName={"Volatility (%)"}
          type={"number"}
          value={impliedVolatility}
          placeholder={"Enter Volatility"}
          onChange={handleFormValuesChange}
        />
      </div>
      {/* <div className="col-6">
        <Input
          id={"interest"}
          labelName={"Interest (%)"}
          type={"number"}
          value={interest}
          placeholder={"Enter Interest"}
          onChange={handleFormValuesChange}
        />
      </div> */}
      {/* <div className="col-6">
        <Input
          id={"dividend"}
          labelName={"Dividend"}
          type={"number"}
          value={dividend}
          placeholder={"Enter Dividend"}
          onChange={handleFormValuesChange}
        />
      </div> */}
      {/* <div className="col-4"></div> */}
      <div className="col-4 margin-31">
        <button type="button" className="btn btn-dark">
          Reset
        </button>
      </div>
    </div>
  );
};

Scenarios.propTypes = {
  setChartData: PropTypes.func,
  payoffForm: PropTypes.shape({}),
};
