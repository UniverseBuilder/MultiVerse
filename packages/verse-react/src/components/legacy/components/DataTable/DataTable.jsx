/* eslint-disable */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Refresh } from "../../components/Icons/Refresh";
import { Dropdown } from "../../components/Dropdown";
import { Loading } from "../../components/Loading";
import { AutoSizer } from "./Virtualized/AutoSizer";
import {
  Column,
  defaultCellDataGetter,
  defaultCellRenderer,
  defaultRowRenderer,
  defaultDataSorter,
  Table,
  CustomizeTable,
  PowerFilter,
} from "./Virtualized/Table";
import "./Virtualized/Table/styles.scss";
import "./DataTable.scss";
import { FAIcon } from "../Icons/FAIcon";

const noRowsRenderer = () => {
  return <div className="noRows">No rows to show</div>;
};

const rowClassName = ({ index }) => {
  if (index < 0) {
    return "headerRow";
  } else {
    return index % 2 === 0 ? "evenRow" : "oddRow";
  }
};

export const DataTable = ({
  title,
  columnData,
  columnHeader,
  dataKey,
  labelKey,
  sortBy,
  sortDirection,
  enhancer,
  disableHeader,
  showFooter,
  headerHeight,
  height,
  rowHeight,
  isCustomizable,
  overscanRowCount,
  rowRenderer,
  cellRenderer,
  cellDataGetter,
  handleRefresh,
  onRowClick,
  dataSorter,
  loading,
  footer,
  isTable,
}) => {
  const [option, setOption] = useState("");
  const [expand, setExpand] = useState(isTable);
  const [headers, setHeaders] = useState(columnHeader);
  const [data, setData] = useState({
    values: columnData,
    sortBy,
    sortDirection,
  });

  useEffect(() => {
    setHeaders(columnHeader);
    if (sortBy) {
      const sortedArray = dataSorter({
        columnData,
        sortBy,
        sortDirection,
      });
      setData({
        values: sortedArray,
        sortBy,
        sortDirection,
      });
    } else {
      setData({
        values: columnData,
        sortBy,
        sortDirection,
      });
    }
  }, [columnData, sortBy, sortDirection]);

  const onClose = (values, type) => {
    if (option === "FILTER") {
      setData({
        ...data,
        values: columnData,
      });
    }
    setOption("");
  };

  const applyCutstomization = (columnIndex, show) => {
    let headerCopy = JSON.parse(JSON.stringify(headers));
    headerCopy[columnIndex].show = show;
    setHeaders(headerCopy);
  };

  const applyFilter = (filterString) => {
    const dataValues = columnData.filter((item) => {
      if (
        JSON.stringify(item).toLowerCase().includes(filterString.toLowerCase())
      ) {
        return item;
      }
    });
    setData({
      ...data,
      values: dataValues,
    });
  };

  const onEnhanceRight = (value) => {
    setOption(value);
  };

  const handleSort = ({ columnIndex, sortBy, sortDirection }) => {
    const sortedArray = dataSorter({
      columnIndex,
      columnData,
      sortBy,
      sortDirection,
      column: headers[columnIndex],
    });
    setData({ values: sortedArray, sortBy, sortDirection });
  };

  return (
    <div className="DataTable">
      <If condition={title || isCustomizable}>
        <div className="titleBar">
          <div className="enhancerLeft">{enhancer.topLeft}</div>
          <div className="titleText textCenter">{title}</div>
          <div className="enhancerRight">
            <div className="enhancerTopRight">{enhancer.topRight}</div>
            <If condition={handleRefresh && expand}>
              <FAIcon
                className="fa fa-refresh refresh icon-color pointer"
                onClick={handleRefresh}
              />
            </If>
            <If condition={isCustomizable && expand}>
              <Dropdown>
                <Dropdown.Button>
                  <FAIcon className="fa fa-ellipsis-h fa-2x icon-color" />
                </Dropdown.Button>
                <Dropdown.Menu className="dropdown-menu-right pointer">
                  <Dropdown.Item onClick={() => onEnhanceRight("FILTER")}>
                    Filter
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => onEnhanceRight("CUSTOMIZE")}>
                    Customize
                  </Dropdown.Item>
                  <Dropdown.Item>
                    Tale A Snap<code className="ml-2">TBD</code>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    Download CSV<code className="ml-2">TBD</code>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    Change Theme<code className="ml-2">TBD</code>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </If>
            <If condition={!expand}>
              <FAIcon
                className="fa fa-expand refresh icon-color pointer"
                onClick={() => setExpand(true)}
              />
            </If>
            <If condition={expand}>
              <FAIcon
                className="fa fa-compress refresh icon-color pointer ml-3"
                onClick={() => setExpand(false)}
              />
            </If>
          </div>
        </div>
      </If>
      <If condition={expand}>
        <Loading loading={loading}>
          <AutoSizer disableHeight>
            {({ width }) => (
              <React.Fragment>
                <Table
                  disableHeader={disableHeader}
                  headerClassName={"headerColumn"}
                  headerHeight={headerHeight}
                  height={height}
                  noRowsRenderer={noRowsRenderer}
                  overscanRowCount={overscanRowCount}
                  rowClassName={rowClassName} //EVEN/ODD STYLING
                  rowHeight={rowHeight} // NUMBER
                  rowGetter={({ index }) => data.values[index]}
                  rowCount={data.values.length}
                  width={width}
                  sort={handleSort}
                  sortBy={data.sortBy}
                  sortDirection={data.sortDirection}
                  rowRenderer={rowRenderer}
                  onRowClick={onRowClick}
                >
                  {headers.map((column, index) => {
                    if (column.show === false) {
                      return null;
                    }
                    return (
                      <Column
                        key={index}
                        label={column[labelKey]}
                        dataKey={column[dataKey]}
                        width={column.width}
                        cellRenderer={cellRenderer}
                        cellDataGetter={cellDataGetter}
                        columnData={column}
                        style={column.style}
                      />
                    );
                  })}
                </Table>
                <Choose>
                  <When condition={option === "CUSTOMIZE"}>
                    <CustomizeTable
                      headers={headers}
                      labelKey={labelKey}
                      onClose={onClose}
                      applyCutstomization={applyCutstomization}
                    />
                  </When>
                  <When condition={option === "FILTER"}>
                    <PowerFilter applyFilter={applyFilter} onClose={onClose} />
                  </When>
                </Choose>
              </React.Fragment>
            )}
          </AutoSizer>
          {showFooter && (
            <div className="tableFooter space-btw">
              <div className="numberOfRows">
                Number of rows : {data.values.length || 0}
              </div>
              <div className="footerContent">{footer}</div>
            </div>
          )}
        </Loading>
      </If>
    </div>
  );
};

