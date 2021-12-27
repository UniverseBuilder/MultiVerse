import React from "react";
import PropTypes from "prop-types";
import { FAIcon } from "../../../Icons";
import "./CustomizeTable.scss";

export const CustomizeTable = ({
  onClose,
  labelKey,
  headers,
  applyCutstomization,
}) => {
  return (
    <div className="customizeModal">
      <div className="customizeColumns">
        <Choose>
          <When condition={headers.some((header) => header.show === false)}>
            <For each="header" of={headers} index="idx">
              <Choose>
                <When condition={header.show === false}>
                  <div>
                    {header[labelKey]}
                    <FAIcon
                      className="fa fa-gavel fa-1x icon-color gavel-custom"
                      onClick={() => applyCutstomization(idx, true)}
                    />
                  </div>
                </When>
                <Otherwise>
                  <div>
                    {header[labelKey]}
                    <FAIcon
                      className="fa fa-eye fa-1x icon-color gavel-custom"
                      onClick={() => applyCutstomization(idx, false)}
                    />
                  </div>
                </Otherwise>
              </Choose>
            </For>
          </When>
          <Otherwise>
            <div className="noCustomColumns">
              <i>All columns are shown</i>
            </div>
          </Otherwise>
        </Choose>
      </div>
      <FAIcon
        className="fa fa-close fa-1x icon-color close-custom"
        onClick={onClose}
      />
    </div>
  );
};

CustomizeTable.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.shape({})),
  labelKey: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  applyCutstomization: PropTypes.func.isRequired,
};
