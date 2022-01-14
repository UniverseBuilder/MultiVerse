/** @flow */
import React from "react";
import PropTypes from "prop-types";
import {
  AutoSizer,
  Column,
  Table,
  SortDirection,
} from "react-virtualized";
import styles from "./Table.example.css";

const noRowsRenderer = () => {
  return <div className={styles.noRows}>No rows</div>;
};

const rowClassName = ({ index }) => {
  if (index < 0) {
    return styles.headerRow;
  } else {
    return index % 2 === 0 ? styles.evenRow : styles.oddRow;
  }
};

export const DTC = ({
  disableHeader,
  headerHeight,
  height,
  overscanRowCount,
  rowHeight,
  columnData,
  columnHeader,
  sortDirection,
}) => {
  return (
    <div>
      <AutoSizer disableHeight>
        {({ width }) => (
          <Table
            disableHeader={disableHeader}
            headerClassName={styles.headerColumn}
            headerHeight={headerHeight}
            height={height}
            noRowsRenderer={noRowsRenderer}
            overscanRowCount={overscanRowCount}
            rowClassName={rowClassName} //EVEN/ODD STYLING
            rowHeight={rowHeight} // NUMBER
            rowGetter={({ index }) => columnData[index]}
            rowCount={columnData.length}
            sortDirection={sortDirection}
            width={width}
          >
            {columnHeader.map((header) => {
              return (
                <Column
                  label={header.labelName}
                  cellDataGetter={({ rowData }) => rowData.index}
                  dataKey={header.datakey}
                  width={header.width}
                />
              );
            })}
          </Table>
        )}
      </AutoSizer>
    </div>
  );
};

DTC.propTypes = {
  disableHeader: PropTypes.bool,
  headerHeight: PropTypes.number,
  height: PropTypes.number,
  overscanRowCount: PropTypes.number,
  rowHeight: PropTypes.number,
  sortDirection: PropTypes.string,
  columnData: PropTypes.array,
  columnHeader: PropTypes.array,
};

DTC.defaultProps = {
  disableHeader: false,
  headerHeight: 30,
  height: 270,
  overscanRowCount: 10,
  rowHeight: 40,
  sortDirection: SortDirection.ASC,
  columnData: [],
  columnHeader: [],
};
