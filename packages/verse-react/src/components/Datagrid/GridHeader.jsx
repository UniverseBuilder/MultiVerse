import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { useModel } from '../../utility/hooks/useModel';
import PowerFilter from './PowerFilter';

const filterFunctions = {
  equals: (a, b) => a === b,
  'greater than': (a, b) => a > b,
  'lesser than': (a, b) => a < b,
  'starts With': (a, b) => a.startsWith(b),
  'ends With': (a, b) => a.endsWith(b),
  includes: (a, b) => a.includes(b),
  'not equals': (a, b) => a !== b,
};

const GridHeader = ({ title, columns, data, setColData }) => {
  const { isFilterEnabled, filterParams = {} } = useModel('grid');
  const filters = Object.keys(filterParams);

  useEffect(() => {
    if (isFilterEnabled && filters.length) {
      const newData = data.filter(item =>
        filters.reduce((acc, q) => {
          if (filterParams[q].column?.dataType === 'Number') {
            return filterFunctions[filterParams[q].operator](
              item[q],
              Number(filterParams[q].input)
            );
          }
          return filterFunctions[filterParams[q].operator](
            item[q].toLowerCase(),
            filterParams[q].input.toLowerCase()
          );
        }, [])
      );
      setColData(newData);
    }
  }, [isFilterEnabled, JSON.stringify(filterParams)]);

  const resetData = () => {
    setColData(data);
  };

  return (
    <div>
      <div className="flex">
        <div className="flex-50">
          <If condition={title}>
            <div className="header m-l-12 fb-700">{title}</div>
          </If>
        </div>
        <div className="flex-50">
          <PowerFilter
            labelKey="title"
            options={columns}
            resetData={resetData}
            valueKey="dataKey"
          />
        </div>
      </div>
      <If condition={filters.length && isFilterEnabled}>
        <div className="flex">
          <div className="m-l-12 filterbar">
            <For each="filter" index="idx" of={filters}>
              <span key={idx}>
                {filterParams[filter].column.title}&nbsp;
                {filterParams[filter].operator}&nbsp;
                <b>{filterParams[filter].input}</b>
              </span>
              &nbsp;,&nbsp;
            </For>
          </div>
        </div>
      </If>
    </div>
  );
};

GridHeader.propTypes = {
  setColData: PropTypes.func.isRequired,
  columns: PropTypes.array,
  data: PropTypes.array,
  title: PropTypes.string,
};

GridHeader.defaultProps = {
  columns: [],
  data: [],
  title: '',
};

export default GridHeader;
