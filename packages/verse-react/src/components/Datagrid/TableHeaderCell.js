/* eslint-disable */
import React from 'react';

import PropTypes from 'prop-types';

/**
 * HeaderCell component for BaseTable
 */
const TableHeaderCell = ({ className, column, columnIndex, ...props }) => {
  return <div className={className}>{column.title}</div>;
};
TableHeaderCell.propTypes = {
  className: PropTypes.string,
  column: PropTypes.object,
  columnIndex: PropTypes.number,
};

export default TableHeaderCell;
