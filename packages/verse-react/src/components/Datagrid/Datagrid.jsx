import React from 'react';

import PropTypes from 'prop-types';

import { DataTable } from '../legacy/components/DataTable';

export const Datagrid = ({ schema, data }) => {
  return (
    <div className="">
      <DataTable
        columnData={data}
        columnHeader={schema.fields}
        isCustomizable={false}
        title="MOCK DATA"
      />
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
};

Datagrid.defaultProps = {
  data: [],
  noDataText: 'There are no rows',
};
