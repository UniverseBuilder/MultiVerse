import { StrategyCE } from "../../Resources/StrategyCE";
import { StrategyPE } from "../../Resources/StrategyPE";

export const strategyCodes = {
  S01: {
    strategyName: "Bull Call Spread",
    numberOfOptions: 2,
    optionsOrder: ["Buy ATM CE", "Sell OTM CE"],
    orderKey: ["CE", "CE"],
    optionsType: [StrategyCE, StrategyCE],
    orderType: ["Buy", "Sell"],
    strategyTypeClass: "positive",
  },
  S02: {
    strategyName: "Bull Put Spread",
    numberOfOptions: 2,
    optionsOrder: ["Buy ATM", "Sell OTM"],
    optionsType: [StrategyPE, StrategyPE],
    strategyTypeClass: "negative",
  },
};
