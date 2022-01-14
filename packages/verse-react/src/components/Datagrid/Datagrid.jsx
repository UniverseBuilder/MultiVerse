import React from 'react';
import PropTypes from 'prop-types';
import { DataTable } from '../legacy/components/DataTable';

export const Datagrid = ({ schema, data }) => {
  return (
    <div className="">
      <DataTable
        title="MOCK DATA"
        columnHeader={schema.fields}
        columnData={data}
        isCustomizable={false}
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
