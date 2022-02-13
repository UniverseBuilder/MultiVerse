import React from "react";

import PropTypes from "prop-types";

import { FAIcon } from "../../../Icons";
import "@multiverses/verse-css/scss/legacy/CustomizeTable.scss";

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
            <For each="header" index="idx" of={headers}>
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
  applyCutstomization: PropTypes.func.isRequired,
  labelKey: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  headers: PropTypes.arrayOf(PropTypes.shape({})),
};
