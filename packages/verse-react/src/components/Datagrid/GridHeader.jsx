import React from 'react';

import PropTypes from 'prop-types';

import { powerFilter } from '../../utility/functions/powerFilter';
import { useModel } from '../../utility/hooks/useModel';
import { useForm } from '../../utility/redux/slices/forms/formSlice';
import { Badge } from '../Badge';
import PowerFilter from './PowerFilter';

const GridHeader = ({ title, columns, data, colData, setColData }) => {
  const { filterParams = {} } = useModel('grid');
  const filters = Object.keys(filterParams);
  const { assign } = useForm();

  const handleAddFilter = newFilters => {
    setColData(powerFilter(colData, newFilters));
  };

  const handleDeleteFilter = filter => {
    const newFilters = {
      ...filterParams,
    };
    delete newFilters[filter];
    assign({ model: 'grid.filterParams', value: newFilters });
    setColData(powerFilter(data, newFilters));
  };

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
            addFilter={handleAddFilter}
            labelKey="title"
            options={columns}
            resetData={resetData}
            valueKey="dataKey"
          />
        </div>
      </div>
      <If condition={filters.length}>
        <div className="flex">
          <div className="m-l-12 filterbar">
            <For each="filter" index="idx" of={filters}>
              <Badge
                badgeLabel={filter}
                key={idx}
                onClose={handleDeleteFilter}
                title="Click to clear"
              >
                <span>
                  {filterParams[filter].column.title}&nbsp;
                  {filterParams[filter].operator}&nbsp;
                  <b>{filterParams[filter].input}</b>
                </span>
              </Badge>
            </For>
          </div>
        </div>
      </If>
    </div>
  );
};

GridHeader.propTypes = {
  setColData: PropTypes.func.isRequired,
  colData: PropTypes.array,
  columns: PropTypes.array,
  data: PropTypes.array,
  title: PropTypes.string,
};

GridHeader.defaultProps = {
  colData: [],
  columns: [],
  data: [],
  title: '',
};

export default GridHeader;
