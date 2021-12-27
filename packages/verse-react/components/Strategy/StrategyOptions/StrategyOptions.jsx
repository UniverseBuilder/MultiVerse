import React, { useState } from "react";
import PropTypes from "prop-types";
import { Select } from "../../Form/Select";
import { Input } from "../../Form/Input";
import { strategyCodes } from "../../utils/strategyCodes";
import * as optionChainJson from "../../../Resources/data/option-chain-indices";
import {
  getPremiumsfromBlackScholes,
  getOptionExpiry,
} from "../../../Resources/calculations/blackScholesMerton";

export const StrategyOptions = ({
  strategyCode,
  legOptions,
  setLegOptions,
  handleCrDrData,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [addOn, setAddOn] = useState(false);
  const { optionsOrder, optionsType, orderKey, orderType } = strategyCodes[
    strategyCode
  ];
  const optionChain = optionChainJson.default.filtered.data;

  const getChartDataOfOption = ({
    underlyingValue,
    strikePrice,
    expiryDate,
    impliedVolatility,
  }) => {
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
    return chartData;
  };

  const handleSelectedOptions = (e, orderKey, orderType) => {
    const value = e.target.value;
    const label = e.target.id;
    if (value !== "") {
      const legDetails = optionChain.find(
        (item) => `${item[orderKey].strikePrice} ${orderKey}` === value
      );
      const legOption = legOptions?.[label] || {};
      const optionDetails = legDetails[orderKey] || {};
      optionDetails.netCashFlow =
        orderType === "Buy"
          ? -optionDetails.lastPrice
          : optionDetails.lastPrice;
      const tempData = {
        ...legOptions,
        [label]: {
          ...legOption,
          ...optionDetails,
          chartData: getChartDataOfOption(optionDetails),
        },
      };
      setLegOptions(tempData);
      setSelectedOption(value);
      handleCrDrData(tempData);
    } else {
      setSelectedOption(value);
      setLegOptions({ ...legOptions, [label]: null });
    }
  };

  const handleLotChange = (e) => {
    const value = e.target.value;
    const label = e.target.id;
    const legOption = legOptions[label] || {};
    legOption.lot = value;
    setLegOptions({ ...legOptions, [label]: legOption });
  };

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    const label = e.target.id;
    const legOption = legOptions[label] || {};
    legOption.quantity = value;
    setLegOptions({ ...legOptions, [label]: legOption });
  };

  return (
    <div>
      <div className="row">
        {optionsOrder.map((order, index) => (
          <React.Fragment key={index}>
            <div className="col-6">
              <div className="row">
                <div className="col-4">
                  <Select
                    id={`Leg ${index + 1}`}
                    labelName={`L ${index + 1} : ${order}`}
                    options={optionsType[index]}
                    onChange={(e) => {
                      handleSelectedOptions(
                        e,
                        orderKey[index],
                        orderType[index]
                      );
                    }}
                    value={selectedOption}
                    placeholder="Select Option"
                  />
                </div>
                <div className="col-3">
                  <Input
                    id={`Leg ${index + 1}`}
                    type={"number"}
                    labelName={`Lot`}
                    placeholder="Lot"
                    value={legOptions?.[`Leg ${index + 1}`]?.lot || 75}
                    onChange={handleLotChange}
                  />
                </div>
                <div className="col-3">
                  <Input
                    id={`Leg ${index + 1}`}
                    type={"number"}
                    labelName={`Quantity`}
                    placeholder="Quantity"
                    value={legOptions?.[`Leg ${index + 1}`]?.quantity || 1}
                    onChange={handleQuantityChange}
                  />
                </div>
                <div className="col-2 margin-38">
                  <i
                    className={`fa fa-expand icon-ship-${addOn}`}
                    aria-hidden="true"
                    onClick={() => setAddOn(!addOn)}
                  ></i>
                </div>
              </div>
              <div className="row font14 addOnData">
                <div className="col-12">
                  {addOn && legOptions[`Leg ${index + 1}`] && (
                    <div className="row">
                      <div className="col-2">
                        <span className="font600">LTP</span>
                        <br />
                        <span className="font600">BUY</span>
                        <br />
                        <span className="font600">CHG%</span>
                        <br />
                        <span className="font600">VOL</span>
                        <br />
                      </div>
                      <div className="col-2">
                        <kbd>{legOptions[`Leg ${index + 1}`].lastPrice}</kbd>
                        <br />
                        {legOptions[`Leg ${index + 1}`].totalBuyQuantity}
                        <br />
                        <span
                          className={
                            legOptions[`Leg ${index + 1}`].pChange > 0
                              ? "positive font600"
                              : "negative font600"
                          }
                        >
                          {Math.round(
                            legOptions[`Leg ${index + 1}`].pChange * 100
                          ) / 100}
                        </span>
                        <br />
                        {legOptions[`Leg ${index + 1}`].totalTradedVolume}
                        <br />
                      </div>
                      <div className="col-2">
                        <span className="font600">OI</span>
                        <br />
                        <span className="font600">SELL</span>
                        <br />
                        <span className="font600">OI%</span>
                        <br />
                        <span className="font600">IV</span>
                        <br />
                      </div>
                      <div className="col-2">
                        {legOptions[`Leg ${index + 1}`].openInterest}
                        <br />
                        {legOptions[`Leg ${index + 1}`].totalSellQuantity}
                        <br />
                        <span
                          className={
                            legOptions[`Leg ${index + 1}`]
                              .pchangeinOpenInterest > 0
                              ? "positive font600"
                              : "negative font600"
                          }
                        >
                          {Math.round(
                            legOptions[`Leg ${index + 1}`]
                              .pchangeinOpenInterest * 100
                          ) / 100}
                        </span>
                        <br />
                        {legOptions[`Leg ${index + 1}`].impliedVolatility}
                        <br />
                      </div>
                      <div className="col-2">
                        <span className="font600">ULV</span>
                        <br />
                        <span className="font600">OIC</span>
                        <br />
                        <span className="font600">BID</span>
                        <br />
                        <span className="font600">ASK</span>
                        <br />
                      </div>
                      <div className="col-2">
                        {legOptions[`Leg ${index + 1}`].underlyingValue}
                        <br />
                        {Math.round(
                          legOptions[`Leg ${index + 1}`].changeinOpenInterest *
                            100
                        ) / 100}
                        <br />
                        {legOptions[`Leg ${index + 1}`].bidprice}
                        <br />
                        {legOptions[`Leg ${index + 1}`].askPrice}
                        <br />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

StrategyOptions.propTypes = {
  strategyCode: PropTypes.string.isRequired,
  legOptions: PropTypes.shape({}).isRequired,
  setLegOptions: PropTypes.func,
  handleCrDrData: PropTypes.func,
};