DataTable.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disableHeader: PropTypes.bool,
  headerHeight: PropTypes.number,
  height: PropTypes.number,
  overscanRowCount: PropTypes.number,
  rowHeight: PropTypes.number,
  sortDirection: PropTypes.string,
  columnData: PropTypes.array,
  columnHeader: PropTypes.array,
  dataKey: PropTypes.string,
  labelKey: PropTypes.string,
  sort: PropTypes.func,
  sortBy: PropTypes.string,
  sortDirection: PropTypes.string,
  rowRenderer: PropTypes.func,
  cellRenderer: PropTypes.func,
  cellDataGetter: PropTypes.func,
  handleRefresh: PropTypes.func,
  enhancer: PropTypes.shape({}),
  onRowClick: PropTypes.func,
  showFooter: PropTypes.bool,
  isCustomizable: PropTypes.bool,
  dataSorter: PropTypes.func,
  loading: PropTypes.bool,
  footer: PropTypes.string,
  isTable: PropTypes.bool,
};

DataTable.defaultProps = {
  title: "",
  disableHeader: false,
  headerHeight: 40,
  height: 350,
  overscanRowCount: 10,
  rowHeight: 30,
  columnData: [],
  columnHeader: [],
  dataKey: "dataKey",
  labelKey: "labelName",
  sort: null,
  sortBy: null,
  sortDirection: null,
  rowRenderer: defaultRowRenderer,
  cellRenderer: defaultCellRenderer,
  cellDataGetter: defaultCellDataGetter,
  handleRefresh: () => null,
  enhancer: {
    topLeft: null,
  },
  onRowClick: null,
  showFooter: true,
  isCustomizable: true,
  dataSorter: defaultDataSorter,
  loading: false,
  footer: null,
  isTable: true,
};
