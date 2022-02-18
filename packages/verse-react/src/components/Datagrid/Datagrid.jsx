import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { Loader } from '../Loader';
import AutoResizer from './AutoResizer';
import BaseTable from './BaseTable';
import Column from './Column';
import '@multiverses/verse-css/scss/components/BaseTable.scss';

export const Datagrid = ({
  data,
  height,
  schema,
  dynamicRowHeight,
  loading,
  title,
}) => {
  const [sort, setSort] = useState({});
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

  // eslint-disable-next-line no-unused-vars
  const onColumnSort = ({ key, order }) => {
    setSort({
      ...sort,
      [key]: sort[key] === 'desc' ? null : order,
    });
    setColData(colData.reverse());
  };

  const Footer = () => {
    return (
      <div className="footer">
        <div className="m-l-16">Number of rows - {data.length || 0}</div>
      </div>
    );
  };

  // eslint-disable-next-line no-unused-vars
  const Header = () => {
    if (!title) {
      return null;
    }
    return (
      <div className="">
        <div className="m-l-16 header">{title}</div>
      </div>
    );
  };

  return (
    <div>
      <AutoResizer height={height}>
        {({ width, height }) => (
          <React.Fragment>
            <div className="flex flex-center header-wrapper fb-700" style={{ width, height: 50 }}>
              <Header />
            </div>
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
  loading: PropTypes.bool,
  schema: PropTypes.shape({
    columns: PropTypes.array,
  }),
  title: PropTypes.string,
};

Datagrid.defaultProps = {
  data: [],
  height: 400,
  loading: false,
  schema: {
    columns: [],
  },
  title: '',
};
