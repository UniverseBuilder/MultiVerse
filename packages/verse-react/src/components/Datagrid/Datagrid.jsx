/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import orderBy from 'lodash/orderBy';
import PropTypes from 'prop-types';

import { Loader } from '../Loader';
import AutoResizer from './AutoResizer';
import BaseTable from './BaseTable';
import Column from './Column';
import GridHeader from './GridHeader';

import '@multiverses/verse-css/scss/components/BaseTable.scss';

export const Datagrid = ({
  tableId,
  data,
  height,
  schema,
  dynamicRowHeight,
  loading,
  title,
  loadData,
  sortBy,
}) => {
  const [sort, setSort] = useState(sortBy);
  const [colData, setColData] = useState([]);
  const { columns, ...tableSchema } = schema;
  useEffect(() => {
    setColData(data);
  }, [data]);
  const renderOverlay = () => {
    if (loading) {
      return <Loader />;
    }

    return null;
  };

  const renderEmpty = () => {
    if (loading) {
      return null;
    }
    return <div className="empty">No data available</div>;
  };

  const onColumnSort = ({ key, order }) => {
    const newSort = {
      [key]: order,
    };
    setSort(newSort);
    setColData(orderBy(colData, [key], [order]));
  };

  const Footer = () => {
    return (
      <div className="footer">
        <div className="m-l-16 f-1 fb-400">
          Showing <span className="fb-500">{colData.length}</span> of{' '}
          {data.length || 0} results
        </div>
      </div>
    );
  };

  return (
    <div>
      <AutoResizer height={height}>
        {({ width, height }) => (
          <React.Fragment>
            <If condition={title}>
              <div className="header-wrapper" style={{ width }}>
                <GridHeader
                  colData={colData}
                  columns={columns}
                  data={data}
                  loadData={loadData}
                  setColData={setColData}
                  tableId={tableId}
                  title={title}
                />
              </div>
            </If>
            <BaseTable
              data={colData}
              disabled={loading}
              {...tableSchema}
              emptyRenderer={renderEmpty}
              estimatedRowHeight={dynamicRowHeight}
              footerHeight={44}
              footerRenderer={<Footer />}
              height={height}
              onColumnSort={onColumnSort}
              overlayRenderer={renderOverlay}
              sortState={sort}
              width={width}
            >
              <For each="column" index="colIndex" of={columns}>
                <Column
                  {...column}
                  flexGrow={1}
                  key={column.dataKey}
                  resizable={true}
                />
              </For>
            </BaseTable>
          </React.Fragment>
        )}
      </AutoResizer>
    </div>
  );
};

Datagrid.propTypes = {
  data: PropTypes.array,
  dynamicRowHeight: PropTypes.number,
  height: PropTypes.number,
  loadData: PropTypes.func,
  loading: PropTypes.bool,
  schema: PropTypes.shape({
    columns: PropTypes.array,
  }),
  sortBy: PropTypes.shape({}),
  tableId: PropTypes.string,
  title: PropTypes.string,
};

Datagrid.defaultProps = {
  data: [],
  height: 400,
  loadData: null,
  loading: false,
  schema: {
    columns: [],
  },
  sortBy: null,
  tableId: 'grid',
  title: '',
};
