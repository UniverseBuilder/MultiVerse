import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { InputBar } from "../InputBar";

export const FlexObject = ({ data, value, onFlexForm }) => {
  return (
    <div className="flexbox flexWrap">
      <For each="dataItem" of={data} index="idx">
        <Fragment key={`S_${idx}`}>
          <div className={`${dataItem.labelFlex}`}>
            <label className="marginLeft5 fontWeight500 font14">
              {dataItem.label}
            </label>
          </div>
          <div className={`${dataItem.valueFlex}`}>
            <div className="font14 marginLR5">
              <div className="gutter2 fontWeight500">
                <InputBar
                  id={dataItem.label}
                  placeholder={dataItem.label}
                  value={value[dataItem.key] || ""}
                  onChange={(e) => onFlexForm(e, dataItem.key)}
                />
              </div>
              <div className="flexbox flexWrap">
                <If condition={dataItem.child}>
                  <For each="firstChild" of={dataItem.child} index="idx1">
                    <Fragment key={`S1_${idx1}`}>
                      <div className={`${firstChild.labelFlex}`}>
                        <label className="marginLeft5 fontWeight500 font14">
                          {firstChild.label}
                        </label>
                      </div>
                      <div className={`${firstChild.valueFlex}`}>
                        <div className="font14 marginLR5">
                          <div className="gutter2 fontWeight500">
                            <InputBar
                              id={firstChild.label}
                              placeholder={firstChild.label}
                              value={value[firstChild.key] || ""}
                              onChange={(e) => onFlexForm(e, firstChild.key)}
                            />
                          </div>
                          <div className="flexbox flexWrap">
                            <If condition={firstChild.child}>
                              <For
                                each="secondChild"
                                of={firstChild.child}
                                index="idx2"
                              >
                                <Fragment key={`S2_${idx2}`}>
                                  <div className={`${secondChild.labelFlex}`}>
                                    <label className="marginLeft5 fontWeight500 font14">
                                      {secondChild.label}
                                    </label>
                                  </div>
                                  <div className={`${secondChild.valueFlex}`}>
                                    <div className="font14 marginL5">
                                      <div className="gutter2 fontWeight500">
                                        <InputBar
                                          id={secondChild.label}
                                          placeholder={secondChild.label}
                                          value={value[secondChild.key] || ""}
                                          onChange={(e) =>
                                            onFlexForm(e, secondChild.key)
                                          }
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </Fragment>
                              </For>
                            </If>
                          </div>
                        </div>
                      </div>
                    </Fragment>
                  </For>
                </If>
              </div>
            </div>
          </div>
        </Fragment>
      </For>
    </div>
  );
};

FlexObject.propTypes = {
  data: PropTypes.array,
  onFlexForm: PropTypes.func,
};

FlexObject.defaultProps = {
  data: [],
  onFlexForm: () => {},
};
