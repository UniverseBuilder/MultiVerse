import React, { useState } from "react";
import PropTypes from "prop-types";
import { StrategyOptions } from "./StrategyOptions";
import { Scenarios } from "./Scenarios";
import { Charts } from "./Charts";
import { strategyCodes } from "../utils/strategyCodes";
import {
  getPremiumsfromBlackScholes,
  getOptionExpiry,
} from "../../Resources/calculations/blackScholesMerton";
import "./Strategy.scss";

export const Strategy = ({
  name,
  strategyType,
  strategyCode,
  overview,
  description,
}) => {
  const [legOptions, setLegOptions] = useState({});
  const [payoffForm, setPayOffForm] = useState({});
  const [selectedLeg, setSelectedLeg] = useState("Leg 1");
  const [crDrData, setCrDrData] = useState({});
  const [addOn, setAddOn] = useState(false);
  const { numberOfOptions, optionsOrder, strategyTypeClass } = strategyCodes[strategyCode];
  const { netCashFlow = 0 } = crDrData;

  const handleCrDrData = (data) => {
    let cdData = crDrData || {};
    let orderValue = 0;
    let netCashFlow = 0;
    if (Object.keys(data).length === numberOfOptions) {
      optionsOrder.forEach((item, index) => {
        const legOption = data[`Leg ${index + 1}`];
        orderValue += legOption.lastPrice * (legOption.quantity || 1);
        netCashFlow += legOption.netCashFlow;
      });
      setCrDrData({ ...cdData, orderValue, netCashFlow });
    }
  };

  const setChartData = (e) => {
    const label = e.target.id;
    const value = e.target.value;
    let {
      strikePrice,
      underlyingValue,
      expiryDate,
      impliedVolatility,
    } = legOptions?.[selectedLeg];

   ;
    if (label === "impliedVolatility") {
      impliedVolatility = value;
    }
    const chartData = [];
    const underLying = Math.round((underlyingValue * 1000) / 1000);
    for (let i = 5; i > 0; i--) {
      const diff = -(i) * 10;
      chartData.push({
        ...getPremiumsfromBlackScholes({
          spotPriceBSHM: underLying + diff,
          strikePriceBSHM: strikePrice,
          expiryBSHM: getOptionExpiry(new Date(expiryDate), new Date()),
          volatilityBSHM: impliedVolatility / 100,
          interestBSHM: 0.03324,
          dividendBSHM: 0,
          cndAlgorithm: "HART",
          costOfCarry: 0,
        }),
        spotPrice: underLying + diff,
        strikePrice: strikePrice,
      });
    }
    chartData.push({
      ...getPremiumsfromBlackScholes({
        spotPriceBSHM: underLying,
        strikePriceBSHM: strikePrice,
        expiryBSHM: getOptionExpiry(new Date(expiryDate), new Date()),
        volatilityBSHM: impliedVolatility / 100,
        interestBSHM: 0.03324,
        dividendBSHM: 0,
        cndAlgorithm: "HART",
        costOfCarry: 0,
      }),
      spotPrice: underLying,
      strikePrice: strikePrice,
    });
    for (let i = 0; i < 5; i++) {
      const diff = (i + 1) * 10;
      chartData.push({
        ...getPremiumsfromBlackScholes({
          spotPriceBSHM: underLying + diff,
          strikePriceBSHM: strikePrice,
          expiryBSHM: getOptionExpiry(new Date(expiryDate), new Date()),
          volatilityBSHM: impliedVolatility / 100,
          interestBSHM: 0.03324,
          dividendBSHM: 0,
          cndAlgorithm: "HART",
          costOfCarry: 0,
        }),
        spotPrice: underLying + diff,
        strikePrice: strikePrice,
      });
    }
    setPayOffForm({
      ...payoffForm,
      [label]: value,
    });
    setLegOptions({
      ...legOptions,
      [selectedLeg]: {
        ...legOptions?.[selectedLeg],
        chartData,
      },
    });
  };

  return (
    <div className="strategy-comp">
      <div className="row">
        <div className="col-6">
          <h4>
            {name}
            &nbsp;
            <i
              className={`fa fa-podcast fa-fw info-icon icon-${addOn}`}
              aria-hidden="true"
              onClick={() => setAddOn(!addOn)}
            ></i>
          </h4>
          {addOn && (
            <div>
              <div className={`font600 ${strategyTypeClass}`}>
                {strategyType}
              </div>
              <i className="font600 underline">Overview</i>
              <br />
              {overview}
            </div>
          )}
        </div> 
        {addOn && (
          <div className="col-6">
            <div className="overview">
              <i className="font600 underline">Description</i>
              {description}
            </div>
          </div>
        )}
      </div>
      <div className="row">
        <div className="col-12">
          <i className="font600 underline">Option</i>
          <StrategyOptions
            strategyCode={strategyCode}
            legOptions={legOptions}
            setLegOptions={setLegOptions}
            handleCrDrData = {handleCrDrData}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="dbCard card padding5">
            <span className="">
              <span className="font600">Net Cash Value</span> :{" "}
              <span
                className={
                  netCashFlow > 0 ? "positive font600" : "negative font600"
                }
              >
                {netCashFlow}
              </span>
            </span>
          </div>
        </div>
      </div>
      {Object.values(legOptions).length > 0 && (
        <div className="row">
          <div className="col-12">
            {Object.keys(legOptions).map((key) => {
              if (key === selectedLeg) {
                return (
                  <div className="selectedOptionLeg" key={key}>
                    {key}
                  </div>
                );
              } else {
                return (
                  <div
                    className="optionLegs"
                    key={key}
                    onClick={() => setSelectedLeg(key)}
                  >
                    {key}
                  </div>
                );
              }
            })}
          </div>
        </div>
      )}
      <div className="row">
        <div className="col-6">
          <i className="font600 underline">Payoff Graph</i>
          <Charts selectedLeg={legOptions[selectedLeg]} />
        </div>
        <div className="col-6">
          <i className="font600 underline">Scenarios</i>
          <Scenarios payoffForm={payoffForm} setChartData={setChartData} />
        </div>
      </div>
    </div>
  );
};

Strategy.propTypes = {
  name: PropTypes.string.isRequired,
  strategyType: PropTypes.string.isRequired,
  overview: PropTypes.node,
  description: PropTypes.node,
};
