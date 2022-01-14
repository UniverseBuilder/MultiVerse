import React from 'react';
import PropTypes from 'prop-types';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { TableFooter } from './TableFooter';
import { rowRenderer } from './helpers';
import * as domHelpers from 'dom-helpers';

export const Datagrid = ({ schema, data }) => {
  console.log('$$$', domHelpers);
  console.log(domHelpers.isVisible(document.querySelector('#root')));
  console.log(domHelpers.scrollbarSize(true));
  return (
    <div className="">
      <table>
        <TableHeader fields={schema.fields} />
        <TableRow fields={schema.fields} data={data} />
        <TableFooter />
      </table>
    </div>
  );
};

Datagrid.propTypes = {
  schema: PropTypes.shape({
    fields: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  data: PropTypes.array,
  dataKey: PropTypes.string,
  labelKey: PropTypes.string,
  noDataText: PropTypes.string,
  rowRenderer: PropTypes.func,
};

Datagrid.defaultProps = {
  data: [],
  noDataText: 'There are no rows',
  rowRenderer: rowRenderer,
};
